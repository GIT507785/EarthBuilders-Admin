import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  LayoutDashboard,
  Quote,
  Hammer,
  Receipt,
  Wallet,
  Users,
  Handshake,
  Truck,
  FileText,
  Scale,
  Plus,
  CircleDollarSign,
  
} from "lucide-react";





const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
    { name: "Quotes", path: "/quotes", icon: <Quote /> },
    { name: "Projects", path: "/projects", icon: <Hammer /> },
    { name: "Expenses", path: "/expenses", icon: <Receipt /> },
    { name: "Payrolls", path: "/payrolls", icon: <Wallet /> },
    { name: "Users", path: "/users", icon: <Users /> },
    { name: "Clients", path: "/clients", icon: <Handshake /> },
    { name: "Vendors", path: "/vendors", icon: <Truck /> },
    { name: "Invoices", path: "/invoices", icon: <FileText /> },
    { name: "Balance Sheet", path: "/balancesheet", icon: <Scale /> },
  ];

  return (
     <div>

   <div className="hidden lg:flex lg:flex-col w-64 min-h-screen
    bg-white border-r border-gray-200">
  {/* Logo */}
  <Link to="/" className="px-6">
    <img
      src={logo}
      className="w-28 h-28"
      alt="Logo"
      />
  </Link>

  {/* Buttons */}
  <div className="px-6 mt-2">
    <Link
      to="/createquote"
      className="w-full border border-green-800 text-green-800 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-green-50"
      >
      <Plus size={18} />
      Create a Quote
    </Link>

    <button className="w-full mt-3 bg-emerald-700 text-white rounded-md py-2 flex items-center justify-center gap-2 hover:bg-emerald-800">
      <CircleDollarSign size={18} />
      Pay Employees
    </button>
  </div>

  {/* Navigation */}
  <div className="mt-6 px-4 flex-1">
    {sidebarLinks.map((item, index) => (
      <NavLink
      key={index}
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-md px-4 py-3 mt-2 transition-all ${
            isActive
              ? "bg-emerald-100 text-emerald-700 border-l-4 border-emerald-700"
              : "text-gray-600 hover:bg-gray-100"
            }`
        }
      >
        {item.icon}
        <span>{item.name}</span>
      </NavLink>
    ))}
  </div>
</div>
      

            </div>
  );
};

export default Sidebar;