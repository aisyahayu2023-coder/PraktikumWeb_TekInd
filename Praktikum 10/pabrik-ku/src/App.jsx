import React from 'react';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KartuMesin from './Komponen/KartuMesin';        // ← Perbaiki ini!
import KalkulatorOEE from './Komponen/KalkulatorOEE';
import KartuKaryawan from './Komponen/KartuKaryawan';  // ← Tambahkan ini juga

function App() {
    return (
        <div className="container-fluid py-4">
            {/* Header */}
            <div className="text-center mb-4">
                <h1 className="display-5 fw-bold text-primary"> Monitoring Lini Produksi A</h1>
                <p className="lead">Aisyah Ayu Salsabila -23051430001 </p>
                <hr />
            </div>

            {/* Jam Digital */}
            <div className="row mb-4">
                <div className="col-12">
                    <JamDigital />
                </div>
            </div>

            {/* Counter Produksi & Kalkulator OEE */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <CounterProduksi />
                </div>
                <div className="col-md-6">
                    <KalkulatorOEE />
                </div>
            </div>

            {/* Kartu Mesin */}
            <h2 className="text-center mb-3 mt-4"> Monitoring Lini Produksi A</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <KartuMesin
                        nama="CNC-Turning-01"
                        status="Running"
                        produksi={150}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <KartuMesin
                        nama="CNC-Milling-02"
                        status="Maintenance"
                        produksi={0}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <KartuMesin
                        nama="Press-Hydraulic-05"
                        status="Stop"
                        produksi={85}
                    />
                </div>
            </div>

            {/* Kartu Karyawan */}
            <h2 className="text-center mb-3 mt-4"> Daftar Karyawan</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <KartuKaryawan
                        nama="Muhammad Amarullah"
                        jabatan="Manager"
                        bagian="Produksi"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <KartuKaryawan
                        nama="Aisyah Ayu Salsabila"
                        jabatan="Operator"
                        bagian="Assembly"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <KartuKaryawan
                        nama="Waskito lantip Prakoso"
                        jabatan="QC"
                        bagian="Quality Control"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;