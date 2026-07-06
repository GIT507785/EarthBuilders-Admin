import { Coins, ChevronDown, X } from "lucide-react";



const PayExpense = ({setIsPayCardOpen}: {setIsPayCardOpen: (isPayCardOpen: boolean) => void}) => {
   
   

  return (
    <div  className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm flex items-center justify-center p-4">
      <div  className="w-full relative max-w-md h-140 top-2 rounded-xl bg-white p-5 shadow-xl no-scrollbar overflow-y-auto">

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-8">
          Pay Expense
        </h1>
         
         <div className="absolute  top-0 right-0 p-4 cursor-pointer" onClick={() => setIsPayCardOpen(false)}>
           <X size={24} className="text-gray-500 hover:text-gray-700 transition" />
         </div>

        {/* Amount Card */}
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-gray-200">

          {/* Paid */}
          <div>
            <div className="bg-lime-400 py-3 text-center text-white font-medium">
              Amount Paid
            </div>

            <div className="bg-linear-to-r from-emerald-700 to-lime-400 h-28 flex items-center justify-center">
              <h2 className="text-5xl text-white font-light">
                $40.00
              </h2>
            </div>
          </div>

          {/* Remaining */}
          <div>
            <div className="bg-lime-50 py-3 text-center text-emerald-700 font-medium">
              Amount to be Paid
            </div>

            <div className="h-28 flex items-center justify-center bg-white">
              <h2 className="text-5xl text-emerald-700 font-light">
                $20.00
              </h2>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-8">
          <label className="block text-2xl font-medium text-gray-700 mb-3">
            Payment Method
          </label>

          <div className="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-4 cursor-pointer">
            <span className="text-gray-400">
              Choose Payment Method
            </span>

            <ChevronDown size={22} className="text-gray-500" />
          </div>
        </div>

        {/* Paid By */}
        <div className="mt-6">
          <label className="block text-2xl font-medium text-gray-700 mb-3">
            Paid By
          </label>

          <div className="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-4 cursor-pointer">
            <span className="text-gray-500">
              Self
            </span>

            <ChevronDown size={22} className="text-gray-500" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-3 rounded-full bg-emerald-700 px-10 py-4 text-white hover:bg-emerald-800 transition">
            <Coins size={22} />
            <span className="text-lg font-medium">
              Pay Expense
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PayExpense;