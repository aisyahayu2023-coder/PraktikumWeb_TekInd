import React, { useState, useEffect } from 'react';

function KalkulatorOEE() {
  const [planTime, setPlanTime] = useState(480);
  const [runTime, setRunTime] = useState(420);
  const [totalParts, setTotalParts] = useState(500);
  const [goodParts, setGoodParts] = useState(480);
  const [oee, setOee] = useState(0);
  const [availability, setAvailability] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [quality, setQuality] = useState(0);

  useEffect(() => {
    const avail = (runTime / planTime) * 100;
    const perf = ((totalParts / runTime) / 1) * 100;
    const qual = (goodParts / totalParts) * 100;
    const oeeValue = (avail / 100) * (perf / 100) * (qual / 100) * 100;
    
    setAvailability(avail);
    setPerformance(perf);
    setQuality(qual);
    setOee(oeeValue);
  }, [planTime, runTime, totalParts, goodParts]);

  const getOeeColor = () => {
    if (oee >= 85) return 'success';
    if (oee >= 65) return 'primary';
    if (oee >= 50) return 'warning';
    return 'danger';
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">
        <h4 className="mb-0"> Kalkulator OEE (Overall Equipment Effectiveness)</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label fw-bold">Plan Time (menit)</label>
            <input type="number" className="form-control" value={planTime} onChange={(e) => setPlanTime(Number(e.target.value))} />
            
            <label className="form-label fw-bold mt-2">Run Time (menit)</label>
            <input type="number" className="form-control" value={runTime} onChange={(e) => setRunTime(Number(e.target.value))} />
            
            <label className="form-label fw-bold mt-2">Total Parts (unit)</label>
            <input type="number" className="form-control" value={totalParts} onChange={(e) => setTotalParts(Number(e.target.value))} />
            
            <label className="form-label fw-bold mt-2">Good Parts (unit)</label>
            <input type="number" className="form-control" value={goodParts} onChange={(e) => setGoodParts(Number(e.target.value))} />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <p>Availability: <strong>{availability.toFixed(2)}%</strong></p>
              <div className="progress"><div className="progress-bar bg-info" style={{ width: `${availability}%` }}></div></div>
            </div>
            <div className="mb-3">
              <p>Performance: <strong>{performance.toFixed(2)}%</strong></p>
              <div className="progress"><div className="progress-bar bg-primary" style={{ width: `${Math.min(performance, 100)}%` }}></div></div>
            </div>
            <div className="mb-3">
              <p>Quality: <strong>{quality.toFixed(2)}%</strong></p>
              <div className="progress"><div className="progress-bar bg-success" style={{ width: `${quality}%` }}></div></div>
            </div>
            <div className={`alert alert-${getOeeColor()} text-center mt-3`}>
              <h2>OEE: {oee.toFixed(2)}%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KalkulatorOEE;