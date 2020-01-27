## beberapa tag pada head

    <title> 
    <style>
    <base>
    <link>
    <meta>
    <script>
    <noscript>

## catatan:
    Website : Halaman yang menampilkan informasi melalui teks atau gambar. Website dapat diakses melalui internet dengan menggunakan browser.
    Browser : Sebuah perangkat lunak yang dapat menerjemahkan berkas HTML, CSS dan Javascript yang di dapat dari server untuk ditampilkan dalam bentuk halaman website.
    HTTP Server : Server berperan pada sebuah website sebagai sebuah software yang dapat menerima transaksi dari HyperText Transfer Protocol.
    DNS Server : Server yang dapat mengubah/mengarahkan website melalui sebuah nama domain.
    Client : Perangkat yang meminta (request) suatu layanan tertentu ke suatu server.
    HTML : Salah satu markup language, yang digunakan untuk membuat struktur dan menampilkan content pada World Wide Web (Website).
    CSS : Bahasa yang digunakan untuk mengatur dan mempercantik tampilan pada website.
    JavaScript : Bahasa pemrograman yang digunakan untuk membantu website menampilkan informasi secara dinamis.
    Text Editor : Sebuah perangkat lunak yang digunakan untuk mengelola plain text. Kode HTML, CSS dan Javascript dituliskan menggunakan perangkat ini.
    Plain text : Teks yang tidak terformat. Format teks yang digunakan dalam menuliskan berkas HTML, CSS dan Javascript.
    Rich text : Teks terformat. Format teks yang digunakan ketika kita menuliskan dengan menggunakan Microsoft Word atau teks editor berbasis berbasis WYSIWYG [What You See Is What You Get].
    Element : Sebuah komponen pada HTML yang ditandai dengan tag pembuka dan penutup.

## atribut global

    accesskey:	
    Menentukan tombol shortcut untuk mengaktifkan/memfokuskan pada sebuah element.

    class:
    Menentukan satu atau lebih classname untuk sebuah elemen.

    contenteditable:
    Menentukan konten dari elemen merupakan konten yang dapat diubah atau tidak

    data-*:
    Digunakan untuk menyimpan sebuah data pribadi khusus ke halaman atau aplikasi.

    dir:
    Menentukan arah teks untuk konten pada suatu elemen.

    draggable: 
    Menentukan apakah suatu elemen dapat di-drag atau tidak.

    dropzone:
    Menentukan apakah data yang di-drag adalah data yang disalin, dipindahkan, atau ditautkan saat dijatuhkan.

    hidden:
    Menentukan apakah suatu elemen ditampilkan atau tidak pada browser.

    id:
    Menetapkan id pada elemen.

    lang:
    Menentukan bahasa pada konten elemen.

    spellcheck:
    Menentukan apakah elemen harus diperiksa ejaannya dan tata bahasanya atau tidak.

    style:
    Menentukan styling secara satu baris untuk suatu elemen.

    tabindex:
    Menentukan urutan dari suatu elemen.

    title:
    Menentukan informasi tambahan tentang suatu elemen.

    translate:
    Menentukan apakah konten elemen harus diterjemahkan atau tidak.

## Berikut nilai - nilai yang dapat digunakan pada atribut type pada elemen < ol >:

    1:
    Menggunakan angka dalam urutan item (default)

    a:
    Menggunakan huruf kecil dalam urutan item

    A:
    Menggunakan huruf besar dalam urutan item

    i:
    Menggunakan huruf romawi kecil dalam urutan item

    I:
    Menggunakan huruf romawi besar dalam urutan item

## special element
blockquote: atribut cite=link sumber

pre: menampilkan teks persis seperti ketika di text editor dengan jumlah spasi dan karakter special lain lain

figure & figurecaption: digunakan untuk pengelompokan sehingga dapat diberi caption dengan elemant figcaption didalam element figure

## inline element

perbedaan block elemnt dan inline element: block element akan manambhahkan baris baru ketika dibuat, sedangkan inline element tidak.

anchor `<a>`: untuk link, navigasi, download, dll

text el: `<em>,<strong>,<q>` mereng,tebal,inline quote

`<cite>` citation: dapat digunakan untuk membukus element `<a>` dan biasanya tulisan akan menjadi mereng

defenition term `<dfn>`: untuk mendefinisakn sebuah istilah(term) biasanya dalam elemnt `<p>` dan akan menjadi mereng

`<sub>,<sup>`: tuk rumus text kecil <sup>atas</sup> dan <sub>bawah</sub>

`<mark>`; <mark>hinglighting text</mark>

`<br>`: line break

## layout semantic element

elemnt layout dengan semanthic code di html5 `<header><footer><nav>`

Elemen `<article>` bertindak sebagai container untuk independen content pada sebuah halaman, artinya konten utuh yang tidak terkait dengan konten lain, bisa saja sebuah artikel blog, komentar, forum post dan konten lainnya. 

Elemen `<article>` dapat berada pada elemen `<article>` lainnya (nested) selama artikel tersebut berkaitan dengan induk elemen `<article>` yang menampungnya.

`<aside>` elemnt yg biasanya terletak di samping halaman. bisa juga berada di dalam article

`<section>` biasanya digunakan untuk mengelompokkan element dimana elemnt tersebut terdapat heading didalamnya, lalu section dpat diletakkan di dalam artikel yg membutuhkan pengelompokan berdasar heading

## generic element

`<div>` wadah/container

`<span>` sama seperti div, tapi tidak menambahkan break line, jadi cocok untuk digunakan pada inline text/element

## table

basic table `<table>,<tr>,<th>,<td>` 

untuk menembah ruang column pada table gunakan atribut column spanning `<td colspan='2'>` 

menambah border dengan attribut `<table boder="1">`

untuk merentangkan baris gunakan attribut row span `<th rowspan='3'>`

## css selector basic

- Type Selector: selector yang menggunakan nama elemnt ex; `body,header,p,a,span`

- Class Selector: nama selector diawali dengan tanda titik `.class .textmereng`. Class bersifat shareable, sehingga dapat diterapkan pada banyak elemen dengan tipe elemen yang berbeda-beda.
Tidak hanya itu, sebuah elemen juga mungkin memiliki banyak nilai class, sehingga kita dapat menerapkan lebih dari satu rule atau gabungan rule pada elemen target. Untuk menggunakannya, pada atribut class kita cukup tuliskan nama kelasnya dan pisahkan tiap nilai kelasnya dengan spasi.

- ID Selector: ID selector menetapkan target elemen berdasarkan nilai dari atribut id yang diterapkan pada elemennya. Sama seperti class, atribut id dapat diterapkan pada seluruh elemen HTML, dan kebanyakan atribut ini digunakan untuk memberikan sebuah arti pada generic element seperti `<div>` dan `<span>`. Namun atribut id ini tidak bersifat shareable, yang artinya nilai id ini harus unik dan digunakan pada satu elemen saja. dan diawali tanda pagar `#`

- Attribute Selector: merupakan cara menetapkan target elemen berdasarkan sebuah atribut yang digunakan atau bahkan bisa lebih spesifik dengan nilainya. Contohnya sebagai berikut:
    /* <a> element yang menerapkan href attribut */
       a[href] {
           color: blue;
       }
 
       /* <a> element yang menerapkan nilai pada href dengan awalan "#" */
       a[href^="#"] {
           background-color: gold;
       }
 
       /* <a> element yang menerapkan nilai pada href yang mengandung teks "example" */
       a[href*="example"] {
           background-color: silver;
       }
 
       /* <a> element yang menerapkan nilai pada href yang mengandung teks "insensitive" tidak mementingkan huruf kapital*/
       a[href*="insensitive" i] {
           color: cyan;
       }
 
       /* <a> element yang menerapkan nilai pada href dengan akhiran ".org" */
       a[href$=".org"] {
           color: red;
       }

- Universal Selector
- combinators: Ada empat kombinator yang dapat kita gunakan yaitu: Adjacent Sibling Selector, General Sibling Selector, Child Selector, dan Descendant Selector.
  - Adjacent Sibling Selector (+): Adjacent Sibling Selector terdiri dari dua buah target elemen, namun hanya elemen kedua yang menerapkan rule selama elemen tersebut dituliskan langsung setelah elemen pertama pada berkas HTML. Selain itu kedua elemen tersebut harus berada di dalam induk elemen yang sama.
  - General Sibling Selector (~): Mirip seperti Adjacent Sibling Selector namun rules akan diterapkan pada seluruh elemen kedua yang berada setelah elemen pertama. Dengan catatan, induknya sama, walaupun posisi dari elemen kedua tidak berada tepat setelahnya.
  - Child Selector (>): `div > p {background-color: yellow;}`. Pada contoh di atas rule akan diterapkan pada seluruh elemen paragraf yang berada di dalam elemen div secara langsung. Dalam arti lain, elemen paragraf merupakan child dari elemen div.
  - Descendant Selector (space): Descendant Selector mirip seperti child selector namun hierarkinya lebih luas, karena rule akan diterapkan pada seluruh elemen yang menjadi turunannya walaupun secara tidak langsung. Basic selector pertama yang dituliskan pada selector ini menjadi induknya dan basic selector yang kedua merupakan akan menerapkan rule. Selector ini menggunakan spasi dalam menggabungkan dua basic selector. `div p {background-color: yellow;}`. Pada contoh di atas rule akan diterapkan pada seluruh elemen paragraf yang merupakan turunan dari elemen div.
  - Pseudo Selector: selector ini menargetkan elemen pada bagian yang “tidak terlihat” seperti sifat pada elemen, sehingga untuk menetapkannya, kita tidak bisa menggunakan selector biasa. Salah satu contoh yang paling sering kita terapkan adalah :hover, Pseudo Selector tersebut kita gunakan untuk menetapkan rule ketika cursor diarahkan ke target elemen.
    - Pseudo-class(:): merupakan sebuah class “semu” yang sebenarnya ada pada tiap elemen HTML. Pada contoh sebelumnya kita sudah mengetahui salah satu pseudo-class selector, dengan menggunakan selector ini kita dapat memilih elemen berdasarkan class yang tidak nampak pada dokumen. Kita bisa menetapkan rule hanya ketika sebuah tautan telah dikunjungi (:visited) atau ketika sebuah elemen diarahkan dengan kursor (:hover). link: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
    - Pseudo-elemen Selector (::): Sama seperti pseudo-class, pseudo-elemen merupakan sebuah elemen “semu” yang sebenarnya ada tetapi tidak tampak secara tertulis pada berkas HTML. Selector ini biasa digunakan ketika kita ingin menambahkan sebuah konten tepat sebelum dan setelah sebuah elemen paragraf. Alhasil kita tidak perlu menuliskan struktur elemen tersebut pada berkas HTML. Cukup manfaatkan pseudo-elemen ::before dan ::after kemudian tuliskan konten tersebut cukup pada CSS. Contohnya kita ingin menambahkan tanda kutip sebelum dan sesudah elemen blockquote. Seperti ini cara menuliskannya: `blockquote::before, blockquote::after {content: '"'; font-size: 24px; font-style: italic; font-weight: bold;}`. link; https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

## Font Styling

    font-family : Menetapkan jenis font yang akan diterapkan pada target;
    font-size : Menentukan ukuran pada teks.
    font-weight : Menentukan ketebalan pada teks. 
    font-style : Menetapkan styling yang diterapkan pada teks.
    font-variant : Menentukan teks untuk menggunakan gaya small caps (huruf kapital kecil).
    font : Digunakan sebagai shorthand dari properti font yang ada.

- genereic font family
  
        serif : jenis font yang memiliki runcing pada garis akhir karakternya. Times New Roman merupakan salah satu jenis serif font.
        sans-serif : jenis font yang tidak meruncing pada garis akhir karakternya. Contohnya “Open Sans”, “Fira Sans” dan lainnya.
        monospace : jenis font yang memiliki nilai lebar tiap karakternya sama. Consolas merupakan salah satu jenisnya.
        cursive: jenis font yang tampak seperti handwriting atau hasil tulisan tangan.
        fantasy : jenis font yang merepresentasikan karakteristik yang menyenangkan.
        system-ui : jika menerapkan nilai ini maka font yang diterapkan akan sama seperti font yang digunakan pada sistem operasi kita.
        math : jenis font yang digunakan untuk penulisan rumus-rumus matematika.
        emoji : jenis font yang digunakan untuk menampilkan emoji.
        fangsong : jenis font yang menampilkan gaya penulisan Chinese.
- font size
  - relative unit

        em: Font size: Satuan relatif terhadap ukuran font yang sedang digunakan pada elemen (contohnya, 2em berarti 2 kali lebih besar dari ukuran font seharusnya).
        ex: Font height: Satuan relatif terhadap tinggi font saat ini, satuan ini sangat jarang sekali digunakan
        rem: Font size: Mirip seperti em, tetapi rem merupakan satuan relatif terhadap ukuran font dari root element.
        ch: Font width: Satuan relatif terhadap lebar dari karakter “0” nol.
        vw: Viewport width: Satuan relatif terhadap 1% lebar viewport. Contoh 1vw = 1% dari lebar viewport. Satuan ini tidak didukung pada browser IE8 ke bawah.
        vh: Viewport height: Satuan relatif terhadap 1% tinggi viewport. Contoh 1vh = 1% dari tinggi viewport. Satuan ini tidak didukung pada browser IE8 ke bawah.
  - Absolute unit

        px: Menetapkan nilai font berdasarkan ukuran pixel
        pt: Menetapkan nilai font berdasarkan points (1/72 inch di CSS2.1)
        pc: Menetapkan nilai font berdasarkan picas (1 pica = 12 point)
        mm: Menetapkan nilai font berdasarkan millimeters
        cm: Menetapkan nilai font berdasarkan centimeters
        in: Menetapkan nilai font berdasarkan inches
  - Selain dengan menetapkan nilai dan satuannya secara langsung, untuk mengatur ukuran font kita juga bisa gunakan nilai persentase.
  - Dan yang terakhir kita juga bisa menentukan ukuran font dengan menuliskan kata kunci secara spesifik yang tersedia pada CSS. Kata kunci tersebut adalah: `xx-small, x-small, small, medium, large, x-large, dan xx-large`. Kata kunci tersebut tidak ada kaitannya dengan pengukuran tertentu (bukan ukuran yang absolute) tetapi nilainya diubah secara konsisten satu sama lain.
- font weigth : Nilai dari properti ini dapat ditentukan dengan menggunakan numeric values (100 sampai 900) atau dengan menggunakan descriptive terms (normal, bold, bolder, dan lighter). 
- font-style: Properti ini digunakan untuk menentukan postur dari teks yang ditampilkan, apakah bentuknya vertikal (normal) atau miring (italic dan oblique).
- font-variant: Kita yang terbiasa dengan aplikasi document editor seperti Microsoft Word tentu tahu atau sudah mencoba fitur small caps. Fitur ini dapat membuat teks menjadi kapital tetapi dituliskan secara kecil dan merapat.
- Shorthand `target{font: style weight variant size font-family}`.Nilai dari properti font merupakan nilai dari seluruh properti dari font yang sudah kita bahas. Tiap nilai dipisahkan menggunakan spasi. Pada properti ini urutan nilai merupakan hal yang penting, sehingga jangan sampai salah urutan dalam menuliskannya. Kesalahan penulisan atau urutan menyebabkan seluruh struktur rule menjadi tidak valid. Walaupun begitu kita bisa tidak menuliskan seluruh nilai properti yang ada, tetapi nilai dari properti font-size dan font-family wajib ada ketika menggunakan properti ini. Berikut contohnya penulisan minimal ketika kita menggunakan properti font: `p{font: 1em sans-serif;}`

