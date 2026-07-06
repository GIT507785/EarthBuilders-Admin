import type React from "react";

 
 interface dashboardProps {
     name:string;
     icon:React.ReactNode
     number:string;
     time?:string;
     button:string
     dues?:string
 }



 const DashboardCard = ({name , number , icon , time , button , dues}:dashboardProps) => {
   return (
    <div className="rounded-md border border-gray-300 bg-white shadow-md p-4 min-h-40 flex flex-col justify-between">

  {/* Top */}
  <div className="flex items-start justify-between">

    <div>
      <div className="flex items-center gap-3">

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lime-500">
          {icon}
        </span>

        <p className="font-medium text-sm sm:text-base">
          {name}
        </p>

      </div>

      {time && (
        <p className="mt-2 text-sm font-semibold text-gray-600">
          {time}
        </p>
      )}

      {dues && (
        <p className="mt-2 text-sm font-semibold text-gray-600">
          {dues}
        </p>
      )}
    </div>

    <p className="text-xl sm:text-2xl font-bold text-lime-500">
      {number}
    </p>

  </div>

  {/* Bottom Button */}
  {button && (
    <button className="mt-5 w-full sm:w-fit rounded-md bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 transition cursor-pointer">
      {button}
    </button>
  )}

</div>
   )
 }
 
 export default DashboardCard