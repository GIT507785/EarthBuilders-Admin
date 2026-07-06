import { Mail, Phone, User, X } from "lucide-react";
import image from "../assets/person2.jpg";
import { useState } from "react";

interface SidebarProps {
  openBar: boolean;
  setOpenBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ openBar, setOpenBar }: SidebarProps) => {
  const [inputData] = useState({
    name: "John Smith",
    email: "johnsmith@gmail.com",
    number: "+92 333 12345432",
  });

  if (!openBar) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50  backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className="absolute  bg-black/40"
        onClick={() => setOpenBar(false)}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full no-scrollbar sm:w-80 md:w-96 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h1 className="text-xl font-bold">My Profile</h1>

          <button
            onClick={() => setOpenBar(false)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Image */}
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-[100%_10%]"
            />

            <h2 className="mt-5 text-2xl font-semibold text-center">
              Ridae Noor Gilani
            </h2>

            <p className="text-gray-500 mt-1">Admin</p>

            <p className="text-gray-400 text-sm text-center mt-3 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Information */}
          <div className="mt-10 space-y-4">
            {/* Name */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center border border-gray-300 rounded-md">
                <User size={20} />
              </div>

              <div className="flex-1 border border-gray-300 rounded-md px-4 py-3">
                <p className="text-gray-500 break-all">
                  {inputData.name}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center border border-gray-300 rounded-md">
                <Mail size={20} />
              </div>

              <div className="flex-1 border border-gray-300 rounded-md px-4 py-3">
                <p className="text-gray-500 break-all">
                  {inputData.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center border border-gray-300 rounded-md">
                <Phone size={20} />
              </div>

              <div className="flex-1 border border-gray-300 rounded-md px-4 py-3">
                <p className="text-gray-500 break-all">
                  {inputData.number}
                </p>
              </div>
            </div>
          </div>

          {/* Optional Button */}
          <button className="w-full mt-10 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;