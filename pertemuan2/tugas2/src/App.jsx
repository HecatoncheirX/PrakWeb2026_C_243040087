import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm.jsx';
import TransactionList from './components/TransactionList.jsx';
import SaldoDisplay from './components/SaldoDisplay.jsx';

/**
 * App - Komponen utama (root)
 * Mengelola state transaksi dan sinkronisasi dengan localStorage menggunakan useEffect
 */
function App() {
  // Inisialisasi state dari localStorage (jika ada data sebelumnya)
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('transaksiKeuangan');
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  });

  // useEffect: simpan data ke localStorage setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem('transaksiKeuangan', JSON.stringify(transaksi));
  }, [transaksi]);

  // Handler tambah transaksi baru
  const handleTambah = (transaksiBaru) => {
    setTransaksi((prev) => [transaksiBaru, ...prev]);
  };

  // Handler hapus transaksi berdasarkan id
  const handleHapus = (id) => {
    setTransaksi((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-title">💰 Catatan Keuangan Mini</h1>
        <p className="app-subtitle">Kelola keuangan Anda dengan mudah</p>
      </header>

      <main className="app-main">
        {/* Komponen 1: Saldo Display */}
        <SaldoDisplay transaksi={transaksi} />

        {/* Komponen 2: Form Tambah Transaksi */}
        <TransactionForm onTambah={handleTambah} />

        {/* Komponen 3: Daftar Transaksi (berisi TransactionItem) */}
        <TransactionList transaksi={transaksi} onHapus={handleHapus} />
      </main>

      <footer className="app-footer">
        <p>Data tersimpan di localStorage &bull; Catatan Keuangan Mini &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;
