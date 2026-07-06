import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import PayCard from "../Components/PayCard";
import {Link} from 'react-router-dom'
import { FilterIcon } from "lucide-react";

const Expenses = () => {
  const [status] = useState("paid");
  const[isPaid , setIsPaid] = useState<boolean>(false)
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
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      status: status,
      expenses: "$560.00",
    },{
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      status: status,
      expenses: "$560.00",
    },{
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      status: status,
      expenses: "$560.00",
    },
    {
      serial: 1,
      category: "Tool Purchase",
      site: "Selveston Road, Chicago",
      paymentmethod: "Credit Card",
      paidby: "Self",
      status: status,
      expenses: "$560.00",
    },

  ];

  return (
  <div className="mt-6 space-y-4 border border-gray-200 h-screen rounded-xl shadow-sm overflow-y-auto no-scrollbar bg-white p-5">
    
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl font-medium mt-3 text-gray-700">Expenses</h1>
      </div>
      <div className="flex gap-3 bg-emerald-900 text-white px-4 py-2 rounded-full justify-center items-center">
         <FilterIcon/>
         <button>
          Filter
         </button>
      </div>
    </div>
 
  {/* Header */}
  <div
    className="hidden lg:grid mt-5 grid-cols-[70px_1.3fr_120px_1.5fr_1.3fr_100px_120px_60px]
    bg-lime-100 text-emerald-700 rounded-lg px-6 py-3 font-medium"
  >
    <h1>Serial #</h1>
    <h1>Category</h1>
    <h1>Expense</h1>
    <h1>Working Site</h1>
    <h1>Payment</h1>
    <h1>Paid By</h1>
    <h1>Status</h1>
    <h1>Options</h1>
  </div>

  {/* Rows */}
  {quotesData.map((item) => (
    <div
      key={item.serial}
      className="border border-gray-200 rounded-xl shadow-sm bg-white
      lg:grid lg:grid-cols-[70px_1.3fr_120px_1.5fr_1.3fr_100px_120px_60px]
      lg:items-center
      p-5"
    >
      {/* Mobile */}
      <div className="lg:hidden space-y-3">

        <div className="flex justify-between">
          <span className="font-semibold">Serial</span>
          <span>0{item.serial}.</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Category</span>
          <span>{item.category}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Expense</span>
          <span>{item.expenses}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Site</span>
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
            className={`px-4 py-1 rounded-full text-sm text-white ${
              item.status === "paid"
                ? "bg-emerald-600"
                : item.status === "pending"
                ? "bg-orange-400"
                : "bg-lime-500"
            }`}
          >
            {item.status}
          </span>
        </div>

        <div className="flex justify-end">
          <LiaEllipsisVSolid className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:contents">
        <span>0{item.serial}.</span>

        <span>{item.category}</span>

        <span>{item.expenses}</span>

        <span>{item.site}</span>

        <span>{item.paymentmethod}</span>

        <span>{item.paidby}</span>

        <div>
          <span
            className={`px-5 py-2 rounded-full text-sm text-white ${
              item.status === "paid"
                ? "bg-emerald-600"
                : item.status === "pending"
                ? "bg-orange-400"
                : "bg-lime-500"
            }`}
          >
            {item.status}
          </span>
        </div>

        <div className="flex group justify-center">
          <LiaEllipsisVSolid className="text-xl cursor-pointer" />
           <div className="hidden group-hover:block transition-all duration-1000 absolute mt-10 bg-white shadow-lg rounded-md p-2">
            {item.status === "paid" ? (
              <Link to="/expensesdetails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Expenses</Link>

            ):(
              <button onClick={()=>{setIsPaid(true); setIsPayCardOpen(true)}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pay Expenses</button>
            )}
           </div>
        </div>
         {isPaid && 
          isPayCardOpen &&
          (
            <PayCard 
             setIsPayCardOpen={setIsPayCardOpen}
            />
          ) 
         } 
      </div>
    </div>
  ))}
</div>
  );
};

export default Expenses;