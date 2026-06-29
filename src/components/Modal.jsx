// ─────────────────────────────────────────
// Modal — komponen dialog reusable
// Props:
//   isOpen   → boolean, tampilkan/sembunyikan
//   onClose  → fn() tutup modal
//   title    → judul modal
//   children → konten modal
// ─────────────────────────────────────────
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    // Overlay gelap — klik di luar modal untuk tutup
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      {/* Box modal — stop propagasi agar klik di dalam tidak tutup */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header modal */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold cursor-pointer transition-colors"
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </div>

        {/* Konten dari parent */}
        {children}
      </div>
    </div>
  );
}