## text styling
Pembahasan sebelumnya kita terfokus pada formating bagaimana bentuk karakter ditampilkan dengan menggunakan beberapa properti font yang ada. Sekarang kita akan mempelajari bagaimana seorang developer bisa memberikan formatting pada keseluruhan teks yang ada pada baris paragraf, seperti menetapkan inden, jarak antar baris, kata dan huruf, dan sebagainya. Maka dari itu, mari kita bahas satu persatu.

- line height: digunakan untuk mengatur jarak minimal dari garis dasar ke garis dasar dalam menampilkannya teks pada halaman. Jika kita terbiasa dengan software dokumen editor seperti Microsoft Word, properti ini mirip dengan fungsi line height.
- Text Indent: Dalam membuat sebuah dokumen tidak jarang kita membutuhkan jarak/lekuk di awal paragraf. Hal tersebut dapat dilakukan pada website dengan menerapkan properti `text-indent`. nilainya bisa menggunakan `px,em,in,% dan minus(-)`
- Text Alignment
  
        text-align: left; Membuat perataan teks pada ujung kiri
        text-align: right; Membuat perataan teks pada ujung kanan
        text-align: center; Membuat perataan teks secara menengah
        text-align: justify; Membuat perataan teks yang setara pada ujung kiri dan kanannya

- Text Decoration

        text-decoration: underline; Memberikan garis bawah (underline) pada teks
        text-decoration: overline; Memberikan garis atas (overline) pada teks
        text-decoration: line-through; Memberikan efek tulisan dicoret (strikethrough)
        text-decoration: none; Menghilangkan dekorasi teks yang ada pada elemen
- Text Transform

        text-transform: none; Teks yang ditampilkan sama seperti yang dituliskan
        text-transform: capitalize; Membuat huruf pertama besar pada tiap katanya
        text-transform: lowercase; Membuat seluruh teks menggunakan huruf kecil
        Text-transform: uppercase; Membuat seluruh teks menggunakan huruf besar
- Word and Letter Spacing
- Properti letter-spacing digunakan untuk mengatur jarak antar huruf, sedangkan word-spacing digunakan untuk mengatur jarak antar kata. Berikut contohnya:

        p#letter {
            letter-spacing: 4px;
        }
        p#word {
            word-spacing: 1.5em;
        }
- Text Shadow `text-shadow`: Nilai dari properti ini cukup rumit karena membutuhkan tiga buat nilai dan satu buah nilai warna sehingga membutuhkan empat nilai dalam satu properti untuk menentukan bayangannya. `text-shadow: 1px 1px 3px #666666;`
  - Nilai pertama : menunjukkan seberapa jauh ke kiri atau kanan (horizontal) bayangan harus ditampakkan.
  - Nilai kedua : menunjukkan jarak ke atas atau ke bawah (vertical) bayangan harus ditampakkan. 
  - Nilai Ketiga (opsional) : menentukan tingkat keburaman yang harus diterapkan pada bayangan.
  - Nilai Keempat :  menentukan warna yang digunakan pada bayangan.
- font face: CSS memiliki fitur yang digunakan untuk memasukan font external ke dalam CSS, yakni menggunakan `@font-face`. link: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

## color

 predefined color name : https://www.w3schools.com/colors/colors_names.asp.

 opacity; `div#opacity {background-color: red;opacity: 0.5;}`

## Box Element

    - Content : Merupakan sebuah inti dari kotak elemen yang merupakan konten dari elemen itu sendiri
    - Padding : Area yang menjadi jarak antara border elemen dengan konten yang ditampilkan. Ketika kita menerapkan background-color maka warna tersebut diterapkan pada area padding. Penerapan ukuran padding pada elemen merupakan opsional.
    - Border : Merupakan garis yang mencakup konten beserta padding. Penerapan border pada elemen merupakan opsional.
    - Margin : Berbeda dengan padding, margin merupakan area jarak diluar dari border. Pada ilustrasi diatas, margin ditunjukkan dengan warna merah muda namun pada aslinya margin selalu transparan dan penerapan margin pada elemen merupakan opsional.
    - Edge of element : merupakan batas dari suatu elemen. Di dalamnya terdapat margin, border, padding dan konten. Pada ilustrasi di atas, batas elemen ditunjukkan dengan garis putus tetapi pada aslinya batas elemen selalu tidak terlihat.
- **Box Dimensions**: Secara standar sebuah box yang dihasilkan tiap elemen selalu cukup untuk menampung konten. Tetapi kita dapat mengatur nilai dimensi dari box tersebut dengan properti `width dan height. `
- **Limiting Dimension** 
  - `min-width` : merupakan properti yang digunakan untuk menetapkan nilai lebar minimal yang harus dimiliki elemen.
  - `min-height` : merupakan properti yang digunakan untuk menetapkkan nilai lebar maksimal yang harus dimiliki elemen.
  - Dengan cara yang sama, mungkin kita juga perlu membatasi ukuran panjang. Kita bisa gunakan `min-height` dan `max-height`.
