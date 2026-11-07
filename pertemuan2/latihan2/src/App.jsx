// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';

function App() {
  // 1. State utama: coba ambil dari localStorage, jika kosong pakai data contoh (Langkah 7b)
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan); // ubah teks JSON kembali menjadi array
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // State untuk filter: 'semua' | 'belum' | 'selesai' (Tugas 1)
  const [filter, setFilter] = useState('semua');

  // Efek A: dijalankan SEKALI saat App pertama kali tampil (Langkah 7c)
  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftarTugas berubah (Langkah 7c)
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah (Langkah 7c)
  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 2. Menambah tugas: buat array BARU berisi tugas lama + tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // 3. Mengubah status selesai: salin tugas yang dicentang, biarkan yang lain
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai }; // salinan dengan status dibalik
      }
      return tugas; // tugas lain tidak berubah
    });
    setDaftarTugas(daftarBaru);
  };

  // 4. Menghapus tugas: ambil semua tugas KECUALI yang id-nya sama
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Tugas 2: Menghapus semua tugas yang sudah berstatus selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // 5. Nilai turunan: dihitung dari state, tidak perlu state baru
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // Tugas 1: Filter daftar tugas sebelum .map()
  const tugasTersaring = daftarTugas.filter((tugas) => {
    if (filter === 'belum') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true; // 'semua'
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Tugas 1: Fitur Filter dengan tiga tombol (Semua, Belum Selesai, Selesai) */}
        <div className="baris filter-grup">
          <button
            className={`tombol tombol-kecil ${filter === 'semua' ? '' : 'tombol-sekunder'}`}
            onClick={() => setFilter('semua')}
          >
            Semua
          </button>
          <button
            className={`tombol tombol-kecil ${filter === 'belum' ? '' : 'tombol-sekunder'}`}
            onClick={() => setFilter('belum')}
          >
            Belum Selesai
          </button>
          <button
            className={`tombol tombol-kecil ${filter === 'selesai' ? '' : 'tombol-sekunder'}`}
            onClick={() => setFilter('selesai')}
          >
            Selesai
          </button>
        </div>

        {/* Conditional rendering dengan ternary: tampilkan pesan jika kosong */}
        {tugasTersaring.length === 0 ? (
          <p className="kosong">
            {daftarTugas.length === 0
              ? 'Belum ada tugas. Yuk tambahkan tugas pertamamu!'
              : 'Tidak ada tugas yang sesuai dengan filter ini.'}
          </p>
        ) : (
          <ul className="daftar">
            {tugasTersaring.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}

        {/* Tugas 2: Tombol "Hapus Semua yang Selesai" dengan operator && */}
        {jumlahSelesai > 0 && (
          <div className="aksi-bawah">
            <button
              className="tombol tombol-merah tombol-kecil"
              onClick={hapusSemuaSelesai}
            >
              Hapus Semua yang Selesai
            </button>
          </div>
        )}
      </Kartu>
    </div>
  );
}

export default App;
