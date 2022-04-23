# Application name and description

Application Name : Awesome Music Playlist GIGIH
Description :
Awesome Music GIGIH is a website-based application built using the React Js Library. This application is an application that represents the Spotify application where the API used is the API provided on Spotify via https://developer.spotify.com/. Incredible Music Playlists GIGIH supports users to create playlists of the music they like and search for the music they want to add to the playlists they have created, but in order to do this the user must first log in using a Spotify account in order to be able to do so. enter into the application.

# The Features contained

The features contained in the Awesome Music Playlist GIGIH are:

1. Login in using their Spotify Account
2. Search for artists or songs
3. Create Playlist
4. Display List of song

# Cara install dan cara menjalankan aplikasi

Untuk dapat menjalankan aplikasi terlebih dahulu kita menginstall aplikasi dimana kita dapat clone repository

1. Akses repository https://github.com/romaulisianipar24/Final-Project-Gigih-2.0.git, Pilih menu Code > Clone > Copy URL HTTPS
2. Buat sebuah baru didirektori anda kemudian buka Git Bash anda, buat lah perintah
   > git clone https://github.com/romaulisianipar24/Final-Project-Gigih-2.0.git
3. Setelah Projectnya terdownload pada direktori anda selanjutnya buka menggunakan Text Editor yang anda miliki disini saya menggunakan Visual Studio Code. Pilih New Terminal pada text editor anda kemudian ketik perintah
   > npm install
   > npm install ini digunakn untuk menginstal package-package yang ada pada Aplikasi yang dibuat.
4. Buka https://developer.spotify.com/ untuk membuat API Spotify kita sendiri, dimana ini akan digunakan didalam aplikasi. Login pada https://developer.spotify.com/ kemudian pilih "CREATE AN APP" masukkan App Name dan App description, kemudian pilih "EDIT SETTING" isi Redirect URIs dengan "http://localhost:3000/" (agar url redirect untuk API kita dapat dibaca oleh aplikasi). Kemudian copy Client ID dari API yang telah kita buat.
5. Selanjutnya kita harus mengedit Client id pada Project ini dimana terletak pada "src/components/Login.jsx/. Masukkan sesuai dengan Client id yang sudah anda buat.
6. Kembali ke terminal pada text editor, jalankan perintah
   > npm start
   > Maka aplikasi dapat anda jalankan pada komputer anda.
7. Aplikasi ini juga sudah di deploy dimana dapat diakses melalui link url berikut ini "https://final-project-gigih-2-0.vercel.app/".
