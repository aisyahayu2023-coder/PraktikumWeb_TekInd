import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState('Yogyakarta');

  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    document.title = `Jam ${kota} - ${waktu.toLocaleTimeString()}`;
  }, [kota, waktu]);

  return (
    <div className="alert alert-info text-center shadow-sm">
      <h4> Waktu Server Real-time</h4>
      <h1 className="display-4 fw-bold">{waktu.toLocaleTimeString()}</h1>
      <p>{waktu.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <div className="mt-2">
        <label className="fw-bold me-2"> Lokasi Pabrik:</label>
        <input 
          type="text" 
          className="form-control d-inline-block w-auto"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
          placeholder="Masukkan nama kota"
        />
        <small className="d-block text-muted mt-1">Judul tab akan berubah sesuai kota</small>
      </div>
    </div>
  );
}

export default JamDigital;