import { Coins } from "lucide-react"
import { useState } from "react"
import { LiaEllipsisVSolid } from "react-icons/lia"
import { Link } from "react-router-dom"
import AddexpensesModel from "./AddexpensesModel"
import MaterialPurchaseCard from "./MaterialPurchaseCard"
import VendorCostCard from "./VendorCostCard"
import EmployeeCostCard from "./EmployeeCostCard"
import CompleteProjectCard from "./CompleteProjectCard"

const Quotes = () => {

   const quotesData =[
    {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
       {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
       {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
       {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
       {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
       {serial:1, Category:'Tool Purchase ' , Refrence:'Ali khan' , Expense:'$560,000' ,
      Date:'22Jan, 2026' ,},
    
   ]

   const [step , setstep] = useState(1)
   const [open , setOpen] = useState(false)
   const [isClose , setIsClose] = useState(false)
   
   const onGenerateInvoice =()=>{

   }


  return (
    <div className="mt-8 ">
      <div className="border border-gray-300 p-4 w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium cursor-pointer"> Expenses Tracker</h1>
          <button onClick={()=>{setstep(1) , setOpen(true)}} className="px-4 py-2 border cursor-pointer border-emerald-700 hover:bg-emerald-50 rounded-full text-emerald-800 flex gap-3 items-center justify-center
          "> <Coins size={18}/> Add an Expenses</button>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>Serial#</h1>
            <h1>Category</h1>
            <h1>Expenses</h1>
            <h1>Refrence</h1>
            <h1>Date</h1>
            <h1>options</h1>
          </div>
           <div className=" py-1.5 mt-2">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.serial}</h1>
                  <h1>{item.Category}</h1>
                  <h1>{item.Expense}</h1>
                  <h1>{item.Refrence}</h1>
                  <h1>{item.Date}</h1>  

              <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 z-70
                         -left-25 border-gray-300 rounded-md">
                         <div>
                             <h1 className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2">Start Project</h1>
                         <Link to='/projectsummary' className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2 ">View Project </Link>
                         <h2 className="px-3 py-2 hover:bg-gray-100">Delete project</h2>
                         </div>
                       </div>
                    </div>
                </div>
              )
            })}
           </div>
              {open && (
                 
                  !isClose &&  

                <div  onClick={()=>setOpen(false)} className="top-0  left-0 right-0 bottom-0 w-full h-full absolute fixed  backdrop-blur-2xl">
                   
                     <div onClick={(e)=>e.stopPropagation()}>

                   {step === 1 &&( 
                     <AddexpensesModel
                     setIsClose={setIsClose}
                     next={()=>setstep(2)}
                     />
                    )} 

                    </div> 
                    <div onClick={(e)=>e.stopPropagation()}>

                   {step === 2 && (
                     <MaterialPurchaseCard
                     setIsClose={setIsClose}
                     next={()=>setstep(3)}
                     />
                    )} 
                    </div> 
                  
                   <div onClick={(e)=>e.stopPropagation()}>
                     {step === 3 && (
                      <VendorCostCard 
                       setIsClose={setIsClose}
                       next={()=>setstep(4)}
                      />
                     )}
                  
                   </div>

                   <div onClick={(e)=>e.stopPropagation()}>
                     {step === 4 && (
                      <EmployeeCostCard
                      setIsClose={setIsClose}
                       next={()=>setstep(5)}
                      />
                     )}
                  
                   </div>

                    <div onClick={(e)=>e.stopPropagation()}>
                     {step === 5 && (
                      <CompleteProjectCard
                       setIsClose={setIsClose}
                       onGenerateInvoice={onGenerateInvoice}

                      />
                     )}
                  
                   </div>

            </div>
                  )
                }
      </div>
    </div>
  )
}

export default Quotes