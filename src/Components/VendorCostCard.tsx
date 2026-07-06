import React, { useState, type SetStateAction } from "react";
import {
  ChevronDown,
  CloudDownload,
  Construction,
  ContactRound,
  X,
} from "lucide-react";

interface Props {
  next: () => void;
  setIsClose:React.Dispatch<SetStateAction<boolean>>
}

const VendorCostCard = ({ next , setIsClose }: Props) => {
  const [openCategory, setOpenCategory] = useState(false);

  const [category, setCategory] = useState("Vendor Cost");
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [vendor, setVendor] = useState("");
  const [task, setTask] = useState("");
  const [invoice, setInvoice] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense = {
      category,
      vendor,
      amount,
      task,
      invoice,
    };

    console.log(expense);

    next();
  };

  return (
    <div className="relative mt-10 z-[70] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md relative rounded-lg bg-white border border-gray-300 p-5 shadow-lg max-h-[90vh] overflow-y-auto"
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
            <span>{category}</span>

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

        {/* Vendor */}
        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Choose Vendor
        </h2>

        <select
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        >
          <option value="">Choose Vendor</option>
          <option value="Haseeb">Haseeb</option>
          <option value="Ali">Ali</option>
          <option value="Asad">Asad</option>
        </select>

        {/* Expense */}
        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Expense Amount
        </h2>

        <input
          type="number"
          value={amount ?? ""}
          onChange={(e) =>
            setAmount(
              e.target.value === ""
                ? undefined
                : Number(e.target.value)
            )
          }
          placeholder="Enter Amount"
          className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-emerald-600"
        />

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

        {/* Task */}
        <h2 className="text-lg font-medium text-gray-700 mt-6 mb-2">
          Task
        </h2>

        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task Details"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-emerald-600 resize-none"
        />

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

export default VendorCostCard;