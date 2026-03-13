// a. Array of Objects antrianMesin dengan 3 job
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Cutting", durasi: 25 },
    { idJob: "J03", namaProses: "Assembly", durasi: 40 }
];

// b. & c. Function prosesAntrian
function prosesAntrian(antrian) {
    console.log("=== MEMULAI PROSES ANTRIAN ===");
    
    for (let i = 0; i < antrian.length; i++) {
        let job = antrian[i];
        
        // Pesan sesuai permintaan soal
        let pesan = "Memproses Job " + job.idJob + " - " + job.namaProses + " selama " + job.durasi + " menit";
        
        // Tampilkan di console
        console.log(pesan);
        
        // Tampilkan di halaman
        if (typeof tampilkanLog === 'function') {
            tampilkanLog(pesan);
        }
    }
    
    console.log("=== PROSES SELESAI ===\n");
    if (typeof tampilkanLog === 'function') {
        tampilkanLog('Proses antrian selesai');
    }
}

// d. Fungsi untuk menambah job baru (dipanggil dari HTML)
function tambahJobBaru() {
    let jobBaru = { idJob: "J04", namaProses: "Finishing", durasi: 45 };
    antrianMesin.push(jobBaru);
    console.log("Job baru ditambahkan:", jobBaru);
    prosesAntrian(antrianMesin);
}

// Tampilkan data awal
console.log("Data awal antrian mesin:");
console.log(antrianMesin);
console.log("Total job: " + antrianMesin.length);