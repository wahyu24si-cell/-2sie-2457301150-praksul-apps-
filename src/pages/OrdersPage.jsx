import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";

const initOrders = [
  { id: "#ORD-001", customer: "Budi Santoso",  item: "Nasi Goreng", qty: 2, total: "Rp 40.000", status: "Delivered" },
  { id: "#ORD-002", customer: "Siti Aminah",   item: "Mie Ayam",    qty: 1, total: "Rp 18.000", status: "Pending"   },
  { id: "#ORD-003", customer: "Andi Wijaya",   item: "Soto Ayam",   qty: 3, total: "Rp 54.000", status: "Canceled"  },
  { id: "#ORD-004", customer: "Dewi Lestari",  item: "Gado-Gado",   qty: 1, total: "Rp 22.000", status: "Delivered" },
  { id: "#ORD-005", customer: "Reza Pratama",  item: "Rendang",     qty: 2, total: "Rp 70.000", status: "Pending"   },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  Pending:   "bg-yellow-100 text-yellow-700",
  Canceled:  "bg-red-100 text-red-600",
};

const emptyForm = { customer: "", item: "", qty: "", total: "", status: "Pending" };

export default function OrdersPage() {
  const [orders, setOrders]     = useState(initOrders);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm]         = useState(emptyForm);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `#ORD-00${orders.length + 1}`,
      customer: form.customer,
      item: form.item,
      qty: Number(form.qty),
      total: form.total,
      status: form.status,
    };
    setOrders((prev) => [...prev, newOrder]);
    setForm(emptyForm);
    setShowModal(false);
  };

  return (
    <div>
      <PageHeader
        title="Orders"
        breadcrumb={{ home: "Dashboard", current: "Order List" }}
        buttonLabel="+ Add Order"
        onAdd={() => setShowModal(true)}
      />

      <div className="p-5">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex items-center gap-3 p-5 border-b border-gray-100">
            <FaShoppingCart className="text-hijau text-xl" />
            <h2 className="text-lg font-semibold text-gray-700">Order List</h2>
            <span className="ml-auto text-sm text-gray-400">{orders.length} orders</span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Item</th>
                <th className="px-6 py-3 text-left">Qty</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">{o.id}</td>
                  <td className="px-6 py-4 text-gray-600">{o.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{o.item}</td>
                  <td className="px-6 py-4 text-gray-600">{o.qty}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{o.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Order */}
      <Modal
        isOpen={showModal}
        onClose={() => { setShowModal(false); setForm(emptyForm); }}
        title="Add New Order"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {[
            { label: "Customer Name", name: "customer", type: "text",   placeholder: "Nama pelanggan" },
            { label: "Menu Item",     name: "item",     type: "text",   placeholder: "Nama menu" },
            { label: "Qty",           name: "qty",      type: "number", placeholder: "Jumlah" },
            { label: "Total",         name: "total",    type: "text",   placeholder: "Rp 0" },
          ].map((f) => (
            <div key={f.name} className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">{f.label}</label>
              <input
                required
                type={f.type}
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-hijau transition-colors"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-hijau transition-colors"
            >
              <option>Pending</option>
              <option>Delivered</option>
              <option>Canceled</option>
            </select>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => { setShowModal(false); setForm(emptyForm); }}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg bg-hijau text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
