import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";

const initCustomers = [
  { id: 1, name: "Budi Santoso",  email: "budi@email.com",  phone: "081234567890", orders: 12, joined: "Jan 2024" },
  { id: 2, name: "Siti Aminah",   email: "siti@email.com",  phone: "081298765432", orders: 7,  joined: "Mar 2024" },
  { id: 3, name: "Andi Wijaya",   email: "andi@email.com",  phone: "085612345678", orders: 3,  joined: "May 2024" },
  { id: 4, name: "Dewi Lestari",  email: "dewi@email.com",  phone: "082198765432", orders: 20, joined: "Feb 2024" },
  { id: 5, name: "Reza Pratama",  email: "reza@email.com",  phone: "089812345678", orders: 5,  joined: "Jun 2024" },
];

const emptyForm = { name: "", email: "", phone: "" };

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initCustomers);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm]           = useState(emptyForm);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: customers.length + 1,
      name: form.name,
      email: form.email,
      phone: form.phone,
      orders: 0,
      joined: new Date().toLocaleString("en-US", { month: "short", year: "numeric" }),
    };
    setCustomers((prev) => [...prev, newCustomer]);
    setForm(emptyForm);
    setShowModal(false);
  };

  return (
    <div>
      <PageHeader
        title="Customers"
        breadcrumb={{ home: "Dashboard", current: "Customer List" }}
        buttonLabel="+ Add Customer"
        onAdd={() => setShowModal(true)}
      />

      <div className="p-5">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex items-center gap-3 p-5 border-b border-gray-100">
            <FaUsers className="text-hijau text-xl" />
            <h2 className="text-lg font-semibold text-gray-700">Customer List</h2>
            <span className="ml-auto text-sm text-gray-400">{customers.length} customers</span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Orders</th>
                <th className="px-6 py-3 text-left">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">{c.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://avatar.iran.liara.run/public/${c.id + 10}`}
                        alt={c.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium text-gray-800">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{c.email}</td>
                  <td className="px-6 py-4 text-gray-600">{c.phone}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {c.orders} orders
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Customer */}
      <Modal
        isOpen={showModal}
        onClose={() => { setShowModal(false); setForm(emptyForm); }}
        title="Add New Customer"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {[
            { label: "Full Name", name: "name",  type: "text",  placeholder: "Nama lengkap" },
            { label: "Email",     name: "email", type: "email", placeholder: "email@contoh.com" },
            { label: "Phone",     name: "phone", type: "tel",   placeholder: "08xxxxxxxxxx" },
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
