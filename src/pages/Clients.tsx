import { FilterIcon, Handshake } from "lucide-react"
import { LiaEllipsisVSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const Clients = () => {

   const quotesData =[
    {id:1, address:'Selveston road, chowringhee' , clientName:'Rida Gilani' , phonumber:87848648681 , 
      email:'sahrapeter@gmail.com'},
      {id:1, address:'Selveston road, chowringhee' , clientName:'Rida Gilani' , phonumber:87848648681 , 
      email:'sahrapeter@gmail.com'},
      {id:1, address:'Selveston road, chowringhee' , clientName:'Rida Gilani' , phonumber:87848648681 , 
      email:'sahrapeter@gmail.com'},
      {id:1, address:'Selveston road, chowringhee' , clientName:'Rida Gilani' , phonumber:87848648681 , 
      email:'sahrapeter@gmail.com'},
      {id:1, address:'Selveston road, chowringhee' , clientName:'Rida Gilani' , phonumber:87848648681 , 
      email:'sahrapeter@gmail.com'},
    
   ]

  return (
    <div className="mt-8">
      <div className="border border-gray-300 p-4  w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div className="flex justify-between ">
          <h1 className="text-xl font-medium cursor-pointer">Clients</h1>
           <div className="flex gap-2">
            <Link to={'/addclient'} className="bg-emerald-800  px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <Handshake className="size-5"/> Add Client</Link>
          <button className="bg-lime-500 px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <FilterIcon className="size-5"/> Filter</button>
          </div>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>ID</h1>
            <h1>Client Name</h1>
            <h1>Address</h1>
            <h1>Phone Number</h1>
            <h1>Email</h1>
             <h1>Options</h1>
          </div>
           <div className=" py-1.5 mt-2 text-right">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>0{item.id}.</h1>
                  <h1>{item.clientName}</h1>
                  <h1>{item.address}</h1>
                  <h1>{item.phonumber}</h1>
                  <h1>{item.email}</h1>
                    <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 
                         z-70 -left-25 border-gray-300 rounded-md">
                         <div className="flex items-center justify-center">
                         <h2 className="px-3 py-2 hover:bg-gray-100">Edit Client</h2>
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

export default Clients