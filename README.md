## JOBPROFIT

## Getting Started

Anda dapat memulai mengedit halaman di setiap halamannya langsung, misalnya anda ingin mengedit halaman login, buka `login.html` dan edit. Halaman akan auto-update setiap anda edit dan menyimpan filenya.

## Style

global styles ada di dalam `assets/css/main.css`, anda bisa mengedit style disini

sebelum anda memulai edit di `assets/css/main.css` jalankan dahulu perintah ini di terminal :

``` bash
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --watch
```

Project ini menggunakan [`Material Symbols & Icons - Google Fonts`](https://fonts.google.com/icons)

anda dapat mengganti icons dengan mengganti nama iconnya, misalnya :
```bash
<span class="material-symbols-outlined"> contract </span>

menjadi

<span class="material-symbols-outlined"> settings </span>
```

anda juga bisa mengedit style icon dengan menambahkan class [`tailwindcss`](https://tailwindcss.com/docs/installation) pada class tag <span></span>

## Learn More

- [tailwindcss Documentation](https://tailwindcss.com/docs/installation) - dokumentasi taialwindcss


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.