- **Overflowing Conten**t: Dimensi box yang dihasilkan elemen selalu cukup untuk menampung konten tetapi hal ini tidak berlaku jika kita tetapkan secara manual panjang dan lebarnya. Tak jarang terjadi overflow ketika kita menerapkan ukuran pada elemen tetapi konten di dalamnya begitu banyak. Untuk menangani kasus seperti ini kita bisa gunakan properti `overflow`. Properti ini dapat bernilai:

        visible : Merupakan nilai default pada properti ini. Konten yang tidak tertampung (overflow) akan tetap ditampilkan seperti pada standarnya.
        hidden : Jika terjadi overflow, maka konten yang tidak tertampung akan disembunyikan.
        scroll : Memunculkan scroll bar pada pinggir elemen, sehingga konten yang tidak tertampung akan ditampilkan dengan scroll bar. Jika menggunakan nilai ini, scroll bar akan tetap muncul walaupun konten tidak terjadi overflow.
        auto : Sama seperti scroll, bedanya jika tidak terjadi overflow, maka nilai visible yang akan diterapkan.
- **Box-sizing**; Pada CSS3 kita dapat memilih tipe pengukuran lain dalam menentukan dimensi elemen. Dengan menggunakan properti box-sizing kita dapat menentukannya berdasarkan border box, di mana ukuran elemen sudah termasuk content, padding dan border. Dengan metode ini, hasil elemen yang ditampilkan (termasuk padding dan border) akan memiliki dimensi yang sama persis seperti yang kita tentukan.
  - Elemen menerapkan <code>box-sizing: content-box;</code> Ukuran box secara keseluruhan akan menjadi 260px lebar, 260px tinggi; 260 = 200 + 20 + 20 + 10 + 10
  - Elemen menerapkan <code>box-sizing: border-box;</code> Ukuran box akan tetap 200px lebar, 200px tinggi meskipun menerapkan padding dan border
- **Border**; Border merupakan sebuah garis yang mengelilingi area konten dan padding (opsional).
  - Border Width; Properti border-width digunakan untuk mengatur ketebalan dari border. Nilai dari properti ini dapat berupa pixel atau menggunakan predefined names value seperti thin, medium, dan thick. Kita tidak bisa menggunakan nilai persentase (%) pada properti ini.
    - Ketika satu nilai ditentukan, maka nilai berlaku untuk empat sisi.
    - Ketika dua nilai ditentukan, nilai pertama berlaku untuk sisi atas dan bawah, nilai kedua untuk sisi kiri dan kanan.
    - Ketika tiga nilai ditentukan, nilai pertama berlaku untuk sisi atas, nilai yang kedua untuk sisi kiri dan kanan, nilai ketiga untuk sisi bawah.
    - Ketika empat nilai ditentukan, nilai pertama berlaku untuk sisi atas, nilai yang kedua untuk sisi kanan, nilai yang ketiga untuk sisi bawah, dan nilai yang keempat untuk sisi kiri. Urutan tersebut berdasarkan arah jarum jam (clockwise).
  - Border Style; Kita bisa menetapkan tipe border dengan menggunakan properti border-style. Berikut nilai - nilai yang dapat digunakan pada properti ini:
    - solid; Tipe garis padat (tidak terputus - putus)
    - dotted; Garis yang dibentuk dari serangkaian titik-titik (jika ketebalan garis 2px, maka titik-titik akan berukuran 2px dan memiliki jarak 2px antar titiknya).
    - dashed; Garis yang dibentuk dari serangkaian garis pendek.
    - double; Garis yang dibentuk dari dua buah garis padat.
    - groove; Tipe garis yang berbentuk seperti frame
    - hidden;   Digunakan untuk menyembunyikan garis pada elemen.
  - Border Color; Properti terakhir adalah border-color. Properti ini digunakan untuk menentukan warna pada garis dengan menggunakan nilai RGB, Hex, atau nama warna pada CSS.
  - Shorthand; Untuk menerapkan border pada elemen kita harus mendefinisikan seluruh properti border yang ada. Dimulai dari menetapkan ketebalan (`border-width`), tipe (`border-type`), dan warna (`border-color`). Jika kita lupa menetapkan salah satu properti tersebut, maka garis tidak akan nampak pada elemen. `.box {border: 4px dashed #00a2c6; width: 200px;}`
- **Padding**; Padding merupakan jarak antara area konten dan border. Padding banyak diterapkan pada elemen jika elemen tersebut menerapkan warna latar atau pun border. Padding memberikan sedikit ruang sehingga konten di dalam elemen dapat lebih nyaman untuk ditampilkan.
- **Margin**; Seperti halnya padding, margin merupakan ruang atau jarak pada sebuah elemen. Namun jarak tersebut terletak di luar dari konten dan border elemen. Margin digunakan untuk menjaga elemen agar tidak bertabrakan satu sama lain atau dari tepi jendela browser.
- **Centering Content**; Bagaimana meletakkan sebuah kotak tepat pada tengah sebuah halaman atau di dalam elemen induknya? Aturlah margin kanan dan kiri dengan nilai `auto`. Lebih lanjut, kita juga harus menentukan lebar dari kotak tersebut (menggunakan properti `width`). Jika tidak, kotak akan mengambil lebar penuh pada halaman atau induk elemen. `margin: 0 auto;`

