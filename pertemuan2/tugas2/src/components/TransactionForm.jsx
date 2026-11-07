import React, { useState } from 'react';

/**
 * TransactionForm - Komponen formulir terkendali (controlled form)
 * Berisi input: keterangan, nominal, dan pilihan jenis (Pemasukan/Pengeluaran)
 */
function TransactionForm({ onTambah }) {
  // State untuk controlled form
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input tidak boleh kosong
    if (!keterangan.trim()) {
      setError('Keterangan tidak boleh kosong.');
      return;
    }
    if (!nominal || Number(nominal) <= 0) {
      setError('Nominal harus berupa angka lebih dari 0.');
      return;
    }

    // Buat objek transaksi baru
    const transaksiBaru = {
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: nominal, // disimpan sebagai string, Number() dipakai saat kalkulasi
      jenis: jenis,
      tanggal: new Date().toLocaleDateString('id-ID'),
    };

    // Kirim ke parent (App.jsx)
    onTambah(transaksiBaru);

    // Reset form
    setKeterangan('');
    setNominal('');
    setJenis('Pemasukan');
    setError('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Tambah Transaksi</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Input Keterangan */}
        <div className="form-group">
          <label htmlFor="keterangan" className="form-label">
            Keterangan
          </label>
          <input
            id="keterangan"
            type="text"
            className="form-input"
            placeholder="Contoh: Gaji, Makan siang..."
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>

        {/* Input Nominal */}
        <div className="form-group">
          <label htmlFor="nominal" className="form-label">
            Nominal (Rp)
          </label>
          <input
            id="nominal"
            type="number"
            className="form-input"
            placeholder="Contoh: 50000"
            min="1"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>

        {/* Select Jenis Transaksi */}
        <div className="form-group">
          <label htmlFor="jenis" className="form-label">
            Jenis Transaksi
          </label>
          <select
            id="jenis"
            className="form-select"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="Pemasukan">Pemasukan</option>
            <option value="Pengeluaran">Pengeluaran</option>
          </select>
        </div>

        {/* Pesan error jika ada */}
        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn-tambah">
          + Tambah Transaksi
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
