// ─────────────────────────────────────────
// PageHeader
// Props:
//   title      → judul halaman (string)
//   breadcrumb → { home, current } untuk breadcrumb
//   buttonLabel → label tombol (default "Add")
//   onAdd      → fn() dipanggil saat tombol diklik
// ─────────────────────────────────────────
export default function PageHeader({
  title = "Dashboard",
  breadcrumb = { home: "Dashboard", current: "List" },
  buttonLabel = "Add",
  onAdd,
}) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">

      {/* Sisi Kiri */}
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold text-gray-800">
          {title}
        </span>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          <span className="text-gray-500">{breadcrumb.home}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-500">{breadcrumb.current}</span>
        </div>
      </div>

      {/* Sisi Kanan — tombol hanya tampil jika onAdd diberikan */}
      {onAdd && (
        <div id="action-button">
          <button
            id="add-button"
            onClick={onAdd}
            className="bg-hijau text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            {buttonLabel}
          </button>
        </div>
      )}

    </div>
  );
}
