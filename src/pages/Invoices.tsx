import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import {Link} from 'react-router-dom'
import { ChevronDown, ChevronUp, FilterIcon } from "lucide-react";

const Invoices = () => {
  const [status] = useState("received");
  const[read , setRead] = useState<boolean>(false)
  
  const  invoiceAmount = 50


  const quotesData = [
    {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 60.00, 
      status: status,
    },
     {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 60.00, 
      status: "pending",
    },
     {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 10.00, 
      status: status,
    },
     {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 10.00, 
      status: status,
    },
     {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 560.00, 
      status: "pending",
    },
     {
      serial: 1,
      Client: "sara peters",
      site: "Selveston Road, Chicago",
      invoiceAmount: invoiceAmount,
      totalexpenses: 560.00,
      grossProfit: 560.00, 
      status: status,
    },

  ];
  

  return (
  <div className="mt-6 space-y-4 border border-gray-200 h-screen rounded-xl shadow-sm overflow-y-auto no-scrollbar bg-white p-5">
    
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl font-medium mt-3 text-gray-700">Invoices</h1>
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
    className="hidden  mt-5 sm:flex justify-between 
    bg-lime-100 text-emerald-700 rounded-lg px-6 py-3 font-medium"
  >
    <h1>Serial #</h1>
    <h1>Client</h1>
    <h1 >Working Site</h1>
    <h1>Invoice Amount</h1>
    <h1>Total Expenses</h1>
    <h1>Gross profit</h1>
    <h1>Status</h1>
    <h1>Options</h1>
  </div>

  {/* Rows */}
  {quotesData.map((item) => (
    <div
      key={item.serial}
      className="border border-gray-200 rounded-xl shadow-sm bg-white
     flex justify-between px-6
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
          <span className="font-semibold">Client</span>
          <span>{item.Client}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Site</span>
          <span className="text-right">{item.site}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Expense</span>
          <span>${item.totalexpenses.toFixed(2)}</span>
        </div>


        <div className="flex justify-between">
          <span className="font-semibold">Payment</span>
          <span>{item.invoiceAmount}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Gross profit</span>
          <span>{item.grossProfit}</span>
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

        <span className=" -ml-6">{item.Client}</span>

        <span className="w-40 -ml-10">{item.site}</span>
        <span>${item.invoiceAmount.toFixed(2)}</span>
        <span>${item.totalexpenses.toFixed(2)}</span>
        <span>{
           item.grossProfit > 20 ? (
             <div className="flex ">
            <ChevronUp size={16} className="text-emerald-600"/>
            <span className="text-emerald-600">${item.grossProfit.toFixed(2)}</span>
             </div>
           ):(
            <div className="flex items-center">
            <ChevronDown size={16} className="text-red-600"/>
            <span className="text-red-600">${item.grossProfit.toFixed(2)}</span>  
            </div>            
           )
          }</span>


        <div>
          <span
            className={`px-5 py-2 rounded-full text-sm text-white ${
              item.status === "received"
                ? "bg-emerald-600"
                : item.status === "pending" 
                ? "bg-orange-400"
                : "bg-lime-500"
            }`}
          >
            {item.status}
          </span>
          
          {/* {read && (
            <div className="px-5 py-2 rounded-full text-sm text-white bg-emerald-600">
              <span>Received</span>
            </div>
          )}s  */}

        </div>

        <div className="flex group justify-center">
          <LiaEllipsisVSolid className="text-xl cursor-pointer" />
           <div className="hidden group-hover:block transition-all duration-1000 absolute mt-10 bg-white shadow-lg rounded-md p-2">
            {item.status === "received" ? (
              <Link to="/expensesdetails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Expenses</Link>

            ):(
                
              <button onClick={()=>setRead(true)}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mark as read</button>
            )}
           </div>
        </div>
         
      </div>
    </div>
  ))}
</div>
  );
};

export default Invoices