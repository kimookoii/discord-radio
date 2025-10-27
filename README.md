
# 🎵 Discord Radio Bot

Bot Discord multi-akun yang berfungsi untuk **memutar audio YouTube secara terus-menerus** di voice channel.  
Dibangun menggunakan **Node.js**, **discord.js**, dan **ytdl-core**.  
Bot ini juga memiliki sistem **auto reconnect** dan **auto refresh** untuk menjaga kestabilan saat self-hosting.

---

## 🚀 Fitur Utama
- 🔁 **Multi-bot system** (3 bot aktif sekaligus)
- 🎧 **Streaming langsung dari YouTube**
- 🟢 **Auto join kembali** ke voice channel jika terputus
- 🕐 **Uptime refresh otomatis** setiap 2 jam dengan `cron`
- 📱 **Tampilan online seperti pengguna mobile (Discord iOS)**
- 🎯 **Status dinamis** yang berubah secara acak setiap beberapa detik

---

## 🧩 Teknologi yang Digunakan
- [discord.js](https://discord.js.org/) — Library utama untuk Discord API  
- [ytdl-core](https://www.npmjs.com/package/ytdl-core) — Streaming audio dari YouTube  
- [cron](https://www.npmjs.com/package/cron) — Penjadwalan auto refresh  
- Node.js (v12.x)

---

## ⚙️ Instalasi dan Penggunaan

### 1. Clone Repositori
```bash
git clone https://github.com/kimookoii/discord-radio.git
cd discord-radio
````

### 2. Instal Dependensi

```bash
npm install
```

### 3. Konfigurasi

Buat file `config.json` di folder utama seperti berikut:

```json
{
  "STATUS": ["🎶 Sedang memutar musik", "📻 Radio aktif 24/7"],
  "TIPE": "LISTENING",
  "CENEL": "123456789012345678",
  "SERPER": "123456789012345678",
  "LINKYUTUP": "https://www.youtube.com/watch?v=example",

  "STATUS2": ["🎧 Radio 2 Online"],
  "TIPE2": "LISTENING",
  "CENEL2": "223456789012345678",
  "SERPER2": "223456789012345678",
  "LINKYUTUP2": "https://www.youtube.com/watch?v=example2",

  "STATUS3": ["🎼 Radio 3 Mainstream"],
  "TIPE3": "LISTENING",
  "CENEL3": "323456789012345678",
  "SERPER3": "323456789012345678",
  "LINKYUTUP3": "https://www.youtube.com/watch?v=example3"
}
```

### 4. Tambahkan Token Bot ke Environment Variable

Buat file `.env` (atau tambahkan secara manual di sistem host):

```
TOKEN=token_bot_pertama
TOKEN2=token_bot_kedua
TOKEN3=token_bot_ketiga
```

### 5. Jalankan Bot

```bash
node index.js
```

---

## 🔁 Cara Kerja

1. Setiap bot bergabung ke voice channel yang ditentukan dan mulai memutar audio YouTube.
2. Jika koneksi ke voice channel terputus, bot otomatis akan join kembali dan melanjutkan pemutaran.
3. Sistem `cron` akan menjalankan perintah `refresh` setiap 2 jam untuk memastikan uptime server tetap stabil.
4. Status bot akan berubah setiap 5 detik menggunakan data dari `config.json`.

---

## ⚠️ Catatan

* Pastikan server Discord memiliki **izin untuk mengundang dan mengakses voice channel**.
* Gunakan **YouTube link valid** dan **non-restricted** agar pemutaran berjalan lancar.
* Jika kamu self-host di layanan seperti Repl.it, Glitch, atau VPS, sistem `cron` akan membantu menjaga agar proses tidak berhenti.

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi **MIT License** — kamu bebas menggunakan, memodifikasi, dan mendistribusikannya dengan mencantumkan atribusi.

---

## ✨ Kontributor

Made with ❤️ by [zicc](https://github.com/kimookoii)

---
