# Rakamin-Qwords Landing Page Project

## Setup Project

Berikut adalah langkah-langkah untuk mengatur proyek di mesin lokal Anda:

1. Clone repositori ini ke dalam folder lokal Anda:

    ```bash
    git clone https://github.com/username/rakamin-qwords.git
    ```

2. Pindah ke folder proyek:

    ```bash
    cd rakamin-qwords
    ```

3. Setup proyek menggunakan Composer:

    ```bash
    composer create-project laravel/laravel
    ```

4. Install dependensi PHP menggunakan Breeze:

    ```bash
    php artisan breeze:install
    ```

5. Install dependensi JavaScript menggunakan npm:

    ```bash
    npm install
    ```

6. Setelah langkah-langkah di atas selesai. selanjutnya setup database seperti biasa nya:

    ```bash
    composer update
    ```

    ```bash
    cp .env.example .env
    ```

Setelah menjalankan command tersebut, cek file .env nya kemudian ubah "DB_DATABASE=" isikan bebas saja.

lalu copy database yang sudah di isi tersebut ke :
`http://localhost/phpmyadmin/`

-   klik new dan create new table, isikan table nama saja dan klik create:

7. Jalankan command berikut:

    ```bash
    php artisan migrate --seed

    ```

    ```bash

    php artisan key:generate

    ```

Setelah Selesai Baru jalankan server nya

8. Jalankan server Laravel:

    ```bash
    php artisan serve
    ```

9. Di terminal kedua, kompilasi asset menggunakan npm:

    ```bash
    npm run dev
    ```

10. Dan tinggal buka saja melalui browser anda dengan url: `localhost:8000`.

## Teknologi Yang Digunakan

-   Laravel (Backend)
-   React (Frontend)
-   JSX (JavaScript Syntax Extension)
-   CSS (Cascading Style Sheets)
-   Tailwind CSS (Styling)
-   DaisyUI (UI Components)
