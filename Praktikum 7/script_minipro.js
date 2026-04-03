// 1. Seleksi Elemen
const formAudit = document.getElementById('formAudit');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const totalAuditEl = document.getElementById('totalAudit');
const rataSkorEl = document.getElementById('rataSkor');
const skorTerbaikEl = document.getElementById('skorTerbaik');

// Kunci LocalStorage
const STORAGE_KEY = 'AUDIT_5S_INDUSTRI';

// 2. Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    updateStatistik();
});

// 3. Event Listener Submit Form
formAudit.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai auditor
    const auditor = document.getElementById('auditor').value.trim();
    
    // Validasi auditor tidak boleh kosong
    if (auditor === "") {
        alert("Nama auditor harus diisi!");
        return;
    }
    
    // Ambil nilai checklist (5 item)
    const seiri = document.getElementById('seiri').checked;
    const seiton = document.getElementById('seiton').checked;
    const seiso = document.getElementById('seiso').checked;
    const seiketsu = document.getElementById('seiketsu').checked;
    const shitsuke = document.getElementById('shitsuke').checked;
    
    // Hitung jumlah yang dicentang
    const checklistValues = [seiri, seiton, seiso, seiketsu, shitsuke];
    const jumlahCentang = checklistValues.filter(item => item === true).length;
    
    // Hitung skor (jumlah centang / 5 * 100)
    const skor = (jumlahCentang / 5) * 100;
    
    // Dapatkan checklist yang dicentang (untuk ditampilkan)
    const checklistTercentang = [];
    if (seiri) checklistTercentang.push("Seiri");
    if (seiton) checklistTercentang.push("Seiton");
    if (seiso) checklistTercentang.push("Seiso");
    if (seiketsu) checklistTercentang.push("Seiketsu");
    if (shitsuke) checklistTercentang.push("Shitsuke");
    
    const checklistText = checklistTercentang.length === 0 ? "Tidak ada" : checklistTercentang.join(", ");
    
    // Buat object data
    const dataBaru = {
        id: Date.now(),
        tanggal: new Date().toLocaleDateString('id-ID'),
        tanggalFull: new Date().toISOString(),
        auditor: auditor,
        jumlahCentang: jumlahCentang,
        skor: skor,
        checklist: checklistText,
        detail: {
            seiri: seiri,
            seiton: seiton,
            seiso: seiso,
            seiketsu: seiketsu,
            shitsuke: shitsuke
        }
    };
    
    // Simpan ke LocalStorage
    saveData(dataBaru);
    
    // Reset form
    formAudit.reset();
    
    // Refresh tampilan
    loadDataFromStorage();
    updateStatistik();
    
    // Tampilkan alert hasil
    alert(` Audit selesai!\nAuditor: ${auditor}\nSkor: ${skor}% (${jumlahCentang}/5)`);
});

// 4. Fungsi Simpan ke LocalStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// 5. Fungsi Baca & Render Tabel
function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    renderTabel(data);
}

// 6. Fungsi Render Tabel
function renderTabel(data) {
    tabelBody.innerHTML = '';
    
    if (data.length === 0) {
        tabelBody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada data audit</td></tr>';
        return;
    }
    
    // Urutkan dari yang terbaru
    data.sort((a, b) => new Date(b.tanggalFull) - new Date(a.tanggalFull));
    
    data.forEach(function(item) {
        const row = document.createElement('tr');
        
        // Tentukan class warna berdasarkan skor
        let skorClass = "";
        if (item.skor < 40) skorClass = "bg-danger text-white";
        else if (item.skor < 70) skorClass = "bg-warning";
        else skorClass = "bg-success text-white";
        
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td><strong>${item.auditor}</strong></td>
            <td><small>${item.checklist}</small></td>
            <td class="${skorClass} text-center fw-bold">${item.skor}%</td>
            <td class="text-center">
                <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})"> Hapus</button>
                <button class="btn btn-sm btn-info" onclick="lihatDetail(${item.id})"> Detail</button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

// 7. Fungsi Hapus Data Spesifik
window.hapusData = function(id) {
    if (confirm('Yakin ingin menghapus data audit ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadDataFromStorage();
        updateStatistik();
        alert("Data berhasil dihapus!");
    }
}

// 8. Fungsi Lihat Detail (opsional)
window.lihatDetail = function(id) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let item = data.find(item => item.id === id);
    
    if (item) {
        let pesan = `
 DETAIL AUDIT 5S
═══════════════════════
 Tanggal: ${item.tanggal}
 Auditor: ${item.auditor}
 Skor: ${item.skor}% (${item.jumlahCentang}/5)

 CHECKLIST:
${item.detail.seiri ? "✓" : "✗"} Seiri (Ringkas)
${item.detail.seiton ? "✓" : "✗"} Seiton (Rapi)
${item.detail.seiso ? "✓" : "✗"} Seiso (Resik)
${item.detail.seiketsu ? "✓" : "✗"} Seiketsu (Rawat)
${item.detail.shitsuke ? "✓" : "✗"} Shitsuke (Rajin)
        `;
        alert(pesan);
    }
}

// 9. Fungsi Update Statistik
function updateStatistik() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    // Total audit
    const total = data.length;
    totalAuditEl.textContent = total;
    
    // Rata-rata skor
    if (total > 0) {
        const totalSkor = data.reduce((sum, item) => sum + item.skor, 0);
        const rataRata = Math.round(totalSkor / total);
        rataSkorEl.textContent = rataRata + "%";
        
        // Skor terbaik
        const skorTertinggi = Math.max(...data.map(item => item.skor));
        skorTerbaikEl.textContent = skorTertinggi + "%";
    } else {
        rataSkorEl.textContent = "0%";
        skorTerbaikEl.textContent = "0%";
    }
}

// 10. Event Hapus Semua
btnHapusSemua.addEventListener('click', function() {
    if (confirm(' PERINGATAN: Semua riwayat audit akan dihapus permanen! Lanjutkan?')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
        updateStatistik();
        alert("Semua data berhasil dihapus!");
    }
});