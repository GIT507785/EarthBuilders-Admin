import {
  ChevronDown,
  Mail,
  Pencil,
  PrinterCheck,
  Send,
  Settings,
  StickyNote,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { balanceData } from "./TreesDta";
import TreeNode from "./TreeNode";



const ReportToolbar = () => {
 
     const reportData = [
  {
    accountName: "Cash",
    amount: 5000,
  },
  {
    accountName: "Bank",
    amount: 15000,
  },
  {
    accountName: "Accounts Receivable",
    amount: 8000,
  },
];

  const [shareOpen , setShareOpen] = useState(false)

  
    const [sortBy, setSortBy] = useState('A-Z')
    
    const [sortData , setSortData] = useState(reportData)
       useEffect(()=>{
    
    let data = [...reportData]
    
    switch (sortBy) {
        case "A-Z":
            data.sort((a,b)=> a.accountName.localeCompare(b.accountName));
            break;
            
            case "Z-A":
                data.sort((a,b)=> b.accountName.localeCompare(a.accountName));
                break;
                
                case "Low -> High":
                    data.sort((a,b)=> a.amount - b.amount);
                    break;
                    
                    case "High -> Low":
                        data.sort((a,b)=> b.amount - a.amount);
                        break; 

                        default:
                            break;
                        }
                        
                        setSortData(data)
                    },[sortBy])

         const handlePrint =()=>{
         window.print() 
        }

         const handleShare = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);

    toast.success("Link copied successfully!");
    console.log(window.location.href)
    setShareOpen(false)
  } catch (error) {
    toast.error("Failed to copy link.");
    console.error(error);
  }
};
     
     const handleEmailShare = ()=>{
        const subject = "Balance Sheet Report";
        const body = `please check this report:\n\n${window.location.href}`
             
        window.location.href = 
        `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

     }
          

  return (

    <div className="mt-8   border border-gray-300 rounded-md h-screen overflow-y-auto no-scrollbar w-full">
         <div className="flex justify-between p-2 border-b border-gray-300">

        <div className="p-4 flex gap-3">
             <div className="text-emerald-700 cursor-pointer px-4 py-2   border border-gray-300 rounded-md outline-none">
                <h1>Collapse</h1>
             </div>
           <div className="flex   border border-gray-300 rounded-md outline-none">
             <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="appearance-none text-emerald-700 outline-none px-4 py-2">
                <option className="p-2" value="Sort by">Sort by</option>
                <option  className="p-2" value="A-Z">A - Z</option>
                <option  className="p-2" value="Z-A">Z-A</option>
                <option className="p-2" value="Low -> High">Low {`->`} High</option>
                <option className="p-2" value="High -> Low">High {`->`} Low</option>

             </select>
             <ChevronDown className="mt-2 text-gray-500"/>
           </div>
             <div  className="text-emerald-700 cursor-pointer px-4 py-2  flex gap-2 border border-gray-300 rounded-md outline-none">
                <h1>Add Notes</h1>
                <StickyNote/>
             </div>
             <div className="text-emerald-700 cursor-pointer px-4 py-2  flex gap-2 border border-gray-300 rounded-md outline-none">
                <h1>Edit Titles</h1>
                <Pencil/>
             </div>
        </div>
         <div className="flex gap-2 mt-5">
            <Mail onClick={handleEmailShare} className="w-10 h-10 cursor-pointer bg-emerald-100 text-emerald-800 rounded-full  hover:bg-emerald-200 p-2"/>
            <PrinterCheck onClick={handlePrint}  className="w-10 h-10 cursor-pointer bg-emerald-100 text-emerald-800  hover:bg-emerald-200 rounded-full p-2"/>
            <Send onClick={()=>setShareOpen(true)} className="w-10 h-10 bg-emerald-100 cursor-pointer text-emerald-800  hover:bg-emerald-200 rounded-full p-2"/>

               {shareOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    <div className="w-96 rounded-xl bg-white p-6 shadow-xl">

      <h2 className="text-xl font-bold mb-6">
        Share Report
      </h2>

      <div className="space-y-3">

        <button  onClick={handleShare} className="w-full rounded-lg border p-3 text-left hover:bg-gray-100">
          🔗 Copy Link
        </button>

        <button onClick={handleEmailShare} className="w-full rounded-lg border p-3 text-left hover:bg-gray-100">
          📧 Share via Email
        </button>

        <button className="w-full rounded-lg border p-3 text-left hover:bg-gray-100">
          📄 Export PDF
        </button>

        <button className="w-full rounded-lg border p-3 text-left hover:bg-gray-100">
          📊 Export Excel
        </button>

      </div>

      <button
        onClick={() => setShareOpen(false)}
        className="mt-6 w-full rounded-lg bg-red-500 py-2 text-white"
      >
        Close
      </button>

    </div>

  </div>
)}

            <Settings className="w-10 h-10 bg-emerald-100 cursor-pointer hover:bg-emerald-200 text-emerald-800 rounded-full p-2"/>
         </div>
         </div>

         <div className="flex  relative flex-col mt-3 items-center justify-center border-b pb-4 border-gray-300">
           <h1 className="font-medium mt-3 text-2xl" > Good Earth Builders</h1>
           <h1 className="font-medium mt-3 " >Balance Sheet</h1>
           <h1 className="font-medium mt-3 " >As of {new Date().toLocaleDateString()}</h1>
         </div>

         <div className="fixed right-8 ">
        <h1 className="font-bold text-xl">TOTAL</h1>
         </div>

           <div className="border border-t p-5 border-gray-300 mt-12 h-screen overflow-y-auto no-scrollbar">
            {balanceData.map( node=>
            <TreeNode 
             key={node.id}
             node={node}
            />
            )}
           </div>
 
    </div>
  );
};

export default ReportToolbar;