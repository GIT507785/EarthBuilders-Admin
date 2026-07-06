import { ArrowLeft, CheckCheck, Hammer } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"


 


const Notification = () => {

      const [read , setRead] = useState(true)

     const data  =[
          {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
         {
      id: 1,
      name: "Tool Bought",
      desc:"user xyz buy a tool at working site xyz.",
      icon: <Hammer />,
      check:<CheckCheck />
    },
    
     ]

  return (
    <div className="sm:px-10">
    <Link to={'/'} className="flex w-30 gap-2 bg-emerald-700 text-white mt-10 cursor-pointer hover:bg-green-500 px-4 py-1.5 rounded-full items-center justify-center
    "><ArrowLeft size={20}/> Back </Link>

     <div className="border mt-8 overflow-y-scroll p-4 no-scrollbar border-gray-300 rounded w-full min-h-screen">
       
       <div className="flex sm:flex-row flex-col justify-between">
        <h1 className="text-xl font-bold">Notifications </h1>
           <button onClick={()=>setRead(!read)} className="flex   w-40 text-sm 
            gap-2 bg-emerald-700 text-white cursor-pointer hover:bg-emerald-500 
            px-4 py-1.5 rounded-full items-center justify-center
    "><CheckCheck size={20} /> Mark all as read  </button>
       </div>
         
        <div className="p-4">
          {data.map((item , index)=>{
            return(
                <div key={index} className="border p-4 mt-3 flex justify-between border-gray-300 rounded-md">
                  <div className="flex gap-3">
                   <span className="w-15 h-15 rounded-full flex bg-gray-100 text-lime-500 items-center justify-center">
                    {item.icon}</span>
                   <div>
                    <p className="font-medium text-md">{item.name}</p>
                    <p className="tetx-sm text-gray-400">{item.desc}</p>
                   </div>
                 </div> 
                         {
                             read ?
                             <CheckCheck color="#0d6ce7" /> :
                             <span className="mt-4 size-8">{item.check}</span>
                         }                        

                </div>
            )
          })}
        </div> 

     </div>

    </div>
  )
}

export default Notification