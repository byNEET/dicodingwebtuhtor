    Jika dituliskan setelah variabel (x++), statement akan mengembalikan nilai variabel saat ini sebelum ditingkatkan nilainya.
    Jika dituliskan sebelum variabel (++x), statement akan mengembalikan nilai variabel setelah ditingkatkan nilainya.
    
## property/method window yg sering digunakan:
    history: Sebagai navigasi (go back atau go forward) histori URL browser.
    location: Mendapatkan URL yang terdapat pada address bar browser.
    alert(): Menampilkan dialog alert dengan pesan dan tombol “ok”.
    close(): Menutup tab yang aktif.
    confirm(): Menampilkan dialog dengan pesan dan tombol “ok” dan “cancel”. Method ini akan mengembalikan nilai boolean sesuai response dari pengguna.
    prompt(): Menampilkan dialog dengan pesan dan teks input. Method ini akan mengembalikan nilai string sesuai response dari pengguna.

## document

- getElementById();document.getElementById(“display”);Mengembalikan elemen yang memiliki nilai id “display”.
- getElementsByName();document.getElementsByName(“button”);Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai “button”.
- getElementsByClassName();document.getElementsByClassName(“button”):Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai “button”.
- getElementsByTagName();document.getElementsByTagname(“div”);Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> elemen
- querySelector();document.querySelector(“.button”);Mengembalikan elemen pertama yang menerapkan class “button”.
- querySelectorAll();document.querySelectorAll(“.button”);Mengembalikan banyak elemen (HTMLCollection) yang menerapkan class “button”.

## Tipe Web Storage

Web API menyediakan dua tipe Web Storage untuk kita gunakan, yakni sessionStorage dan localStorage.

Sebelum menggunakan Web Storage baik sessionStorage atau localStorage, kita perlu memastikan browser support terhadap fitur tersebut, dengan cara:

    if (typeof(Storage) !== "undefined") {
      // Browser mendukung sessionStorage/localStorage.
    } else {
      // Browser tidak mendukung sessionStorage/LocalStorage
    }

## Session Storage
Tipe storage yang pertama adalah Session Storage yang mana digunakan untuk menyimpan data sementara pada browser. Data akan hilang ketika browser atau tab browser ditutup.

Untuk menggunakan Session Storage kita gunakan object `sessionStorage`, kemudian untuk menyimpan datanya gunakan method `setItem()`, method ini membutuhkan dua argumen yakni `key` dan `nilai` yang akan dimasukkan. Kemudian untuk mengakses data yang sudah dimasukkan kita gunakan method `getItem()` dan gunakan `key` sebagai argumen methodnya.

data yang disimpan pada sessionStorage akan bertahan jika terjadi reload pada browser, namun data tersebut akan hilang apabila tab browser atau browser itu sendiri ditutup.

## Local Storage
Tipe storage yang kedua adalah Local Storage yang serupa dengan session storage, namun data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup. Kita bisa menghapus data pada local storage dengan method `removeItem()`.

Untuk penggunaan `localStorage` identik dengan `sessionStorage`, perbedaanya storage ini diakses melalui object `localStorage`.

data yang disimpan pada `localStorage` akan bertahan walaupun jendela browser atau tab browser ditutup, untuk menghapus datanya bisa dengan tombol “Hapus Storage” dimana tombol tersebut akan memanggil method `localStorage.removeItem()`.