import { UserPenIcon } from "lucide-react";
import { useState } from "react";
import VendorsInvoices from "./VendorsInvoices";
  
 interface VendorData {
    date: string;
    projectName: string;
    site: string;
    client: string;
    service: string;
    expense: string;
 }


const VendorDetails = () => {

     const [showAll  , setShowAll] = useState(false)

    const data:VendorData[] =
    [

        {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
        {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
        {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
        {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
        {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
       {
        date: "2023-08-15",
        projectName: "Highway Construction",
        site: "Selveston Road, Chicago",
        client: "Sara Peters",
        service: "Drywall",
        expense: "$560.00"
    },
    
] 

  return (
   <div className="p-6 bg-white  rounded-xl border border-gray-200 shadow-sm">

  {/* Header */}
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold">Vendor Details</h1>

    <button className="flex items-center gap-2 bg-[#4F8A73] hover:bg-[#3e715d] text-white px-5 py-2 rounded-full">
      <UserPenIcon
       size={18} />
      Edit Vendor
    </button>
  </div>

  {/* Vendor Information */}
  <div className="grid grid-cols-2 mt-14">

    {/* Left */}
    <div className="space-y-5 border-r border-gray-300 pr-12">

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Vendor Name</p>
        <p className="font-medium">Sarah Peters</p>
      </div>

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Company Name</p>
        <p className="font-medium">Good Earth Builders</p>
      </div>

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Service Type</p>
        <p className="font-medium">Drywall</p>
      </div>

    </div>

    {/* Right */}
    <div className="space-y-5 pl-12">

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Contact #</p>
        <p className="font-medium">+092 273 4456</p>
      </div>

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Email Address</p>
        <p className="font-medium">vendor@xyz.com</p>
      </div>

      <div className="grid grid-cols-2">
        <p className="text-gray-500">Working Site</p>
        <p className="font-medium">Highway Building</p>
      </div>

    </div>

  </div>

  {/* Projects Card */}
  <div className="mt-14 border border-gray-200  rounded-xl shadow-sm overflow-y-auto no-scrollbar h-screen">

    <div className="px-8 py-6">
      <h2 className="text-xl font-semibold">
        Vendor's Projects
      </h2>
    </div>

    {/* Table Header */}
    <div className="flex justify-between bg-[#F5FAF4] text-[#4F8A73] font-semibold px-16 py-4">

      <p>Date</p>
      <p>Project Name</p>
      <p>Site</p>
      <p>Client</p>
      <p>Service</p>
      <p>Expense</p>
      <p>Options</p>

    </div>

    {/* Row */}
    <div className="px-6 py-4">

      <div className=" items-center bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
           
         {
       (showAll ? data : data.slice(0, 5)).map((item, index) => (
     <div
      key={index}
      className="flex mt-4 justify-between transition-all duration-1000 items-center bg-white rounded-lg border border-gray-200 p-5 shadow-sm"
    >
      <p>{item.date}</p>
      <p className="w-20">{item.projectName}</p>
      <p className="w-24">{item.site}</p>
      <p>{item.client}</p>
      <p>{item.service}</p>
      <p>{item.expense}</p>

      <button className="text-xl font-bold">⋮</button>
    </div>
  ))
}
            
             <button onClick={() => setShowAll(!showAll)} className="mt-4 flex items-center justify-center mx-auto bg-[#4F8A73] hover:bg-[#3e715d] text-white px-5 py-2 rounded-full">
               {showAll ? "Show Less" : "Show All"}
             </button>
      </div>

        </div>


      </div>
        
        <div className="border border-gray-300 p-6  w-full rounded-md mt-10 overflow-hidden overflow-y-auto no-scrollbar h-screen bg-white/50">
            <h1 className="text-2xl mt-5 font-medium">Invoices</h1>

           <VendorsInvoices/>        
 
        </div>

    </div>


  );
};



export default VendorDetails;