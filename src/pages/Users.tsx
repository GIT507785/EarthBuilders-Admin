import { FilterIcon, User2 } from "lucide-react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Users = () => {
  const usersData = [
    {
      id: 1,
      role: "Manager",
      userName: "Rida Gilani",
      hourlyCharges: "$50",
      hoursWorked: "100",
    },
    {
      id: 2,
      role: "Supervisor",
      userName: "Ali Khan",
      hourlyCharges: "$45",
      hoursWorked: "95",
    },
    {
      id: 3,
      role: "Electrician",
      userName: "Hamza",
      hourlyCharges: "$35",
      hoursWorked: "120",
    },
    {
      id: 4,
      role: "Labour",
      userName: "Haseeb",
      hourlyCharges: "$25",
      hoursWorked: "150",
    },
    {
      id: 5,
      role: "Manager",
      userName: "Ahmed",
      hourlyCharges: "$60",
      hoursWorked: "90",
    },
    {
      id: 6,
      role: "Architect",
      userName: "Usman",
      hourlyCharges: "$80",
      hoursWorked: "110",
    },
  ];

  return (
    <div className="mt-8">
      <div className="min-h-[calc(100vh-120px)] rounded-2xl border border-gray-300 bg-white p-4 sm:p-6 shadow-sm">

        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/addemployee"
              className="flex items-center justify-center sm:text-sm text-xs gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white hover:bg-emerald-600"
            >
              <User2 size={18} />
              Add Employee
            </Link>

            <button className="flex items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-2 text-white hover:bg-lime-600">
              <FilterIcon size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="mt-6 hidden lg:grid grid-cols-[80px_1.6fr_1.2fr_160px_160px_80px] rounded-xl bg-lime-100 px-8 py-4 font-semibold text-emerald-700">
          <h1>ID</h1>
          <h1>User Name</h1>
          <h1>Role</h1>
          <h1>Hourly Charges</h1>
          <h1>Hours Worked</h1>
          <h1 className="text-center">Options</h1>
        </div>

        {/* Users */}
        <div className="mt-4 space-y-4">
          {usersData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white px-5 py-5 shadow-sm sm:px-8 lg:grid lg:grid-cols-[80px_1.6fr_1.2fr_160px_160px_80px] lg:items-center"
            >
              {/* Mobile */}
              <div className="space-y-4 lg:hidden">
                <div className="flex justify-between">
                  <span className="font-semibold">ID</span>
                  <span>{item.id}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">User Name</span>
                  <span>{item.userName}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Role</span>
                  <span>{item.role}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Hourly Charges</span>
                  <span>{item.hourlyCharges}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Hours Worked</span>
                  <span>{item.hoursWorked}</span>
                </div>

                <div className="flex justify-end">
                  <div className="group relative">
                    <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                    <div className="absolute right-0 top-7 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                      <Link
                        to="/userdetails"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        User Details
                      </Link>

                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden lg:contents">
                <span>{item.id}</span>

                <span>{item.userName}</span>

                <span>{item.role}</span>

                <span>{item.hourlyCharges}</span>

                <span>{item.hoursWorked}</span>

                <div className="relative flex justify-center group">
                  <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                  <div className="absolute right-0 top-8 hidden w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-xl group-hover:block">
                    <Link
                      to="/userdetails"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      User Details
                    </Link>

                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Delete User
                    </button>
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

export default Users;