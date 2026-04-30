import React, { useState } from 'react';

function KartuMesin({ nama, status: statusAwal, produksi: produksiAwal }) {
  const [statusLokal, setStatusLokal] = useState(statusAwal);
  const [produksi, setProduksi] = useState(produksiAwal);

  const getBadgeColor = () => {
    switch (statusLokal) {
      case 'Running': return 'bg-success';
      case 'Stop': return 'bg-danger';
      case 'Maintenance': return 'bg-warning text-dark';
      default: return 'bg-secondary';
    }
  };

  const tambahProduksi = () => {
    if (statusLokal === 'Running') {
      setProduksi(produksi + 1);
    }
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{nama}</h5>
          <span className={`badge ${getBadgeColor()}`}>{statusLokal}</span>
        </div>
        <hr />
        <div className="text-center my-3">
          <h2 className="fw-bold text-primary">{produksi}</h2>
          <small className="text-muted">Unit</small>
        </div>
        <select 
          className="form-select form-select-sm mb-2"
          value={statusLokal}
          onChange={(e) => setStatusLokal(e.target.value)}
        >
          <option value="Running"> Running</option>
          <option value="Stop"> Stop</option>
          <option value="Maintenance"> Maintenance</option>
        </select>
        <button 
          className="btn btn-primary w-100"
          onClick={tambahProduksi}
          disabled={statusLokal !== 'Running'}
        >
          + Tambah Produksi
        </button>
      </div>
    </div>
  );
}

export default KartuMesin;