# Telegram VPS Management Bot

## Deskripsi

Bot Telegram ini dirancang untuk mengelola VPS menggunakan SSH dan memberikan pembaruan real-time tentang proses instalasi. Bot ini menggunakan `telethon` untuk integrasi dengan Telegram, `paramiko` untuk koneksi SSH, dan `sqlite3` untuk penyimpanan data.

## Fitur

- Mengelola konfigurasi VPS melalui Telegram.
- Menyimpan data pengguna dan log proses instalasi dalam database SQLite.
- Mengirim log proses instalasi ke Telegram secara real-time.

## Prasyarat

- Python 3.8 atau lebih baru
- `telethon`
- `paramiko`
- `sqlite3`

## Instalasi

1. **Clone repositori ini:**

    ```bash
    git clone https://github.com/username/repository.git
    cd repository
    ```

2. **Instal dependensi:**

    ```bash
    pip install telethon paramiko
    ```

3. **Jalankan bot:**

    ```bash
    python3.8 -m BotAutoinstall
    ```

## Penggunaan

1. **Mulai Bot:**

   Kirim perintah `/start` ke bot untuk memulai proses.

2. **Kirim Informasi VPS:**

   Kirim informasi VPS Anda dalam format `IP:user:password`. Bot akan memulai proses instalasi dan meminta data lainnya.

3. **Pantau Instalasi:**

   Bot akan mengirimkan pembaruan log proses instalasi secara real-time.

## Kontribusi

Silakan buka [Issues](https://github.com/username/repository/issues) untuk melaporkan masalah atau mengusulkan fitur baru. Kontribusi sangat diterima melalui pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
