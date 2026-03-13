// 2. FUNCTION untuk Latihan 1: Menghitung Lingkaran
function hitungLingkaran(jariJari) {
    const phi = 3.14;
    
    // Menghitung luas dan keliling
    let luas = phi * jariJari * jariJari;
    let keliling = 2 * phi * jariJari;
    
    // Menampilkan hasil di console
    console.log("=== HASIL PERHITUNGAN LINGKARAN ===");
    console.log("Jari-jari: " + jariJari);
    console.log("Luas: " + luas);
    console.log("Keliling: " + keliling);
    
    // Mengembalikan nilai (opsional)
    return {
        luas: luas,
        keliling: keliling
    };
}