- **Display Roles**; Kita pernah membahas mengenai inline dan block pada modul HTML sebelumnya. Kita telah paham bahwa standarnya, tiap elemen HTML memiliki dua tipe yaitu block dan inline. Untuk lebih jelasnya berikut sifat - sifat yang ada pada elemen block dan juga inline:
  - inline element:
    - Elemen HTML yang secara default tidak menambahkan baris baru ketika dibuat.
    - Nilai lebar dan tinggi elemen inline sebesar konten di dalamnya, dan tidak dapat diubah.
    - Margin dan padding hanya mempengaruhi elemen secara horizontal, tidak vertikal.
  - block element:
    - Elemen HTML secara default menambahkan baris baru ketika dibuat.
    - Jika tidak diatur lebarnya, lebar dari elemen block akan memenuhi lebari dari browser atau elemen yang menaunginya.
    - Kita dapat mengatur dimensi dari elemen block.
    - Di dalam elemen block, kita dapat menyimpan tag elemen HTML lainnya.

  Dengan menggunakan properti display, kita dapat mengubah sebuah elemen inline menjadi block, begitupun sebaliknya. Dalam hal ini, properti ini juga dapat digunakan untuk menyembunyikan elemen yang ditampilkan. Nilai dari properti ini dapat berupa:

      inline : digunakan untuk mengubah elemen block berperilaku seperti elemen inline.
      block : digunakan untuk mengubah elemen inline berperilaku seperti elemen block.
      inline-block : membuat elemen block tidak menambahkan baris baru ketika dibuat, namun tetap mempertahankan sifat lain dari elemen block.
      none : digunakan untuk menyembunyikan elemen dari halaman.

- **Box Shadow** ; Nilai dan cara kerja dari properti box-shadow mirip seperti text-shadow, yaitu nilainya menentukan jarak vertikal dan horizontal, tingkat keburaman, dan warna pada bayangan. Pada box shadow, kita juga dapat menentukan tingkat sebaran (spread) bayangan. Semakin besar  nilai, bayangan yang nampak akan semakin luas. Berikut contoh penerapan box shadow pada CSS: `box-shadow: 6px 6px 5px 10px #666666;`. Berikut penjelasan tiap-tiap nilai dari propertinya:
        
        Nilai pertama : menunjukkan seberapa jauh ke kiri atau kanan (horizontal) bayangan harus ditampakkan.
        Nilai kedua : menunjukkan jarak ke atas atau ke bawah (vertical) bayangan harus ditampakkan. 
        Nilai Ketiga (opsional) : menentukan tingkat keburaman yang harus diterapkan pada bayangan.
        Nilai Keempat (opsional) : menentukan tingkat sebaran (spread) bayangan. Semakin besar nilai yang ditentukan, bayangan yang nampak pun semakin luas.
        Nilai Kelima : menentukan warna yang digunakan pada bayangan.

- **Rounded Corner**; CSS3 memperkenalkan kemampuan untuk membuat rounded corner atau sudut bundar pada box dengan menggunakan properti `border-radius`. Nilai dari properti ini merupakan tingkat lengkungan border dalam pixel.

## Positioning
- Normal Flow / Static Flow : Merupakan default behaviour yang dimiliki elemen, di mana setiap elemen block akan ditampilkan dalam baris baru ketika dibuat. Sehingga setiap elemen block selalu muncul di bawah dari elemen block sebelumnya. Bahkan jika masih terdapat ruang kosong pada samping elemennya, mereka tidak akan nampak bersebelahan.
- Relative Positioning : Membuat elemen bisa berpindah posisi ke atas, kanan, bawah, maupun kiri dari posisi semula atau posisi seharusnya elemen tersebut berada. Perpindahan posisi ini tidak akan berpengaruh terhadap posisi elemen di sekitarnya karena ketika menggunakan relative positioning, elemen tersebut akan dipindahkan dari normal flow.
- Absolute Positioning : Sama seperti relative, elemen akan dipindahkan keluar dari normal flow sehingga kita dapat memindahkan posisi elemen ke atas, kanan, bawah, maupun kiri secara leluasa tanpa mengganggu elemen di sekitarnya. Namun posisinya relatif pada jendela browser dan induk elemen selama induk elemen juga berada di luar dari normal flow.
- Fixed Positioning : Merupakan absolute position namun posisinya selalu relatif pada jendela browser. Bahkan ketika pengguna scrolling pun, posisinya di layar akan tetap tak berubah.
-  
### Perbedaan Static Flow dan Non-Static Flow.
Sebenarnya CSS memiliki dua buah flow yang bisa digunakan untuk menampilkan elemen, yakni static dan non-static. 
Untuk mengubah posisi elemen yang berada di non-static flow, kita dapat menggunakan properti `top`, `right`, `bottom`, maupun `left`.

