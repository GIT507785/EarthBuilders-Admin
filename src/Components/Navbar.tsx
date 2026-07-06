import { Menu, Bell, Search, Settings } from "lucide-react";
import image from "../assets/person2.jpg";
import type React from "react";
import Profile from "./Profile";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
  }
 


const Navbar = ({ setIsOpen, setOpenNotification, search, setSearch }: NavbarProps & { search: string; setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
  const [openBar , setOpenBar] = useState(false)

  return (
    <div className="flex justify-between items-center px-4 py-3">

      {/* Mobile Menu */}
      <Menu
        className="lg:hidden cursor-pointer -ml-8 "
        size={28}
        onClick={() => setIsOpen(true)} 
      />

      {/* Search */}
      <div className="hidden sm:flex items-center border
       border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="outline-none"
        />
        <Search className="text-gray-400" />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        <Link to={'/notifications'} className="w-10 h-10 
         bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer">
          <Bell className="text-lime-500" 
          onClick={()=>setOpenNotification(true)}
          />
         
        </Link>

        <div className="hidden sm:flex w-10 h-10 bg-white rounded-full shadow-md items-center justify-center cursor-pointer">
          <Settings className="text-lime-500" />
        </div>

        <img
          src={image}
          onClick={()=>setOpenBar(!openBar)}
          className="w-10 h-10 rounded-full  cursor-pointer object-cover"
          alt=""
        />
         {openBar &&           
          <Profile openBar={openBar} setOpenBar={setOpenBar}/>
         }


      </div>

    </div>
  );
};

export default Navbar;