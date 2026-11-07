import React from 'react';

/**
 * TransactionItem - Komponen untuk satu item transaksi
 * Pemasukan ditampilkan dengan warna hijau, pengeluaran dengan warna merah
 */
function TransactionItem({ transaksi, onHapus }) {
  const isPemasukan = transaksi.jenis === 'Pemasukan';

  // Format nominal ke format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(Number(angka)); // Number() agar string dikonversi ke angka
  };

  return (
    <div className={`transaction-item ${isPemasukan ? 'pemasukan' : 'pengeluaran'}`}>
      <div className="transaction-info">
        {/* Badge jenis transaksi */}
        <span className={`badge ${isPemasukan ? 'badge-pemasukan' : 'badge-pengeluaran'}`}>
          {isPemasukan ? '▲ Pemasukan' : '▼ Pengeluaran'}
        </span>
        <p className="transaction-keterangan">{transaksi.keterangan}</p>
        <p className="transaction-tanggal">{transaksi.tanggal}</p>
      </div>

      <div className="transaction-right">
        {/* Nominal berwarna hijau untuk pemasukan, merah untuk pengeluaran */}
        <p className={`transaction-nominal ${isPemasukan ? 'nominal-pemasukan' : 'nominal-pengeluaran'}`}>
          {isPemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
        </p>
        {/* Tombol hapus */}
        <button
          className="btn-hapus"
          onClick={() => onHapus(transaksi.id)}
          title="Hapus transaksi"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
