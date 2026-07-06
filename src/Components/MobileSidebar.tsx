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
  FileText,
  Scale,
  Plus,
  CircleDollarSign,
  X,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebar = ({
  isOpen,
  setIsOpen,
}: MobileSidebarProps) => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Quotes",
      path: "/quotes",
      icon: <Quote size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Hammer size={20} />,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: <Receipt size={20} />,
    },
    {
      name: "Payrolls",
      path: "/payrolls",
      icon: <Wallet size={20} />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <Users size={20} />,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: <Handshake size={20} />,
    },
    {
      name: "Vendors",
      path: "/vendors",
      icon: <Handshake size={20} />,
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: <FileText size={20} />,
    },
    {
      name: "Balance Sheet",
      path: "/balancesheet",
      icon: <Scale size={20} />,
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-100vh  w-52 bg-white
          shadow-xl border-r
          flex flex-col
          transition-transform duration-300
          lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button  onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex justify-center py-6"
          >
            <img
              src={logo}
              className="w-24 h-24"
              alt="Logo"
            />
          </Link>

          {/* Buttons */}
          <div className="px-5 space-y-3">
            <Link
              to="/createquote"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 border border-emerald-700 text-emerald-700 rounded-md py-2 hover:bg-emerald-50"
            >
              <Plus size={18} />
              Create a Quote
            </Link>

            <button className="w-full bg-emerald-700 text-white rounded-md py-2 flex items-center justify-center gap-2 hover:bg-emerald-800">
              <CircleDollarSign size={18} />
              Pay Employees
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-6 px-4 pb-6">
            {sidebarLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 mb-2 transition-all ${
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
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;