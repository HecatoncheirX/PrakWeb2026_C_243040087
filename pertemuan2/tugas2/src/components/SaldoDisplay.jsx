import React from 'react';

/**
 * SaldoDisplay - Komponen untuk menampilkan total saldo
 * Dihitung otomatis dari props transaksi
 */
function SaldoDisplay({ transaksi }) {
  // Hitung total saldo dari array transaksi
  // Number() digunakan agar string tidak ter-concatenate
  const totalSaldo = transaksi.reduce((acc, item) => {
    if (item.jenis === 'Pemasukan') {
      return acc + Number(item.nominal);
    } else {
      return acc - Number(item.nominal);
    }
  }, 0);

  // Tentukan warna saldo berdasarkan positif/negatif
  const saldoStyle = {
    color: totalSaldo >= 0 ? '#16a34a' : '#dc2626',
  };

  // Format angka menjadi format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="saldo-container">
      <h2 className="saldo-label">Total Saldo</h2>
      <p className="saldo-nominal" style={saldoStyle}>
        {formatRupiah(totalSaldo)}
      </p>
    </div>
  );
}

export default SaldoDisplay;
