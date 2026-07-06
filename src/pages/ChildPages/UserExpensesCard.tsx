import { LiaEllipsisVSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const UserExpensesCard = () => {

   const quotesData =[
    {serial:1, category:'Tool Purchase' , site:'selveston road chichago' , expenses:'50' ,
      paidby:'self' , Date:'12/12/2023' ,},
          {serial:1, category:'Tool Purchase' , site:'selveston road chichago' , expenses:'50' ,
      paidby:'self' , Date:'12/12/2023' ,},    {serial:1, category:'Tool Purchase' , site:'selveston road chichago' , expenses:'50' ,
      paidby:'self' , Date:'12/12/2023' ,},    {serial:1, category:'Tool Purchase' , site:'selveston road chichago' , expenses:'50' ,
      paidby:'self' , Date:'12/12/2023' ,},    {serial:1, category:'Tool Purchase' , site:'selveston road chichago' , expenses:'50' ,
      paidby:'self' , Date:'12/12/2023' ,},
    

  
   ]

  return (
    <div className="mt-8">
      <div className="border border-gray-300 p-4   w-full overflow-hidden overflow-y-auto no-scrollbar h-100 bg-white/50">
        <div className="flex justify-between ">
          <h1 className="text-xl font-medium cursor-pointer">User Expenses</h1>
           
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>ID</h1>
            <h1>Category</h1>
            <h1>Site</h1>
            <h1>Expenses</h1>
            <h1>Paid By</h1>
            <h1>Date</h1>
            <h1>Options</h1>
          </div>
           <div className=" py-1.5 mt-2 text-right">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.serial}</h1>
                  <h1>{item.category}</h1>
                  <h1>{item.site}</h1>
                  <h1>{item.expenses}</h1>
                  <h1>{item.paidby}</h1>
                  <h1>{item.Date}</h1>
                    <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 z-70 -left-25 border-gray-300 rounded-md">
                         <div>
                         <Link to='/' className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2 ">User Details </Link>
                         <h2 className="px-3 py-2 hover:bg-gray-100">Delete User</h2>
                         </div>
                       </div>
                    </div>
                </div>
              )
            })}
           </div>
      </div>
    </div>
  )
}

export default UserExpensesCard