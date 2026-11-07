import React from 'react';
import TransactionItem from './TransactionItem.jsx';

/**
 * TransactionList - Komponen daftar semua transaksi
 * Menampilkan pesan khusus jika belum ada transaksi
 */
function TransactionList({ transaksi, onHapus }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Riwayat Transaksi</h2>

      {/* Pesan khusus jika belum ada transaksi */}
      {transaksi.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📭</p>
          <p className="empty-text">Belum ada transaksi.</p>
          <p className="empty-subtext">Silakan tambahkan transaksi pertama Anda!</p>
        </div>
      ) : (
        <div className="transaction-list">
          {transaksi.map((item) => (
            <TransactionItem
              key={item.id}
              transaksi={item}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