Perlu kita ingat ya, bahwa properti `top`, `left`, `right` dan `bottom` pada CSS hanya akan berpengaruh pada elemen yang menerapkan non-static flow (elemen yang menerapkan nilai `relative`, `absolute`, dan `fixed` pada properti `position`).

### Normal Flow
Dalam flow normal, setiap elemen block ditempatkan di bawah elemen sebelumnya. Karena ini merupakan cara standar browser memperlakukan elemen HTML, kita tidak perlu menetapkan nilai properti position ketika ingin membuat perilaku seperti ini tetapi secara sintaks perilaku ini ditetapkan dengan nilai static.

### Relative Positioning
Seperti yang kita ketahui sebelumnya, dengan menetapkan relative pada properti position, kita dapat melakukan perpindahan posisi elemen ke atas, kanan, bawah, maupun kiri. Perpindahan posisi yang dilakukan tidak akan berpengaruh terhadap posisi elemen di sekitarnya karena dengan  relative positioning, elemen tersebut akan dipindahkan dari normal flow. Untuk menggunakan relative positioning kita tetapkan nilai `relative` pada properti `position`. Perlu kita ingat bahwa perpindahan posisi mengacu pada posisi elemen seharusnya berada.

### Absolute Positioning
Ketika properti position diberikan nilai absolute, akan berperilaku sama dengan relative. Elemen akan dikeluarkan dari normal flow sehingga jika elemen dipindahkan posisinya tidak akan berpengaruh pada elemen lain di sekitarnya. 

Namun yang membedakannya adalah elemen ini benar-benar tidak dianggap ada oleh elemen pada normal flow. Akibatnya, lokasi awal elemen yang diberikan nilai `absolute` akan ditempati oleh elemen di bawahnya.

### Fixed Positioning
Fixed positioning merupakan merupakan absolute position namun posisinya selalu relatif pada jendela browser (meskipun diletakan di dalam induk elemen diluar dari flow normal), bahkan ketika pengguna melakukan scrolling posisinya akan tetap nampak pada posisinya di layar.

### Floating
Sederhananya properti `float` dapat membuat elemen berada pada sebelah kanan atau kiri. Saat diterapkan pada elemen inline, properti `float` juga memungkinkan elemen di sekitarnya mengelilingi elemen tersebut (wrap). 

Selain dalam membuat text wrapping. `Float` juga merupakan salah satu teknik dalam membuat layout website. Teknik ini masih banyak digunakan oleh developer karena sangat mudah dipahami dan tergolong mudah untuk multiple column

Hal ini dapat dilakukan dengan mudah menggunakan properti `float`, karena nilai dari properti ini adalah `left` dan `right`. Nilai tersebut menunjukan posisi elemen harus diletakkan.

Ketika menggunakan properti float jangan lupa menentukan ukuran lebar dari propertinya, karena nilai dari lebar menentukan seberapa banyak ruang yang dicakup oleh elemen. Pada contoh di atas kita menetapkan nilai 30% untuk konten kiri dan 70% untuk konten sebelah kanan.

Lantas jika nilainya hanya left dan right, bagaimana jika ada lebih dari dua kolom dalam menyusun layout? Hal tersebut sangat mudah dilakukan. Kita hanya perlu menetapkan nilai left pada ketiga kolomnya, lantas kolom akan tampil bersebelahan sesuai urutan penulisan elemen.

#### - Permasalahan penerapan float
Jika sebuah elemen induk hanya memiliki satu elemen dengan menerapkan properti float, ia akan memiliki nilai tinggi 0px.

Hal ini menunjukkan bahwa elemen yang menerapkan float “tidak dianggap ada” oleh induk elemen yang menaunginya karena jika menggunakan float, elemen akan dikeluarkan dari normal flow.

Bagaimana Anda menanganinya? 

Terdapat dua cara yang akan kita bahas, yakni dengan pertama, menggunakan properti clear dan kedua, menetapkan nilai overflow: auto pada container.

- Clear Property: Cara yang pertama adalah dengan menggunakan properti clear. Properti clear memang dibuat untuk menghilangkan sifat float, dengan demikian elemen yang menerapkan properti float akan kembali “dianggap ada”. Namun untuk menerapkan properti ini kita perlu membuat sebuah elemen kosong (biasanya menggunakan div tanpa konten) yang menerapkan properti clear.
Nilai dari properti clear merupakan nilai yang digunakan pada properti float karena properti clear akan menghapus sifat float sesuai dengan nilai yang ditetapkan. contohnya `clear:left`. Lalu bagaimana jika terdapat dua elemen yang menerapkan nilai float berbeda (`left` dan `right`)?  Terdapat satu nilai lagi yang dapat menghilangkan keuda sifat float tersebut, yakni nilai `both`. Gunakanlah nilai tersebut jika kita ingin sepenuhnya menghilangkan sifat float pada elemen.
- overflow: auto; Cara yang kedua adalah dengan menetapkan properti overflow: auto; pada elemen yang menampung elemen float. Sebagian developer lebih memilih menggunakan cara ini karena lebih praktis dan tidak perlu membuat elemen baru ketika menggunakannya.
Untuk menerapkannya sangatlah simpel. Cukup tambahkan properti `overflow` dengan nilai `auto` pada container.

## maxwidth
Rule yang dituliskan dalam block @media di bawah akan diterapkan pada device yang memiliki ukuran viewport di bawah 600px `@media screen and (max-width: 600px) {...}`

## Membuat Sticky Navigation
Terdapat satu nilai properti position yang belum dibahas pada pembahasan positioning, yaitu sticky positioning yang merupakan nilai kombinasi dari relative positioning dan fixed positioning. 

Dengan menggunakan nilai sticky pada properti position, membuat navigasi dapat melekat pada jendela browser (layaknya fixed position) tetapi posisi awalnya tetap menempati posisi di mana ia seharusnya berada (layaknya relative position).

Untuk menerapkannya cukup mudah, pertama kita tambahkan properti `position` dengan nilai `sticky` dan properti `top` dengan nilai `0` pada elemen `<nav>`. Nilai top diperlukan agar ketika pengguna melakukan scrolling, elemen navigasi tetap berada di atas jendela browser.

Bagaimana agar navigasi dapat menempel pada seluruh halaman? Buat elemen `<header>` sebagai induk dari elemen `<nav>` yang menerapkan properti `display` dengan nilai `inline`.

## Flexible Box Model
Dengan Flexbox kita dapat mengatur ukuran secara otomatis dan mampu beradaptasi dengan ukuran container-nya. Dengan kemampuan flexibelnya, tampilan layout yang disusun menggunakan flexbox menjadi mobile-friendly. Selain itu, flexbox dapat dikombinasikan dengan media query, sehingga ia dapat lebih optimal lagi digunakan pada peranti mobile.

Berikut beberapa konsep dari flexbox yang perlu kita ketahui:
- Dapat mengubah ukuran dimensi elemen dengan menyesuaikan ukuran yang cocok bagi ruang kosong yang ada pada container-nya.
- Flexbox is directional agnostic. ini berbeda dengan konsep block model di mana elemen selalu ditampilkan secara vertikal dengan membuat baris baru. Ini berbeda pula dengan konsep inline model di mana elemen selalu ditampilkan secara horizontal. Dengan flexbox kita dapat melakukan kedua hal tersebut dengan mudah.
- Dibuat untuk menyusun layout yang mobile friendly.

### flex container
Flex container merupakan sebuah elemen yang menampung beberapa flex item. Karena Parent-child merupakan relasi yang wajib ada dalam penerapan flexbox, maka setiap flex item harus merupakan anak / child dari flex container. 

Untuk membuat sebuah flex container kita gunakan properti `display` dengan nilai `flex`. Dengan demikian seluruh anak dari container tersebut akan menjadi flex item.

### Flex Grow
Properti flex-grow ini digunakan untuk memberitahu berapa banyak ukuran yang harus ditetapkan oleh flex-item. **Nilai dari properti ini bukan nilai dari dimensi asli pada flex item, melainkan nilai yang relatif terhadap ruang kosong pada flex container.** Yang harus kita ingat, ketika kita mengubah ukuran dari suatu flex item, maka flex item yang lain pun akan terpengaruh.

### Flex Direction
Seperti yang sudah kita ketahui sebelumnya, Flexbox merupakan directional agnostic, di mana kita dapat mengubah arah flex-item ditempatkan pada container. Secara default deretan flex-item ditampilkan secara horizontal, namun kita dapat mengubahnya dengan menetapkan properti flex-direction pada container-nya.
Ada empat nilai yang bisa digunakan untuk properti flex-direction, antara lain:

    row : merupakan nilai default, di mana deretan flex-item pada container ditampilkan secara horizontal.
    row-reverse : memiliki sifat yang sama seperti row, namun urutan flex item-nya ditukar.
    column : Deretan flex-item pada container ditampilkan secara vertikal.
    column-reverse : memiliki sifat yang sama seperti column, namun urutan flex item-nya ditukar.
Karena properti flex-direction ini, kita dapat membuat dua dimensional layout dengan menempatkan flex container di dalam flex container, dalam arti lain sebuah flex container dapat memiliki child berupa flex container lain.

### Flex Basis
Flex-grow ini digunakan ketika kita ingin menetapkan ukuran awal pada sebuah flex-item. Alhasil, kita dapat mengatur ukuran dengan lebih leluasa. Flex-grow biasa digunakan ketika kita menerapkan nested flex-container dan terdapat perbedaan jumlah child pada container-nya.

Flex-grow akan mencari nilai yang sesuai yang dapat dibagi pada flex-items. Agak terdengar aneh, bukan? Nah, temukan artikel yang cukup menarik yang membahas permasalahan ini pada tautan berikut.

Sebenarnya bisa saja kita menggunakan flex-grow untuk mendapatkan hasil yang diinginkan namun kita harus mencari nilai yang pas secara manual. Ini tentunya akan memakan waktu lebih.

Pada kasus seperti ini, solusinya adalah menggunakan properti `flex-basis`. Dengan properti ini kita dapat asumsikan bahwa total ruang kosong pada flex-container adalah `100%`. Jika dibagi rata terhadap empat buah flex-item, maka tiap itemnya harus memiliki nilai `25%`.