## Getting Started

Silahkan ikuti langkah-langkah berikut ini untuk memulai proyek di lokal komputer anda.

**Prerequisites**

Sebelum memulai proyek pastikan telah menginstall tools yang diperlukan dibawah ini:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning repository**

```bash
git clone https://github.com/agfebrian/invoice-hub.git
cd invoice-hub
```

**Installation**

Install dependencies yang dibutuhkan untuk proyek menggunakan npm:

```bash
npm install
```

**Deploy project to Vercel**

Pada proyek ini saya menggunakan database postgresql yang telah disediakan oleh vercel oleh karena itu anda perlu mendeploy aplikasi terlebih dahulu kemudian setelah itu anda dapat mengatur database dalam proyek tersebut. Untuk lebih jelasnya anda bisa mengikuti artikel ini [https://nextjs.org/learn/dashboard-app/setting-up-your-database](https://nextjs.org/learn/dashboard-app/setting-up-your-database).

**Setup environment variables**

```env
NEXT_PUBLIC_BASE_URL_LOCALE=http://localhost:3000
NEXT_PUBLIC_BASE_URL_PRODUCTION=url_aplikasi_yang_telah_dideploy
DATABASE_URL=url_database_yang_telah_digenerate_oleh_vercel
```

Jangan lupa untuk menambahkan environment juga diconfig vercel:

- Masuk ke dashboard proyek kemudian pada tab bar diatas pilih `Settings`
- Lalu pilih `Environment Variables` pada side bar
- Klik tombol `Import .env` maka otomatis variables yang diupload akan diimport
- Setelah itu klik tombol `Redeploy` dan tunggu hingga tahap build selesai

Jika tidak ada error seharusnya aplikasi dapat diakses secara online.

**Running Project Localy**

```bash
npm run dev
```

**Populate Data Invoices**

```bash
npm run seed
```

## Features

- Memungkinkan user untuk dapat membuat, mengubah, menghapus, dan melihat semua invoice
- Terdapat filtur pencarian berdasarkan nama invoice dan filter invoice berdasarkan status (Paid, Unpaid, Delete)
- Membuat nomor invoice secara otomatis berdasarkan urutan terakhir invoice masuk, dan memungkinkan untuk mengubah urutan antrian INV2025-01 dapat dengan mudah diubah menjadi INV2025-0001
- Mudah di maintain menggunakan component base seperti Atomic Design

## Kenapa Nextjs

- Nextjs adalah sebuah framework popular sehingga memiliki dukungan dan komunitas yang besar
- Nextjs mudah dan cepat untuk development
- Hasil build teroptimasi
- Server side component secara default (Static & Dynamic Rendering)
- Teroptimasi untuk SEO

## Live Preview 🚀

[https://invoice-hub-ivory.vercel.app/](https://invoice-hub-ivory.vercel.app/)
