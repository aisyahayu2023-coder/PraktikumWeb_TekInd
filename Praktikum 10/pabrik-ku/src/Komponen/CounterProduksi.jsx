import React, { useState } from 'react';

function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);
  const [emergency, setEmergency] = useState(false);

  const tambahProduksi = () => {
    if (!emergency) {
      setJumlah(jumlah + 1);
    }
  };

  const reset = () => {
    setJumlah(0);
    setEmergency(false);
  };

  const emergencyStop = () => {
    setEmergency(true);
  };

  return (
    <div className="text-center p-4 border rounded bg-light shadow-sm">
      <h3> Simulasi Hitung Produk</h3>
      <h1 className="display-1 fw-bold text-primary">{jumlah}</h1>
      <p className="text-muted">Target: {target} Unit</p>
      
      {emergency ? (
        <div className="alert alert-danger d-inline-block fw-bold">
           EMERGENCY STOP! PRODUKSI DIHENTIKAN 
        </div>
      ) : jumlah >= target ? (
        <div className="alert alert-success d-inline-block">
           Target Tercapai! Selamat! 
        </div>
      ) : (
        <div className="alert alert-secondary d-inline-block">
           Produksi Berjalan...
        </div>
      )}
      
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={tambahProduksi} disabled={emergency}>
           +1 Unit
        </button>
        <button className="btn btn-warning me-2" onClick={reset}>
           Reset Shift
        </button>
        <button className="btn btn-danger" onClick={emergencyStop} disabled={emergency}>
           Emergency Stop
        </button>
      </div>

      <div className="mt-3">
        <div className="progress" style={{ height: '30px' }}>
          <div 
            className={`progress-bar ${jumlah >= target ? 'bg-success' : 'bg-primary'} fw-bold`}
            style={{ width: `${Math.min((jumlah / target) * 100, 100)}%` }}
          >
            {Math.min(Math.round((jumlah / target) * 100), 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterProduksi;