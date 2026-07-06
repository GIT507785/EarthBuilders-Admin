import { X, FileText } from "lucide-react";
import React, { useState, type SetStateAction } from "react";

interface Props {
  setIsClose: React.Dispatch<SetStateAction<boolean>>
  onGenerateInvoice: (poNumber: string) => void;
}

const CompleteProjectCard = ({
  onGenerateInvoice,
  setIsClose
}: Props) => {
  const [poNumber, setPoNumber] = useState("");

  const handleGenerate = () => {
    const randomNumber = Math.floor(100 + Math.random() * 1000);
    console.log(randomNumber);
    return `INV-${new Date().getFullYear()}-${randomNumber}`;    
  }
    if (!poNumber.trim()) {
      alert("Please enter PO Number");
      return;


    onGenerateInvoice(poNumber);
  };

  return (
    <div  className="top-30 absolute left-0 sm:left-100 fiexd">
      <div  className="relative w-[520px] rounded-xl bg-white shadow-2xl border border-gray-200 p-8">

        {/* Close Button */}

        <button
          onClick={()=>setIsClose(true)} 
          className="absolute top-5 cursor-pointer right-5 text-[#4F8B80] hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        {/* Heading */}

        <h2 className="text-[25px] font-semibold text-center leading-tight">
          Are you sure that the project has
          <br />
          been completed?
        </h2>

        {/* PO Number */}

        <input
          type="text"
          value={poNumber}
          onChange={(e) => setPoNumber(e.target.value)}
          placeholder="Enter PO number"
          className="mt-8 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
        />

        {/* Buttons */}

        <div className="mt-8 flex justify-center gap-4">

          <button
            type="button"
            className="w-36 rounded-full bg-[#5C8F84] py-3 text-white font-medium hover:bg-[#4B7D73] transition"
          >
            No
          </button>

          <button
            type="button"
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 rounded-full bg-[#8CC84B] px-7 py-3 text-white font-medium hover:bg-[#79B63B] transition"
          >
            <FileText size={18} />
            Yes, Generate Invoice
          </button>

        </div>
      </div>
    </div>
  );
};

export default CompleteProjectCard    