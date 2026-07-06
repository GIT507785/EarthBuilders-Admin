import { CoinsIcon, X } from "lucide-react"
import React, { useState, type SetStateAction } from "react"

interface props {
    next:()=> void
      setIsClose:React.Dispatch<SetStateAction<boolean>>
}

const AddexpensesModel = ({next , setIsClose}:props) => {

    const [category , setCategory] = useState("")
    const [amount , setAmount] = useState<number | null>()

     const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
       console.log(amount)
       console.log(category)


     }

  return (
    <div className=" top-50 sm:left-120 z-70   relative" >
      <form onSubmit={handleSubmit}  className="border relative border-gray-300 flex flex-col items-center  rounded w-md bg-white p-4">
           <button
          onClick={()=>setIsClose(true)} 
          className="absolute  top-5 cursor-pointer right-5 text-[#4F8B80] hover:text-red-500 transition"
        >
          <X size={22} />
        </button>
        <h1 className="text-xl font-bold" onClick={next}>Add Expenses</h1>
         <div>
                <h1 className="text-xl mt-5 text-gray-700 font-medium">Category</h1>
                 <select value={category } onChange={(e)=>setCategory(e.target.value)} className="px-4 w-80 outline-none mt-2 py-2 rounded-md border
                 border-gray-300">
                    <option value="" disabled className="text-gray-400"> 
                         Choose Expense Type
                     </option>
                      <option value="material">Material Purchase</option>
                      <option value="vendor">Vendor Cost</option>
                     <option value="employee">Employee Cost</option>
                 </select>
                <h1 className="text-xl mt-5 text-gray-700 font-medium">Expenses</h1>
                <input type="text"  value={amount || ""} onChange={(e)=>setAmount(Number(e.target.value))} 
                placeholder="Enter amount"  className="px-4 w-80 outline-none mt-2 py-2 rounded-md border
                 border-gray-300"/>
         </div>
        <button onClick={next} className="bg-emerald-700 w-60 cursor-pointer text-white px-3 py-2 mt-5 rounded-full flex gap-2 items-center justify-center">
           <CoinsIcon size={18}/>  Add Expenses </button>
    </form>
      </div>
  )
}

export default AddexpensesModel