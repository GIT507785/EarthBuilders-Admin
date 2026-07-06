import { ReceiptIcon } from "lucide-react";
import { useState } from "react"

interface PayrollRow {
 id: number;
 title: string;
 qty: string;
 rate: string;
 current: string;
 ytdAmount: string;
 earned: string;
 ytdUsed: string;
 sickVacation: string;
}



const EmployeePayRolls = () => {


const [earnings, setEarnings] = useState<PayrollRow[]>([
  {
    id: 1,
    title: "Straight Time",
    qty: "",
    rate: "",
    current: "",
    ytdAmount: "",
    earned: "",
    ytdUsed: "",
    sickVacation: "",
  },
  {
    id: 2,
    title: "Material",
    qty: "",
    rate: "",
    current: "",
    ytdAmount: "",
    earned: "",
    ytdUsed: "",
    sickVacation: "",
  },
  {
    id: 3,
    title: "Travelling Allowance",
    qty: "",
    rate: "",
    current: "",
    ytdAmount: "",
    earned: "",
    ytdUsed: "",
    sickVacation: "",
  },
  {
    id: 4,
    title: "Gas",
    qty: "",
    rate: "",
    current: "",
    ytdAmount: "",
    earned: "",
    ytdUsed: "",
    sickVacation: "",
  },
  {
    id: 5,
    title: "Vacpay Paid Out",
    qty: "",
    rate: "",
    current: "",
    ytdAmount: "",
    earned: "",
    ytdUsed: "",
    sickVacation: "",
  },
]);


  const handleChange = (  index: number,
  field: keyof PayrollRow,
  value: string) =>{
  const updated = [...earnings] 

   updated[index] ={
    ...updated[index],
    [field]:value,
   };

   setEarnings(updated)

  }

  return (
    <div className="mt-10">
        <div className="p-5 border border-gray-300 rounded-md h-screen overflow-y-auto no-scrollbar
        w-full shadow-sm
        ">
          <h1 className="mt-5 font-medium text-xl">Employee Payroll</h1>
         
          <h1 className="mt-9 font-medium ">Employee Name</h1>
         <input
         type="text"
         placeholder="Auto Generated"
         readOnly
         className="border border-gray-300 outline-none px-4 py-2 
         rounded-md w-full mt-2 sm:w-80"
         />
      
         <div className="flex gap-10 sm:flex-row flex-col">
             <div>
                 <h1 className="mt-9 font-medium ">Pay Period</h1>
               <input
               type="text"
               placeholder="Auto Generated"
               readOnly
                className="border border-gray-300 outline-none px-4 py-2 
                rounded-md w-full mt-2 sm:w-80"
               />
             </div>
             
             <div>
                 <h1 className="mt-9 font-medium ">Expenses*Hours Worked</h1>
               <input
               type="text"
               placeholder="Auto Generated"
               readOnly
                className="border border-gray-300 outline-none px-4 py-2 
                rounded-md w-full mt-2 sm:w-80"
               />
             </div>
         </div>


                   <div className="flex gap-10 sm:flex-row flex-col">
             <div>
                 <h1 className="mt-9 font-medium ">Employee Occuption</h1>
               <input
               type="text"
               placeholder="Auto Generated"
               readOnly
                className="border border-gray-300 outline-none px-4 py-2 
                rounded-md w-full mt-2 sm:w-80"
               />
             </div>
             
             <div>
                 <h1 className="mt-9 font-medium ">Employee Type</h1>
               <input
               type="text"
               placeholder="Auto Generated"
               readOnly
                className="border border-gray-300 outline-none px-4 py-2 
                rounded-md w-full mt-2 sm:w-80"
               />
             </div>
         </div>

            <div className="mt-10 ">
                <h1 className="text-xl font-medium mt-5">Earnings</h1>
                
                <table className="w-full mt-5 no-scrollar table-fixed border border-green-600 border-collapse" >
                    <thead>
                        <tr className="bg-emerald-600  text-white">
                            <th className="p-2">sr #</th>
                            <th className="p-2">Earnings & Hours</th>
                            <th className="p-2">QTY</th>
                             <th className="p-2">Rate</th>
                            <th className="p-2">Current</th>
                            <th className="p-2">YTD Amount</th>
                            <th className="p-2">Earned</th>
                            <th className="p-2">YTD Used</th>
                            <th className="p-2">Sick Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {earnings.map((item , index)=>{
                            return(
                               <tr>
                                <td className="border p-2 border-emerald-700">{item.id}</td>
                                <td className="border p-2 border-emerald-700">{item.title}</td>
                                <td className="border p-2 border-emerald-700">
                                    <input  className="outline-none"
                                     value={item.qty} onChange={(e)=>handleChange(index ,'qty', e.target.value)} />
                                </td>
                                <td className="border p-2 border-emerald-700">
                                    <input className="outline-none"
                                    value={item.rate}
                                        onChange={(e)=>handleChange(index,"rate",e.target.value)}
                                    />
                                </td>
                                <td className="border p-2 border-emerald-700">
                                    <input className="outline-none"
                               value={item.current}
                               onChange={(e)=>handleChange(index,"current",e.target.value)}
                                />
                                </td>
                                <td className="border p-2 border-emerald-700"> 
                                  <input className="outline-none"
                                    value={item.ytdAmount}
                                    onChange={(e)=>handleChange(index,"ytdAmount",e.target.value)}
                                    />
                                </td>
                                <td className="border p-2 border-emerald-700">
                                    <input className="outline-none"
                                   value={item.earned}
                                   onChange={(e)=>handleChange(index,"earned",e.target.value)}
                                   />
                                </td>
                                  <td className="border p-2 border-emerald-700">
                                  <input className="outline-none"
                                  value={item.ytdUsed}
                                  onChange={(e)=>handleChange(index,"ytdUsed",e.target.value)}
                                  />
                                  </td>
                                  <td className="border p-2 border-emerald-700">
                                    <input className="outline-none"
                                   value={item.sickVacation}
                                   onChange={(e)=>handleChange(index,"sickVacation",e.target.value)}
                                   />
                                  </td>
                               </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
               
               <button className="mt-5 mx-auto gap-3 cursor-pointer hover:bg-emerald-600  bg-emerald-700 text-white flex items-center justify-center
               px-4  py-2 rounded-full"> <ReceiptIcon/> Generate Payroll</button>

        </div>
    </div>
  )
}

export default EmployeePayRolls