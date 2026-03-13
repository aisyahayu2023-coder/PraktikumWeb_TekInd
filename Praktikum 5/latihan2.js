// Array daftar cacat dari soal
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

// FUNCTION untuk menghitung berapa kali "C-001" muncul
function hitungCacatC001() {
    let counter = 0;
    
    for (let i = 0; i < daftarCacat.length; i++) {
        if (daftarCacat[i] === "C-001") {
            counter++;
        }
    }
    
    return counter;
}

// FUNCTION untuk mencari semua posisi "C-001"
function cariPosisiC001() {
    let posisi = [];
    
    for (let i = 0; i < daftarCacat.length; i++) {
        if (daftarCacat[i] === "C-001") {
            posisi.push(i);
        }
    }
    
    return posisi;
}

// FUNCTION untuk menambahkan data cacat baru
function tambahCacat(kodeCacat) {
    daftarCacat.push(kodeCacat);
}
// LOOP: untuk i = 0 sampai panjang array
for (let i = 0; i < daftarCacat.length; i++) {
    // IF: jika elemen ke-i sama dengan "C-001"
    if (daftarCacat[i] === "C-001") {
        counter++; // COUNTER: tambah 1
    }
}