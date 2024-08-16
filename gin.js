const { Telegraf } = require('telegraf');
const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

const bot = new Telegraf('TOKEN_BOT_TELEGRAM_ANDA');

bot.start((ctx) => ctx.reply('Selamat datang! Kirimkan kredensial VPS Anda dalam format: IP:User:Password'));

bot.on('text', async (ctx) => {
    const [ip, user, password] = ctx.message.text.split(':');

    if (!ip || !user || !password) {
        return ctx.reply('Harap berikan kredensial dalam format yang benar: IP:User:Password');
    }

    ctx.reply('Mencoba untuk terhubung ke VPS...');

    try {
        await ssh.connect({
            host: ip,
            username: user,
            password: password,
        });

        ctx.reply('Berhasil terhubung. Menjalankan perintah instalasi...');

        const command = `
        sudo apt update -y && \
        sudo apt install -y curl && \
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash && \
        export NVM_DIR="$HOME/.nvm" && \
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
        nvm install 18 && \
        nvm use 18 && \
        sudo apt install -y npm && \
        git clone https://github.com/AutoFTbot/Api-FighterTunnel && \
        mv Api-FighterTunnel /etc && \
        cd /etc/Api-FighterTunnel && \
        npm i && \
        cp .env.sample .env && \
        npm install -g pm2 && \
        pm2 start npm --name "api-fighter-tunnel" -- start && \
        pm2 save && \
        pm2 startup`;

        const result = await ssh.execCommand(command);
        ctx.reply(`Perintah berhasil dijalankan dengan output: ${result.stdout}`);

        ssh.dispose();
    } catch (err) {
        ctx.reply(`Gagal terhubung atau menjalankan perintah: ${err.message}`);
    }
});

bot.launch();
