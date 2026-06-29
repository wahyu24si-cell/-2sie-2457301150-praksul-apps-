import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

// ─────────────────────────────────────────
// Header
// Komponen bagian atas dashboard berisi
// search bar, ikon aksi, dan profil user.
// ─────────────────────────────────────────
export default function Header() {
  return (
    // 1️⃣ Wrapper header
    // flex justify-between → elemen tersusun kanan-kiri
    // items-center         → rata tengah vertikal
    // p-4                  → padding semua sisi
    <div
      id="header-container"
      className="flex justify-between items-center p-4 bg-white shadow-sm"
    >

      {/* ── 2️⃣ Search Bar ── */}
      {/* relative  → agar ikon search bisa diposisikan absolute di dalamnya
          w-full max-w-lg → responsif & batas lebar maksimal */}
      <div id="search-bar" className="relative w-full max-w-lg">
        {/* border border-gray-100 → garis tipis
            p-2 pr-10            → padding, kanan lebih lebar untuk ikon
            bg-white             → latar putih
            rounded-md           → sudut membulat
            outline-none         → hilangkan outline default */}
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none text-sm"
        />
        {/* absolute right-4 top-1/2 → posisi di kanan tengah input
            transform -translate-y-1/2 → koreksi vertikal tepat tengah
            text-gray-300              → warna abu muda */}
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
        />
      </div>

      {/* ── 3️⃣ Grup Ikon + Profil ── */}
      {/* flex items-center space-x-4 → satu baris, jarak antar item 16px */}
      <div id="icons-container" className="flex items-center space-x-4">

        {/* Ikon Notifikasi
            relative      → untuk badge absolute di atasnya
            p-3           → padding
            bg-blue-100   → latar biru muda
            rounded-2xl   → sudut sangat membulat
            text-blue-500 → warna ikon biru
            cursor-pointer → kursor tangan */}
        <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />
          {/* Badge angka notifikasi
              absolute top-0 right-0              → pojok kanan atas ikon
              transform translate-x-1/2 -translate-y-1/2 → geser keluar ikon
              bg-blue-200 rounded-full            → latar biru bulat
              px-2 py-1 text-xs                   → padding & teks kecil */}
          <span
            id="notification-badge"
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs font-bold text-blue-700"
          >
            50
          </span>
        </div>

        {/* Ikon Chart
            p-3 bg-blue-100 rounded-2xl cursor-pointer */}
        <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
          <FcAreaChart />
        </div>

        {/* Ikon Settings
            p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer */}
        <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
          <SlSettings />
        </div>

        {/* Profil User
            flex items-center space-x-4 → sejajar satu baris, jarak 16px
            border-l pl-4 border-gray-300 → garis vertikal pemisah kiri */}
        <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
          <span id="profile-text" className="text-sm text-gray-600">
            Hello, <b>Fikri Muhaffizh</b>
          </span>
          {/* w-10 h-10 → 40x40px; rounded-full → lingkaran */}
          <img
            id="profile-avatar"
            src="https://avatar.iran.liara.run/public/28"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

      </div>
    </div>
  );
}
