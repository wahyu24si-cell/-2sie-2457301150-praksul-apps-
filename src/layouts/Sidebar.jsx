import { FaTachometerAlt, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";

// Daftar menu — mudah ditambah tanpa ubah JSX
const menuItems = [
  { id: "menu-1", page: "dashboard", icon: <FaTachometerAlt className="mr-4 text-xl" />, label: "Dashboard" },
  { id: "menu-2", page: "orders",    icon: <FaShoppingCart  className="mr-4 text-xl" />, label: "Orders"    },
  { id: "menu-3", page: "customers", icon: <FaUsers         className="mr-4 text-xl" />, label: "Customers" },
];

// ─────────────────────────────────────────
// Sidebar
// Props:
//   activePage   → string, halaman yang sedang aktif
//   onNavigate   → fn(page), dipanggil saat menu diklik
// ─────────────────────────────────────────
export default function Sidebar({ activePage, onNavigate }) {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg"
    >

      {/* ── Logo ── */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900 leading-none">
          Sedap <b id="logo-dot" className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400 text-sm">
          Modern Admin Dashboard
        </span>
      </div>

      {/* ── List Menu ── */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3 list-none p-0">
          {menuItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <li key={item.id}>
                <div
                  id={item.id}
                  onClick={() => onNavigate(item.page)}
                  className={[
                    "flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all",
                    isActive
                      // ── State AKTIF: hijau solid ──
                      ? "bg-hijau text-white font-extrabold shadow-md"
                      // ── State normal + hover ──
                      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold",
                  ].join(" ")}
                >
                  {item.icon}
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Footer ── */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center gap-3"
        >
          <div id="footer-text" className="text-white text-sm flex-1">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => alert("Add Menus diklik!")}
            >
              <FaPlus className="mr-4 text-xl text-gray-600" />
              <span className="text-gray-600 flex items-center font-medium">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"
            alt="avatar"
          />
        </div>

        <span id="footer-brand" className="block font-bold text-gray-400 text-sm">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400 text-xs mt-1">
          &copy; 2025 All Right Reserved
        </p>
      </div>

    </div>
  );
}
