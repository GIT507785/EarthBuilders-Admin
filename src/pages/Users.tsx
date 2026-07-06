import { FilterIcon, User2 } from "lucide-react"
import { LiaEllipsisVSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const Users = () => {

   const quotesData =[
    {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},
       {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},
       {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},
       {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},
       {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},
       {id:1, Role:'Manager' , userName:'Rida Gilani' , HourlyCharges:'50' ,
      hoursWorked:'100' ,},

  
   ]

  return (
    <div className="mt-8">
      <div className="border border-gray-300 p-4  w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div className="flex justify-between ">
          <h1 className="text-xl font-medium cursor-pointer">Quotes</h1>
           <div className="flex gap-2">
            <Link to={'/addemployee'} className="bg-emerald-800  px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <User2 className="size-5"/> Add Employee</Link>
          <button className="bg-lime-500 px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <FilterIcon className="size-5"/> Filter</button>
          </div>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>ID</h1>
            <h1>User Name</h1>
            <h1>Role</h1>
            <h1>Hourly Charges</h1>
             <h1>Hours Worked</h1>
             <h1>Options</h1>
          </div>
           <div className=" py-1.5 mt-2 text-right">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.id}</h1>
                  <h1>{item.userName}</h1>
                  <h1>{item.Role}</h1>
                  <h1>{item.HourlyCharges}</h1>
                  <h1>{item.hoursWorked}</h1>
                    <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 z-70 -left-25 border-gray-300 rounded-md">
                         <div>
                         <Link to='/userdetails' className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2 ">User Details </Link>
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

export default Users