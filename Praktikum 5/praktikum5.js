// 1. FUNCTION Declaration 
// Fungsi untuk menghitung konsumsi daya (P = V x I) 
function hitungDaya(tegangan, arus) { 
    let daya = tegangan * arus; 
    return daya; // Mengembalikan hasil 
} 

// Pemanggilan Function 
let teganganMesin = 220; // Volt 
let arusMesin = 10; // Ampere 
let totalDaya = hitungDaya(teganganMesin, arusMesin); 
console.log("Daya Mesin: " + totalDaya + " Watt"); 

// 2. ARRAY 
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali 
console.log("Jumlah Cacat: " + daftarCacat.length); 

// Looping (Perulangan) untuk menampilkan setiap cacat 
console.log("--- Laporan Detail Cacat ---"); 
for (let i = 0; i < daftarCacat.length; i++) { 
    console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]); 
} 

// Menambahkan data baru ke array 
daftarCacat.push("C-099"); 
console.log("Setelah penambahan: " + daftarCacat); 

// 3. OBJECT 
let mesinA = { 
    id: "M-01", 
    nama: "Injection Molding 50 Ton", 
    merk: "Toshiba", 
    tahunBeli: 2018, 
    status: "Running", 
    spesifikasi: { 
        kecepatanMax: 200, // mm/s 
        tekananMax: 150    
    } 
}; 

// Mengakses data object 
console.log("Nama Mesin: " + mesinA.nama); 
console.log("Status: " + mesinA.status); 
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar"); 

// Mengubah data object (Simulasi mesin rusak) 
mesinA.status = "Breakdown"; 
console.log("Status Baru: " + mesinA.status);
// Array berisi beberapa object 
let gudangMaterial = [ 
{ kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang" }, 
{ kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg" }, 
{ kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter" } 
]; 
console.log("--- Cek Stok Gudang ---"); 
// Menggunakan forEach untuk iterasi array object 
gudangMaterial.forEach(function(item) { 
console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan); 
// Logika Re-order 
if (item.stok < 20) { 
console.log("  >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO."); 
} 
});
