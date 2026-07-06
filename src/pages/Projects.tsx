import { FilterIcon } from "lucide-react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Projects = () => {
  const quotesData = [
    {
      id: 1,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
    {
      id: 2,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
    {
      id: 3,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
    {
      id: 4,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
    {
      id: 5,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
    {
      id: 6,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      InvoiceTotal: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
      client: "Rida Gilani",
      expenses: "$560,00",
    },
  ];

  return (
       <div className="mt-8">
      <div className="border border-gray-300 p-4 w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div className="flex justify-between ">
          <h1 className="text-xl font-medium cursor-pointer">Projects</h1>
          <button className="bg-lime-500 px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <FilterIcon className="size-5"/> Filter</button>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>ID</h1>
            <h1>Due Date</h1>
            <h1>Project Name</h1>
            <h1>Client</h1>
            <h1>Site Address</h1>
             <h1>Invoices Total</h1>
             <h1>Expenses Total</h1>
             <h1>Options</h1>
          </div>
           <div className=" py-1.5 mt-2 text-right">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.id}</h1>
                  <h1>{item.dueDate}</h1>
                  <h1>{item.projectName}</h1>
                  <h1>{item.client}</h1>
                  <h1>{item.siteAddress}</h1>
                  <h1>{item.InvoiceTotal}</h1>
                  <h1>{item.expenses}</h1>

                    <div className="group cursor-pointer relative">
                     <LiaEllipsisVSolid className="size-5"/>
                       <div className="bg-white text-sm absolute 
                        cursor-pointer hidden group-hover:block border w-30 top-7 z-70 -left-25 border-gray-300 rounded-md">
                         <div>
                             <h1 className="border-b border-gray-300 hover:bg-gray-100 px-3 py-2">View Details</h1> 
                         <Link to={'/projectdetails'} className=" py-2  hover:bg-gray-100">Complete project</Link>
                         
                         </div> 
                       </div>
                    </div>
                </div>
              )
            })}
           </div>
      </div>
    </div>
  );
};

export default Projects;