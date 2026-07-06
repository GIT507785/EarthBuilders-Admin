import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExpensesDetails = () => {
  const quotesData = [
    {
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      expenses: "$560.00",
    },
    {
      serial: 2,
      category: "Material Purchase",
      site: "Chicago Downtown",
      paymentmethod: "Cash",
      paidby: "Haseeb",
      expenses: "$720.00",
    },
    {
      serial: 3,
      category: "Fuel",
      site: "Lahore Site",
      paymentmethod: "Bank Transfer",
      paidby: "Ali",
      expenses: "$240.00",
    },
    {
      serial: 4,
      category: "Equipment",
      site: "Samundri",
      paymentmethod: "Credit Card",
      paidby: "Hamza",
      expenses: "$900.00",
    },
    {
      serial: 5,
      category: "Labor",
      site: "Canal Road",
      paymentmethod: "Cash",
      paidby: "Self",
      expenses: "$430.00",
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm min-h-[calc(100vh-120px)]">

      {/* Back Button */}
      <Link
        to="/expenses"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white transition hover:bg-emerald-600"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-[80px_1.5fr_140px_1.8fr_1.4fr_120px] rounded-xl bg-lime-100 px-8 py-4 mt-6 font-semibold text-emerald-700">
        <h1>Serial</h1>
        <h1>Category</h1>
        <h1>Expense</h1>
        <h1>Working Site</h1>
        <h1>Payment</h1>
        <h1>Paid By</h1>
      </div>

      {/* Data */}
      <div className="mt-4 space-y-4">
        {quotesData.map((item) => (
          <div
            key={item.serial}
            className="rounded-xl border border-gray-200 bg-white shadow-sm px-5 sm:px-8 py-5 lg:grid lg:grid-cols-[80px_1.5fr_140px_1.8fr_1.4fr_120px] lg:items-center"
          >
            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
              <div className="flex justify-between">
                <span className="font-semibold">Serial</span>
                <span>{item.serial}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span>{item.category}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Expense</span>
                <span>{item.expenses}</span>
              </div>

              <div className="flex justify-between gap-4">
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
            </div>

            {/* Desktop */}
            <div className="hidden lg:contents">
              <span>{item.serial}</span>
              <span>{item.category}</span>
              <span>{item.expenses}</span>
              <span>{item.site}</span>
              <span>{item.paymentmethod}</span>
              <span>{item.paidby}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesDetails;