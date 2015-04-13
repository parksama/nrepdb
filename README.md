# nrepdb

----
Buat temen-temen yang bekerja dengan WordPress dan sering input data sekaligus testing di device, pasti sedikit mengalami kesulitan dalam sync database kalian antara yang dev dengan local juga dengan yang menggunakan IP address kan? Harus export dari dev, buka di editor, find terus replace, import lagi ke localhost, cukup merepotkan.

Nah, di sini saya ingin memperkenalkan tool yang saya buat khusus untuk memudahkan masalah sync database tersebut. Bagi yang tertarik bisa silahkan diambil dulu toolnya di sini.

----
###Tool di atas terdiri dari beberapa file yaitu:
1. **sync_local.bat**
File ini digunakan untuk men-synchronize database dari dev local ke localhost kita tanpa perubahan.

2. **sync_ip.bat**
File yang ini fungsinya hampir sama dengan sync_local.bat namun dapat melakukan find & replace secara otomatis sebelum di-import ke localhost, jadi yang ini digunakan untuk men-synchronize dari dev local ke localhost yang menggunakan IP address.

3. **nrepdb.js**
Sedangkan file yang ini adalah library yang digunakan oleh sync_ip.bat untuk melakukan find & replace. Karena library ini saya tulis untuk node.js, untuk dapat dijalankan pastikan anda sudah memiliki node.js terpasang di sistem. Library ini juga sudah support untuk fix data yang ter-serialize.

----
### Usage
    node nrepdb <source file> <str to find> <str to replace> <do fix serialization> [output file]

#### Batch File
Pertama yang perlu diketahui, tool ini dalam bentuk file .bat (batch file Windows). Untuk menjalankannya tinggal double-click file tersebut. Sebelum menjalankannya silahkan di-edit dulu file batnya untuk mengkonfigurasi nama database, username & password dsb.

----
### Requirement
__*mysql*__, __*mysqldump*__ and __*node*__ (globally accessible)

Untuk yang mysql dan mysqldump-nya masih belum dapat di akses secara global, silahkan ditambahkan dulu path-nya di enviroment variable.

Bagi pengguna OS selain Windows silahkan dimodifikasi sendiri, untuk library nrepdb.js seharusnya bisa dijalankan cross platform melalui node.js.

**Caution**: use this tool at your own risk, developer will not take any responsibility for database error or lost data.