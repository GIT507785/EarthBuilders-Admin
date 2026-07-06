import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FilterIcon } from "lucide-react";

interface Invoice {
  id: number;
  dategeneratd: string;
  projectNamet: string;
  site: string;
  clientName: string;
  service: string;
  invoiceAmoun: number;
  status: "received" | "pending" | "paid";
  isRead: boolean;
}

const VendorsInvoices = () => {
  const [quotesData, setQuotesData] = useState<Invoice[]>([
    {
      id: 1,
      dategeneratd: new Date().toLocaleDateString(),
      projectNamet: "Highway Construction",
      site: "Selveston Road, Chicago",
      clientName: "Sara Peters",
      service: "Drywall",
      invoiceAmoun: 50,
      status: "received",
      isRead: false,
    },
    {
      id: 2,
      dategeneratd: new Date().toLocaleDateString(),
      projectNamet: "Bridge Project",
      site: "New York",
      clientName: "John Smith",
      service: "Painting",
      invoiceAmoun: 120,
      status: "pending",
      isRead: false,
    },
    {
      id: 3,
      dategeneratd: new Date().toLocaleDateString(),
      projectNamet: "Hospital",
      site: "California",
      clientName: "Alex",
      service: "Drywall",
      invoiceAmoun: 250,
      status: "paid",
      isRead: false,
    },
  ]);

  const markAsRead = (id: number) => {
    setQuotesData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  return (
    <div className="mt-6 space-y-4 border border-gray-200 h-screen rounded-xl shadow-sm overflow-y-auto no-scrollbar bg-white p-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-700">Invoices</h1>

        <button className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-2 rounded-full transition">
          <FilterIcon size={18} />
          Filter
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-8 bg-lime-100 text-emerald-700 rounded-lg px-6 py-3 font-medium">
        <span>Date</span>
        <span>Project</span>
        <span>Site</span>
        <span>Client</span>
        <span>Service</span>
        <span>Amount</span>
        <span>Status</span>
        <span className="text-center">Options</span>
      </div>

      {/* Rows */}
      {quotesData.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl shadow-sm bg-white p-5"
        >
          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-8 items-center gap-4">
            <span>{item.dategeneratd}</span>

            <span>{item.projectNamet}</span>

            <span>{item.site}</span>

            <span>{item.clientName}</span>

            <span>{item.service}</span>

            <span>${item.invoiceAmoun.toFixed(2)}</span>

            <span
              className={`px-4 py-2 rounded-full text-white text-center text-sm w-fit ${
                item.isRead
                  ? "bg-gray-500"
                  : item.status === "received"
                  ? "bg-emerald-600"
                  : item.status === "pending"
                  ? "bg-orange-400"
                  : "bg-blue-600"
              }`}
            >
              {item.isRead ? "Read" : item.status}
            </span>

            {/* Dropdown */}
            <div className="relative group flex justify-center">
              <LiaEllipsisVSolid className="text-xl cursor-pointer" />

              <div className="absolute right-0 top-6 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-44 z-50">
                {!item.isRead && item.status === "received" ? (
                  <button
                    onClick={() => markAsRead(item.id)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Mark as Read
                  </button>
                ) : (
                  <Link
                    to="/expensesdetails"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Expenses
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="space-y-3 lg:hidden">
            <div className="flex justify-between">
              <span className="font-semibold">Date</span>
              <span>{item.dategeneratd}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Project</span>
              <span>{item.projectNamet}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Site</span>
              <span>{item.site}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Client</span>
              <span>{item.clientName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Service</span>
              <span>{item.service}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Amount</span>
              <span>${item.invoiceAmoun.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Status</span>

              <span
                className={`px-4 py-1 rounded-full text-white text-sm ${
                  item.isRead
                    ? "bg-gray-500"
                    : item.status === "received"
                    ? "bg-emerald-600"
                    : item.status === "pending"
                    ? "bg-orange-400"
                    : "bg-blue-600"
                }`}
              >
                {item.isRead ? "Read" : item.status}
              </span>
            </div>

            <div className="flex justify-end">
              {!item.isRead && item.status === "received" ? (
                <button
                  onClick={() => markAsRead(item.id)}
                  className="text-sm bg-emerald-600 text-white px-3 py-1 rounded"
                >
                  Mark as Read
                </button>
              ) : (
                <Link
                  to="/expensesdetails"
                  className="text-sm bg-emerald-600 text-white px-3 py-1 rounded"
                >
                  View Expenses
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorsInvoices;