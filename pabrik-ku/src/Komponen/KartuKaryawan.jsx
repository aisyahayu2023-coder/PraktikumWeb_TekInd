import React, { useState } from 'react'; 
function CounterProduksi() { 
// Deklarasi State: 'jumlah' bernilai awal 0, 'setJumlah' fungsi untuk mengubahnya 
const [jumlah, setJumlah] = useState(0); 
const [target, setTarget] = useState(100); 
// Fungsi menambah produksi 
const tambahProduksi = () => { 
setJumlah(jumlah + 1); 
}; 
// Fungsi reset 
const reset = () => { 
setJumlah(0); 
}; 
return ( 
<div className="text-center p-4 border rounded bg-light"> 
<h3>Simulasi Hitung Produk</h3> 
<h1 className="display-4">{jumlah}</h1> 
<p>Target: {target} Unit</p> 
{/* Conditional Rendering: Tampilkan pesan jika target tercapai */} 
{jumlah >= target ? ( 
<div className="alert alert-success d-inline-block">Target Tercapai!</div> 
) : ( 
<div className="alert alert-secondary d-inline-block">Produksi Berjalan...</div> 
)} 
<div className="mt-3"> 
<button className="btn btn-primary me-2" onClick={tambahProduksi}> 
+1 Unit (Sensor OK) 
</button> 
<button className="btn btn-danger" onClick={reset}> 
Reset Shift 
</button> 
</div> 
</div> 
); 
} 
export default CounterProduksi; 