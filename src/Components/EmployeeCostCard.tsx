import { ChevronDown, X } from "lucide-react";
import React, { useState, type SetStateAction } from "react";

interface Props {
  next: () => void;
 setIsClose:React.Dispatch<SetStateAction<boolean>>
}

const EmployeeCostCard = ({ next , setIsClose }: Props) => {
  const [category, setCategory] = useState("Employee Cost");
  const [employee, setEmployee] = useState("");
  const [hourlyExpense, setHourlyExpense] = useState<number | undefined>();
  const [hoursWorked, setHoursWorked] = useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      category,
      employee,
      hourlyExpense,
      hoursWorked,
      totalExpense: (hourlyExpense ?? 0) * (hoursWorked ?? 0),
    };

    console.log(data);

  };

  return (
    <div className="relative mt-6  flex justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md relative rounded-lg bg-white border
         border-gray-300 p-5 shadow-lg max-h-[90vh] overflow-y-auto"
      >
 
               <button
          onClick={()=>setIsClose(true)} 
          className="absolute top-5 cursor-pointer right-5 text-[#4F8B80] hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        <h1 className="text-3xl font-semibold mb-8">
          Add Expense
        </h1>

        {/* Category */}

        <label className="block text-lg font-medium mb-2">
          Category
        </label>

        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none w-full border rounded-md p-3 outline-none focus:border-emerald-600"
          >
            <option>Employee Cost</option>
            <option>Vendor Cost</option>
            <option>Material Cost</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>

        {/* Employee */}

        <label className="block text-lg font-medium mt-6 mb-2">
          Choose Employee
        </label>

        <div className="relative">
          <select
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="appearance-none w-full border rounded-md p-3 outline-none focus:border-emerald-600"
          >
            <option value="">Employee</option>
            <option value="Haseeb">Haseeb</option>
            <option value="Ali">Ali</option>
            <option value="Asad">Asad</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>

        {/* Hourly Expense */}

        <label className="block text-lg font-medium mt-6 mb-2">
          Hourly Expense
        </label>

        <input
          type="number"
          value={hourlyExpense ?? ""}
          onChange={(e) =>
            setHourlyExpense(
              e.target.value === ""
                ? undefined
                : Number(e.target.value)
            )
          }
          placeholder="Enter Hourly Rate"
          className="w-full border rounded-md p-3 outline-none focus:border-emerald-600"
        />

        {/* Hours Worked */}

        <label className="block text-lg font-medium mt-6 mb-2">
          Hours Worked
        </label>

        <input
          type="number"
          value={hoursWorked ?? ""}
          onChange={(e) =>
            setHoursWorked(
              e.target.value === ""
                ? undefined
                : Number(e.target.value)
            )
          }
          placeholder="Enter Hours"
          className="w-full border rounded-md p-3 outline-none focus:border-emerald-600"
        />

        {/* Button */}

        <button onClick={next}
          type="submit"
          className="mt-10 w-full bg-[#5E9B8A] hover:bg-[#4E8878] text-white py-3 rounded-full font-medium transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default EmployeeCostCard;