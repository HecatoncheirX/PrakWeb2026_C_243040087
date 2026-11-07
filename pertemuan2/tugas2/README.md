# Tugas 2 - Catatan Keuangan Mini (Modul 2 Praktikum Web)

Aplikasi **Catatan Keuangan Mini** berbasis React dan Vite yang memenuhi seluruh ketentuan:
- **(a) Formulir Terkendali**: Input keterangan, nominal, dan pilihan jenis transaksi (Pemasukan/Pengeluaran).
- **(b) Daftar Transaksi**: Menampilkan daftar riwayat transaksi dengan tombol hapus untuk setiap item.
- **(c) Total Saldo Otomatis**: Dihitung otomatis dari state menggunakan fungsi `reduce()`.
- **(d) Warna Nominal**: Pemasukan berwarna hijau (+) dan Pengeluaran berwarna merah (-).
- **(e) Pesan Khusus**: Menampilkan status khusus jika belum ada transaksi.
- **(f) Penyimpanan localStorage**: Tersinkronisasi otomatis menggunakan hook `useEffect`.
- **Komponen Terpisah**: Terdiri dari komponen `SaldoDisplay`, `TransactionForm`, `TransactionList`, dan `TransactionItem`.
- **Konversi Tipe Data**: Nilai nominal dikonversi menggunakan `Number(nominal)` agar tidak terjadi konkatenasi string.

## Cara Menjalankan

```bash
# Masuk ke direktori tugas2
cd pertemuan2/tugas2

# Jalankan server pengembangan
npm run dev
```

Buka URL yang ditampilkan di browser (biasanya `http://localhost:5173`).
