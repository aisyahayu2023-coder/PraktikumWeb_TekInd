// 1. Seleksi Elemen 
const formProduksi = document.getElementById('formProduksi'); 
const tabelBody = document.getElementById('tabelBody'); 
const btnHapusSemua = document.getElementById('btnHapusSemua'); 

// Kunci untuk LocalStorage 
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI'; 

// Fungsi Load Data saat halaman dibuka 
document.addEventListener('DOMContentLoaded', function() { 
    loadDataFromStorage(); 
}); 

// 2. Event Listener: Submit Form 
formProduksi.addEventListener('submit', function(event) { 
    event.preventDefault(); // Mencegah refresh halaman 

    // Ambil Value dari Form 
    const tanggal = document.getElementById('tanggal').value; 
    const operator = document.getElementById('operator').value; 
    const shift = document.getElementById('shift').value; 
    const jumlah = document.getElementById('jumlah').value; 

    // ========== PERBAIKAN DI SINI ==========
    // Validasi yang benar (menangani string kosong dan non-angka)
    const jumlahAngka = parseInt(jumlah);
    
    if (isNaN(jumlahAngka) || jumlahAngka <= 0) { 
        alert("Jumlah produksi harus berupa angka lebih dari 0!"); 
        return; 
    } 
    // =======================================

    // Buat Object Data 
    const dataBaru = { 
        id: Date.now(), // ID unik berdasarkan waktu 
        tanggal: tanggal, 
        operator: operator, 
        shift: shift, 
        jumlah: jumlahAngka  // pakai variabel yang sudah tervalidasi
    }; 

    // Simpan ke LocalStorage 
    saveData(dataBaru); 

    // Reset Form 
    formProduksi.reset(); 

    // Refresh Tampilan Tabel 
    loadDataFromStorage(); 
}); 

// 3. Fungsi Simpan ke LocalStorage 
function saveData(data) { 
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; 
    dataLama.push(data); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama)); 
} 

// 4. Fungsi Baca & Render Tabel 
function loadDataFromStorage() { 
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; 
    tabelBody.innerHTML = ''; 

    data.forEach(function(item) { 
        const row = document.createElement('tr'); 
        row.innerHTML = ` 
            <td>${item.tanggal}</td> 
            <td>${item.operator}</td> 
            <td>${item.shift}</td> 
            <td>${item.jumlah}</td> 
            <td> 
                <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button> 
            </td> 
        `; 
        tabelBody.appendChild(row); 
    }); 
} 

// 5. Fungsi Hapus Data Spesifik 
window.hapusData = function(id) { 
    if(confirm('Yakin ingin menghapus log ini?')) { 
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; 
        let dataBaru = data.filter(item => item.id !== id); 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru)); 
        loadDataFromStorage(); 
    } 
} 

// 6. Event Hapus Semua 
btnHapusSemua.addEventListener('click', function() { 
    if(confirm('PERINGATAN: Semua data akan dihapus permanen!')) { 
        localStorage.removeItem(STORAGE_KEY); 
        loadDataFromStorage(); 
    } 
});