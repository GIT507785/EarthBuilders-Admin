import { FilterIcon } from "lucide-react"
import { LiaEllipsisVSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const Quotes = () => {

   const quotesData =[
    {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
      {id:1, dueDate:'22 Jan, 2027 ' , projectName:'Building 1' , quotedPrice:'$560,000' ,
      siteAddress:'Elvaston Road, Chicago' ,},
   ]

  return (
    <div className="mt-8">
      <div className="border border-gray-300 p-4 w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div className="flex justify-between ">
          <h1 className="text-xl font-medium cursor-pointer">Quotes</h1>
          <button className="bg-lime-500 px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <FilterIcon className="size-5"/> Filter</button>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>ID</h1>
            <h1>Due Date</h1>
            <h1>Project Name</h1>
            <h1>Quoted Price</h1>
            <h1>Site Address</h1>
             <h1>Options</h1>
          </div>
           <div className=" py-1.5 mt-2 text-right">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.id}</h1>
                  <h1>{item.dueDate}</h1>
                  <h1>{item.quotedPrice}</h1>
                  <h1>{item.projectName}</h1>
                  <h1>{item.siteAddress}</h1>
                    <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 z-70 -left-25 border-gray-300 rounded-md">
                         <div>
                             <h1 className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2">Start Project</h1>
                         <Link to='/quotedetails' className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2 ">View Quote </Link>
                         <h2 className="px-3 py-2 hover:bg-gray-100">Delete project</h2>
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

export default Quotes