import { FilterIcon, Handshake } from "lucide-react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Vendors = () => {
  const vendorsData = [
    {
      id: 1,
      vendorName: "Rida Gilani",
      address: "Selveston Road, Chowringhee",
      phoneNumber: "87848648681",
      email: "sahrapeter@gmail.com",
    },
    {
      id: 2,
      vendorName: "Ali Traders",
      address: "Johar Town, Lahore",
      phoneNumber: "03001234567",
      email: "ali@gmail.com",
    },
    {
      id: 3,
      vendorName: "Hamza Suppliers",
      address: "DHA Phase 6",
      phoneNumber: "03111234567",
      email: "hamza@gmail.com",
    },
    {
      id: 4,
      vendorName: "Usman Steel",
      address: "Canal Road",
      phoneNumber: "03221234567",
      email: "usman@gmail.com",
    },
    {
      id: 5,
      vendorName: "Ahmed Builders",
      address: "Model Town",
      phoneNumber: "03331234567",
      email: "ahmed@gmail.com",
    },
    {
      id: 6,
      vendorName: "Haseeb Hardware",
      address: "Samundri",
      phoneNumber: "03441234567",
      email: "haseeb@gmail.com",
    },
  ];

  return (
    <div className="mt-8">
      <div className="min-h-[calc(100vh-120px)] rounded-2xl border border-gray-300 bg-white p-4 sm:p-6 shadow-sm">

        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-2xl font-semibold">Vendors</h1>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/addvendor"
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white hover:bg-emerald-600"
            >
              <Handshake size={18} />
              Add Vendor
            </Link>

            <button className="flex items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-2 text-white hover:bg-lime-600">
              <FilterIcon size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="mt-6 hidden lg:grid grid-cols-[80px_1.5fr_2fr_180px_2fr_80px] rounded-xl bg-lime-100 px-8 py-4 font-semibold text-emerald-700">
          <h1>ID</h1>
          <h1>Vendor Name</h1>
          <h1>Address</h1>
          <h1>Phone Number</h1>
          <h1>Email</h1>
          <h1 className="text-center">Options</h1>
        </div>

        {/* Vendors */}
        <div className="mt-4 space-y-4">
          {vendorsData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white px-5 py-5 shadow-sm sm:px-8 lg:grid lg:grid-cols-[80px_1.5fr_2fr_180px_2fr_80px] lg:items-center"
            >
              {/* Mobile */}
              <div className="space-y-4 lg:hidden">
                <div className="flex justify-between">
                  <span className="font-semibold">ID</span>
                  <span>0{item.id}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Vendor Name</span>
                  <span>{item.vendorName}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold">Address</span>
                  <span className="text-right">{item.address}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Phone Number</span>
                  <span>{item.phoneNumber}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold">Email</span>
                  <span className="text-right break-all">
                    {item.email}
                  </span>
                </div>

                <div className="flex justify-end">
                  <div className="group relative">
                    <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                    <div className="absolute right-0 top-7 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                      <Link
                        to="/vendordetails"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Edit Vendor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden lg:contents">
                <span>0{item.id}</span>

                <span>{item.vendorName}</span>

                <span>{item.address}</span>

                <span>{item.phoneNumber}</span>

                <span>{item.email}</span>

                <div className="relative flex justify-center group">
                  <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                  <div className="absolute right-0 top-8 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-xl group-hover:block">
                    <Link
                      to="/vendordetails"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Edit Vendor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Vendors;