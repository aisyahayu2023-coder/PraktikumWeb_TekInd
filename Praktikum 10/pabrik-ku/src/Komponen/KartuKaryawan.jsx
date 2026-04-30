import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <div className="mb-3">
          <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
               style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
          </div>
        </div>
        <h5 className="card-title">{nama}</h5>
        <p className="card-text">
          <span className="badge bg-info me-1">{jabatan}</span>
          <span className="badge bg-secondary">{bagian}</span>
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan;