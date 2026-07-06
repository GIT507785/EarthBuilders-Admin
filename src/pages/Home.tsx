import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import { useState } from "react";
import MobileSidebar from "../Components/MobileSidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [search, setSearch] = useState("");
  return (
    <div className="flex min-h-screen">
       <Sidebar
         />
         <MobileSidebar
         isOpen={isOpen}
        setIsOpen={setIsOpen}
         />
        <main className="flex-1  bg-gray-50 p-6">
            <Navbar
             search={search}
             setSearch={setSearch}
             setOpenNotification={()=>{}}
             setIsOpen={setIsOpen}
            />
          <Outlet context={{ search, setSearch }} />
        </main>
    </div>
  )
}

export default Home