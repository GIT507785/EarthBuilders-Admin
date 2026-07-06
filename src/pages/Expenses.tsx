import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { FilterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PayCard from "../Components/PayCard";

const Expenses = () => {
  const [status] = useState("paid");
  const [isPaid, setIsPaid] = useState(false);
  const [isPayCardOpen, setIsPayCardOpen] = useState(false);

  const quotesData = [
    {
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      status: status,
      expenses: "$560.00",
    },
    {
      serial: 2,
      category: "Material Purchase",
      site: "Chicago Downtown",
      paymentmethod: "Cash",
      paidby: "Haseeb",
      status: "pending",
      expenses: "$720.00",
    },
    {
      serial: 3,
      category: "Fuel",
      site: "Lahore Site",
      paymentmethod: "Bank Transfer",
      paidby: "Ali",
      status: "paid",
      expenses: "$240.00",
    },
    {
      serial: 4,
      category: "Equipment",
      site: "Samundri",
      paymentmethod: "Credit Card",
      paidby: "Hamza",
      status: "pending",
      expenses: "$900.00",
    },
    {
      serial: 5,
      category: "Labor",
      site: "Canal Road",
      paymentmethod: "Cash",
      paidby: "Self",
      status: "paid",
      expenses: "$430.00",
    },
  ];

  return (
    <div className="mt-6 h-screen overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm no-scrollbar">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-700">
          Expenses
        </h1>

        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white hover:bg-emerald-600 sm:w-fit">
          <FilterIcon size={18} />
          Filter
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-[80px_1.5fr_120px_1.6fr_1.3fr_120px_120px_70px] rounded-xl bg-lime-100 px-8 py-4 mt-6 font-semibold text-emerald-700">
        <h1>Serial</h1>
        <h1>Category</h1>
        <h1>Expense</h1>
        <h1>Working Site</h1>
        <h1>Payment</h1>
        <h1>Paid By</h1>
        <h1>Status</h1>
        <h1 className="text-center">Options</h1>
      </div>

      {/* Rows */}
      <div className="mt-4 space-y-4">
        {quotesData.map((item) => (
          <div
            key={item.serial}
            className="rounded-xl border border-gray-200 bg-white shadow-sm lg:grid lg:grid-cols-[80px_1.5fr_120px_1.6fr_1.3fr_120px_120px_70px] lg:items-center px-5 sm:px-8 py-5"
          >
            {/* Mobile Card */}
            <div className="space-y-4 lg:hidden">
              <div className="flex justify-between">
                <span className="font-semibold">Serial</span>
                <span>0{item.serial}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span>{item.category}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Expense</span>
                <span>{item.expenses}</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="font-semibold">Working Site</span>
                <span className="text-right">{item.site}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Payment</span>
                <span>{item.paymentmethod}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Paid By</span>
                <span>{item.paidby}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold">Status</span>

                <span
                  className={`inline-flex min-w-[90px] justify-center rounded-full px-4 py-1.5 text-sm font-medium text-white ${
                    item.status === "paid"
                      ? "bg-emerald-600"
                      : "bg-orange-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex justify-end">
                <div className="group relative">
                  <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                  <div className="absolute right-0 top-7 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                    {item.status === "paid" ? (
                      <Link
                        to="/expensesdetails"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        View Expense
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setIsPaid(true);
                          setIsPayCardOpen(true);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        Pay Expense
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Row */}
            <div className="hidden lg:contents">
              <span>0{item.serial}</span>

              <span>{item.category}</span>

              <span>{item.expenses}</span>

              <span>{item.site}</span>

              <span>{item.paymentmethod}</span>

              <span>{item.paidby}</span>

              <div>
                <span
                  className={`inline-flex min-w-[90px] justify-center rounded-full px-5 py-2 text-sm font-medium text-white ${
                    item.status === "paid"
                      ? "bg-emerald-600"
                      : "bg-orange-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="relative flex justify-center group">
                <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                <div className="absolute right-0 top-8 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-xl group-hover:block">
                  {item.status === "paid" ? (
                    <Link
                      to="/expensesdetails"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      View Expense
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setIsPaid(true);
                        setIsPayCardOpen(true);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Pay Expense
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pay Card */}
      {isPaid && isPayCardOpen && (
        <PayCard setIsPayCardOpen={setIsPayCardOpen} />
      )}
    </div>
  );
};

export default Expenses;