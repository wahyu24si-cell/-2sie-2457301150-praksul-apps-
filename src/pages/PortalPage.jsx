import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Button from '../components/Button';

// Data menu portal
const portalMenus = [
  {
    id: 1,
    title: 'Akademik',
    description: 'Lihat jadwal kuliah, nilai, dan transkrip akademik kamu.',
    icon: '🎓',
    color: '#4f46e5',
  },
  {
    id: 2,
    title: 'Keuangan',
    description: 'Cek tagihan, riwayat pembayaran, dan informasi beasiswa.',
    icon: '💳',
    color: '#0891b2',
  },
  {
    id: 3,
    title: 'Perpustakaan',
    description: 'Akses katalog buku, pinjaman aktif, dan e-resource kampus.',
    icon: '📚',
    color: '#059669',
  },
  {
    id: 4,
    title: 'Kemahasiswaan',
    description: 'Informasi organisasi, kegiatan, dan pengajuan surat.',
    icon: '🏛️',
    color: '#d97706',
  },
  {
    id: 5,
    title: 'E-Learning',
    description: 'Akses materi kuliah, tugas, dan forum diskusi online.',
    icon: '💻',
    color: '#7c3aed',
  },
  {
    id: 6,
    title: 'Layanan IT',
    description: 'Reset password, permintaan akses, dan laporan gangguan.',
    icon: '🔧',
    color: '#dc2626',
  },
];

const PortalPage = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleOpen = (menu) => {
    setActiveMenu(menu);
  };

  const handleClose = () => {
    setActiveMenu(null);
  };

  return (
    <div className="page portal-page">
      <PageHeader
        title="Portal Mahasiswa"
        subtitle="Selamat datang! Pilih layanan yang ingin kamu akses."
      />

      {/* Grid Card Portal */}
      <div className="portal-grid">
        {portalMenus.map((menu) => (
          <Card key={menu.id} title={menu.title} description={menu.description}>
            {/* Icon bulat di dalam card */}
            <div
              className="portal-card-icon"
              style={{ backgroundColor: menu.color }}
              aria-hidden="true"
            >
              <span>{menu.icon}</span>
            </div>
            <div className="portal-card-actions">
              <Button
                label="Buka"
                variant="primary"
                onClick={() => handleOpen(menu)}
              />
              <Button
                label="Info"
                variant="outline"
                onClick={() => alert(`Info: ${menu.title}\n${menu.description}`)}
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Modal sederhana saat card dibuka */}
      {activeMenu && (
        <div className="portal-modal-overlay" role="dialog" aria-modal="true">
          <div className="portal-modal">
            <div
              className="portal-modal-icon"
              style={{ backgroundColor: activeMenu.color }}
            >
              {activeMenu.icon}
            </div>
            <h2>{activeMenu.title}</h2>
            <p>{activeMenu.description}</p>
            <p className="portal-modal-note">
              Fitur ini sedang dalam pengembangan.
            </p>
            <div className="portal-modal-actions">
              <Button label="Tutup" variant="secondary" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {/* Quick Action Buttons */}
      <section className="portal-quick-actions">
        <h2 className="portal-section-title">Aksi Cepat</h2>
        <div className="portal-btn-group">
          <Button label="📋 Lihat Jadwal" variant="primary" onClick={() => alert('Membuka jadwal...')} />
          <Button label="📝 Input KRS" variant="secondary" onClick={() => alert('Membuka KRS...')} />
          <Button label="📄 Cetak KTM" variant="outline" onClick={() => alert('Mencetak KTM...')} />
          <Button label="🔔 Notifikasi" variant="outline" onClick={() => alert('Membuka notifikasi...')} />
        </div>
      </section>
    </div>
  );
};

export default PortalPage;
