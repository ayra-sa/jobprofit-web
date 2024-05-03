## JOBPROFIT

## Getting Started

Anda dapat memulai mengedit halaman di setiap halamannya langsung, misalnya anda ingin mengedit halaman login, buka `login.html` dan edit. Halaman akan auto-update setiap anda edit dan menyimpan filenya.

## Style

style global ada di dalam `assets/css/main.css`, anda bisa mengedit style disini

sebelum anda memulai edit di `assets/css/main.css` jalankan dahulu perintah ini di terminal :

``` bash
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --watch
```


jika anda ingin mengubah global variables seperti colors palette, anda bisa mengubah pada `assets/css/main.css`, ada di bagian `:root` :
``` bash
:root {
    --font: "Poppins", sans-serif;
    --background: 206 37% 96%;
    --foreground: 172 0% 63%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --code-label: 19 86% 94%;
    --code-label-foreground: 24 99% 48%;
    --primary: 172 26% 30%;
    --primary-foreground: 300 100% 100%;
    ...
    ...
    ...
  }
```


Project ini menggunakan [`Material Symbols & Icons - Google Fonts`](https://fonts.google.com/icons)

anda dapat mengganti icons dengan mengganti nama iconnya, misalnya :
```bash
<span class="material-symbols-outlined"> contract </span>

menjadi

<span class="material-symbols-outlined"> settings </span>
```

anda juga bisa mengedit style icon dengan menambahkan class [`tailwindcss`](https://tailwindcss.com/docs/installation) pada class di dalam tag span

## Learn More

- [tailwindcss Documentation](https://tailwindcss.com/docs/installation) - dokumentasi taialwindcss