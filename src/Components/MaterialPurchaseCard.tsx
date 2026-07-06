import React, { useState, type SetStateAction } from "react";
import {
  ChevronDown,
  CloudDownload,
  Hammer,
  Construction,
  ContactRound,
  X,
} from "lucide-react";

interface Props {
  next: () => void;
    setIsClose:React.Dispatch<SetStateAction<boolean>>
}

const AddexpensesModel = ({ next , setIsClose }: Props) => {
  const [openCategory, setOpenCategory] = useState(false);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [invoice, setInvoice] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    next();
  };

  return (
    <div className="relative mt-10 z-[70] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg relative bg-white border border-gray-300 p-5 shadow-lg max-h-[90vh] overflow-y-auto"
      >
            <button
          onClick={()=>setIsClose(true)} 
          className="absolute top-5 cursor-pointer right-5 text-[#4F8B80] hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">
          Add Expenses
        </h1>

        {/* Category */}
        <h2 className="text-lg font-medium text-gray-700 mb-2">
          Category
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenCategory(!openCategory)}
            className="w-full border border-gray-300 rounded-md p-3 flex items-center justify-between"
          >
            <span
              className={
                category ? "text-black" : "text-gray-400"
              }
            >
              {category || "Choose Expense Type"}
            </span>

            <ChevronDown
              size={18}
              className={`transition ${
                openCategory ? "rotate-180" : ""
              }`}
            />
          </button>

          {openCategory && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20">

              <div
                onClick={() => {
                  setCategory("Material Bought");
                  setOpenCategory(false);
                }}
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-emerald-100"
              >
                <Hammer size={20} className="text-emerald-700" />
                <span>Material Bought</span>
              </div>

              <div
                onClick={() => {
                  setCategory("Vendor Cost");
                  setOpenCategory(false);
                }}
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-emerald-100"
              >
                <Construction
                  size={20}
                  className="text-emerald-700"
                />
                <span>Vendor Cost</span>
              </div>

              <div
                onClick={() => {
                  setCategory("Employee Cost");
                  setOpenCategory(false);
                }}
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-emerald-100"
              >
                <ContactRound
                  size={20}
                  className="text-emerald-700"
                />
                <span>Employee Cost</span>
              </div>
            </div>
          )}
        </div>

        {/* Invoice */}

        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Attach Invoice
        </h2>

        <label
          htmlFor="invoice"
          className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer"
        >
          <div className="border rounded-md p-2">
            <CloudDownload size={20} />
          </div>

          <p className="text-emerald-700 mt-2">
            Click to Upload
          </p>

          <p className="text-gray-400 text-sm">
            PNG or JPG (Max 200KB)
          </p>

          {invoice && (
            <p className="text-sm text-black mt-2">
              {invoice.name}
            </p>
          )}

          <input
            id="invoice"
            hidden
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              if (e.target.files?.length) {
                setInvoice(e.target.files[0]);
              }
            }}
          />
        </label>

        {/* Amount */}

        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Expenses
        </h2>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter Amount"
          className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-emerald-600"
        />

        {/* Payment */}

        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Payment Method
        </h2>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        >
          <option value="">Choose Payment Method</option>
          <option value="paypal">Paypal</option>
          <option value="nayapay">Naya Pay</option>
          <option value="sadapay">Sada Pay</option>
        </select>

        {/* Paid By */}

        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Paid By
        </h2>

        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        >
          <option value="">Choose</option>
          <option value="self">Self</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full mt-8"
        >
          Add Expenses
        </button>
      </form>
    </div>
  );
};

export default AddexpensesModel;