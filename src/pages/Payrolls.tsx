import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import PayCard from "../Components/PayCard";
import { FilterIcon } from "lucide-react";
import EmployeePayRolls from "./ChildPages/EmployeePayRolls";
import { Link } from "react-router-dom";

const Payrolls = () => {
  const [status] = useState("paid");
  const[isPaid , setIsPaid] = useState<boolean>(false)
   const [isCardOpen , setIsPayCardOpen] = useState(false)
  
   const expenses = 50 

  const quotesData = [
    {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: 'pending',
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: "pending",
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },
     {
      serial: 1,
      employeName: "Sarah Peters",
      PayPeriod: "25 Days",
      Epenses: expenses,
      huorsWorked: "Self",
      status: status,
    },



  ];

  return (
  <div className="mt-6 space-y-4 border border-gray-200 h-screen rounded-xl shadow-sm overflow-y-auto no-scrollbar bg-white p-5">
    
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl font-medium mt-3 text-gray-700">Pay Rolls</h1>
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
    className="hidden sm:flex justify-between
     mt-5     bg-lime-100 text-emerald-700 rounded-lg px-6 py-3 font-medium"
  >
    <h1>Serial #</h1>
    <h1>Employee Name</h1>
    <h1>Pay period</h1>
    <h1>Expenses</h1>
    <h1>Hours worked</h1>
    <h1>Status</h1>
    <h1>Options</h1>
  </div>

  {/* Rows */}
  {quotesData.map((item) => (
    <div
      key={item.serial}
      className="border border-gray-200 rounded-xl shadow-sm bg-white
      flex justify-between 
      p-5"
    >
      {/* Mobile */}
      <div className="lg:hidden space-y-3">

        <div className="flex justify-between">
          <span className="font-semibold">Serial</span>
          <span>0{item.serial}.</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Employee Name</span>
          <span>{item.employeName}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Pay Period</span>
          <span>{item.PayPeriod}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Expenses</span>
          <span className="text-right">${item.Epenses.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Hours Worked</span>
          <span>{item.huorsWorked}</span>
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
      <div className="hidden sm:contents">
        <span>0{item.serial}.</span>

        <span>{item.employeName}</span>

        <span>{item.PayPeriod}</span>

        <span>${item.Epenses.toFixed(2)}</span>

        <span>{item.huorsWorked}</span>


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
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Expenses</button>

            ):(
              <Link to={'/employeepayrolls'} onClick={()=>{setIsPaid(true); setIsPayCardOpen(true)}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pay Rolls</Link>
            )}
           </div>
        </div>
         {isPaid && 
          isCardOpen &&
          (
            <EmployeePayRolls
            />
          ) 
         } 
      </div>
    </div>
  ))}
</div>
  );
};

export default Payrolls