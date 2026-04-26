# Opening-Anime-Card-Gallery
Tugas Dari Matkul Pemrograman Web

# Langkah 1: Instalasi Node.js dan npm (Jika Belum) 

    1. Buka https://nodejs.org 
    2. Unduh versi LTS (Long Term Support) 
    3. Jalankan installer, ikuti petunjuk 
    4. Verifikasi instalasi: 
        node --version  # Harus muncul versi, misal v20.x.x 
        npm --version   # Harus muncul versi, misal 10.x.x 

# Langkah 2: Membuat Proyek React dengan Vite 
    1.Buat proyek baru 
        npm create vite@latest react-styling-practice -- --template react 
    2.Masuk ke folder proyek 
        cd react-styling-practice 
    3.Install dependencies 
        npm install 
    4.Jalankan development server 
        npm run dev

# Struktur folder proyek: 
    react-styling-practice/ 
    ├── node_modules/ 
    ├── public/ 
    ├── src/ 
    │   ├── assets/ 
    │   ├── App.jsx 
    │   ├── App.css 
    │   ├── index.css 
    │   └── main.jsx 
    ├── index.html 
    ├── package.json 
    ├── vite.config.js 
    └── ...
    
# Langkah 3: Membersihkan File Default 
buat struktur folder baru: 

    mkdir src/components 
    mkdir src/styles
    mkdir public/Images

# Langkah 4: Tambahkan/Overwrite
Masukan File diatas kedalam folder yang sudah kalian buat

    1.Masukan file jsx kedalam components (kecuali App.jsx dan main.jsx)
    2.Masukan file css kedalam styles (kecuali index.css)
    3.Masukan foto ke dalam Images
    semua yang terkecuali cukup di overwrite
