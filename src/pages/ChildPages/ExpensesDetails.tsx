import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import {Link} from 'react-router-dom'

const ExpensesDetails = () => {

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
  <div className="mt-6 space-y-4">
   
     <Link to="/expenses" className="flex gap-3 cursor-pointer transition-all hover:bg-emerald-700 w-30 bg-emerald-900 text-white px-4 py-2 rounded-full
      justify-center items-center">
         <ArrowLeft/>
         <button className="cursor-pointer">Back</button> 
     </Link>

  {/* Header */}
  <div
    className="hidden sm:flex justify-between
    bg-lime-100 text-emerald-700 rounded-lg px-8 py-3 font-medium"
  >
    <h1>Serial #</h1>
    <h1>Category</h1>
    <h1>Expense</h1>
    <h1>Working Site</h1>
    <h1>Payment</h1>
    <h1>Paid By</h1>
  </div>

  {/* Rows */}
  {quotesData.map((item) => (
    <div
      key={item.serial}
      className="border border-gray-200 px-8 rounded-xl shadow-sm bg-white
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

      

      </div>
    </div>
  ))}
</div>
  );
};

export default ExpensesDetails