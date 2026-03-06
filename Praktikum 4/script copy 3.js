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

// Input dari user
let namaOperator = prompt("Masukkan Nama Operator:"); 
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):"); 

if (shiftKerja === "Malam") { 
    alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000."); 
} else { 
    alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
let gajiPokok = 5000000;
let jamLembur = 10;

let upahLemburPerJam = 1.5 * (gajiPokok / 173);
let totalGaji = gajiPokok + (upahLemburPerJam * jamLembur);

console.log("Total Gaji: " + totalGaji);
let kodeShift = prompt("Masukkan kode shift (1-3):");
switch (kodeShift) {
    case "1":
        console.log("Shift: Pagi");
        break;

    case "2":
        console.log("Shift: Siang");
        break;

    case "3":
        console.log("Shift: Malam");
        break;

    default:
        console.log("Shift Tidak Valid");
}
let biayaBahanBaku = 500000;
let biayaTenagaKerja = 300000;
let biayaOverhead = 200000;
let jumlahProduksi = 80;

let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

console.log("Biaya per Unit: " + totalPerUnit);

if (jumlahProduksi < 100) {
    console.log("Biaya Tinggi (Ekonomi Skala Kecil)");
} else {
    console.log("Biaya Efisien");
}