import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="dashboard-container">

      <PageHeader
        title="Dashboard"
        breadcrumb={{ home: "Dashboard", current: "Overview" }}
        buttonLabel="+ Add Widget"
        onAdd={() => setShowModal(true)}
      />

      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">

        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-white" />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold text-gray-800">75</span>
            <span id="orders-text" className="text-gray-400 text-sm">Total Orders</span>
          </div>
        </div>

        <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="delivered-icon" className="bg-blue-500 rounded-full p-4">
            <FaTruck className="text-3xl text-white" />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold text-gray-800">175</span>
            <span id="delivered-text" className="text-gray-400 text-sm">Total Delivered</span>
          </div>
        </div>

        <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="canceled-icon" className="bg-red-500 rounded-full p-4">
            <FaBan className="text-3xl text-white" />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold text-gray-800">40</span>
            <span id="canceled-text" className="text-gray-400 text-sm">Total Canceled</span>
          </div>
        </div>

        <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="revenue-icon" className="bg-yellow-400 rounded-full p-4">
            <FaDollarSign className="text-3xl text-white" />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold text-gray-800">Rp.128</span>
            <span id="revenue-text" className="text-gray-400 text-sm">Total Revenue</span>
          </div>
        </div>

      </div>

      {/* Modal Add Widget */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add Widget"
      >
        <div className="flex flex-col gap-3">
          {["Sales Chart", "Revenue Graph", "Top Products", "Recent Orders"].map((w) => (
            <button
              key={w}
              className="text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-hijau hover:bg-green-50 text-gray-700 font-medium transition-all cursor-pointer"
              onClick={() => {
                alert(`Widget "${w}" ditambahkan!`);
                setShowModal(false);
              }}
            >
              {w}
            </button>
          ))}
        </div>
      </Modal>

    </div>
  );
}
