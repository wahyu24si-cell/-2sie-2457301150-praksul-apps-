import { useState } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './pages/Dashboard';
import OrdersPage from './pages/OrdersPage';
import CustomersPage from './pages/CustomersPage';
import './assets/styles.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'orders':    return <OrdersPage />;
      case 'customers': return <CustomersPage />;
      default:          return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar menerima halaman aktif & handler navigasi */}
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
          {renderPage()}
        </main>
      </div>

    </div>
  );
}

export default App;
