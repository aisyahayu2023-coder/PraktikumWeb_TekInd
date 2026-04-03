// Komentar single line 

// 1. Variabel & Tipe Data 
let namaMesin = "CNC-Mazak-01"; // String 
let targetHarian = 500; // Number 
let isOperational = true; // Boolean 

// Menampilkan ke console browser (Tekan F12 -> Console) 
console.log("Mesin: " + namaMesin); 
console.log("Target: " + targetHarian); 

// 2. Operator Aritmatika 
let produksiPagi = 200; 
let produksiSiang = 150; 
let totalProduksi = produksiPagi + produksiSiang; 

console.log("Total saat ini: " + totalProduksi); 

// Hitung sisa kekurangan target 
let kekurangan = targetHarian - totalProduksi; 
console.log("Kekurangan target: " + kekurangan);
// Simulasi data pembacaan sensor (jam operasional) 
let jamOperasional = 1250; 
let batasMaksimal = 1200; 

console.log("--- Cek Status Maintenance ---"); 

// Logika If/Else 
if (jamOperasional >= batasMaksimal) { 
    console.log("PERINGATAN: Mesin mencapai batas maksimal!"); 
    console.log("Status: MAINTENANCE WAJIB (Stop Produksi)"); 
} else if (jamOperasional > 1000) { 
    console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)"); 
} else { 
    console.log("Status: BERJALAN NORMAL"); 
} 
console.log("--- Perhitungan Availability Mesin ---");

// Data Input
let jamKerjaPlanned = 8; // Jam
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown)

// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;

// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Logika Penilaian
if (availability >= 90) {
    console.log("Kategori: WORLD CLASS");
} else if (availability >= 80) {
    console.log("Kategori: BAIK (Tetap monitor)");
} else {
    console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}
// Input dari user
let namaOperator = prompt("Masukkan Nama Operator:"); 
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):"); 

if (shiftKerja === "Malam") { 
    alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000."); 
} else { 
    alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
