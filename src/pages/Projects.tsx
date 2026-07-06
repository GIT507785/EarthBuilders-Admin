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
      expenses: "$560,000",
    },
    {
      id: 2,
      dueDate: "22 Jan, 2027",
      projectName: "Building 2",
      InvoiceTotal: "$480,000",
      siteAddress: "Main Street, Lahore",
      client: "Ali Khan",
      expenses: "$300,000",
    },
    {
      id: 3,
      dueDate: "22 Jan, 2027",
      projectName: "Building 3",
      InvoiceTotal: "$720,000",
      siteAddress: "Johar Town",
      client: "Hamza Ahmed",
      expenses: "$450,000",
    },
    {
      id: 4,
      dueDate: "22 Jan, 2027",
      projectName: "Building 4",
      InvoiceTotal: "$900,000",
      siteAddress: "DHA Phase 6",
      client: "Usman Ali",
      expenses: "$600,000",
    },
    {
      id: 5,
      dueDate: "22 Jan, 2027",
      projectName: "Building 5",
      InvoiceTotal: "$380,000",
      siteAddress: "Canal Road",
      client: "Rida Gilani",
      expenses: "$250,000",
    },
    {
      id: 6,
      dueDate: "22 Jan, 2027",
      projectName: "Building 6",
      InvoiceTotal: "$650,000",
      siteAddress: "Model Town",
      client: "Haseeb",
      expenses: "$520,000",
    },
  ];

  return (
    <div className="mt-8">
      <div className="min-h-screen rounded-lg border border-gray-300 bg-white p-4">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold">Projects</h1>

          <button className="flex items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-2 text-white hover:bg-lime-600">
            <FilterIcon size={18} />
            Filter
          </button>
        </div>

        {/* ================= Desktop Table ================= */}

        <div className="mt-6 hidden overflow-x-auto xl:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-lime-100 text-left text-emerald-700">
                <th className="p-3">ID</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Project</th>
                <th className="p-3">Client</th>
                <th className="p-3">Site Address</th>
                <th className="p-3">Invoices</th>
                <th className="p-3">Expenses</th>
                <th className="p-3 text-center">Options</th>
              </tr>
            </thead>

            <tbody>
              {quotesData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.dueDate}</td>
                  <td className="p-4">{item.projectName}</td>
                  <td className="p-4">{item.client}</td>
                  <td className="p-4">{item.siteAddress}</td>
                  <td className="p-4">{item.InvoiceTotal}</td>
                  <td className="p-4">{item.expenses}</td>

                  <td className="relative p-4 text-center">
                    <div className="group inline-block cursor-pointer">
                      <LiaEllipsisVSolid className="text-xl" />

                      <div className="absolute right-4 top-8 z-20 hidden w-40 rounded-md border border-gray-300 bg-white shadow-lg group-hover:block">
                        <Link
                          to="/projectdetails"
                          className="block border-b px-4 py-2 hover:bg-gray-100"
                        >
                          View Details
                        </Link>

                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                          Complete Project
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Mobile / Tablet Cards ================= */}

        <div className="mt-6 space-y-4 xl:hidden">
          {quotesData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    {item.projectName}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {item.client}
                  </p>
                </div>

                <div className="group relative">
                  <LiaEllipsisVSolid className="cursor-pointer text-xl" />

                  <div className="absolute right-0 top-7 z-20 hidden w-40 rounded-md border border-gray-300 bg-white shadow-lg group-hover:block">
                    <Link
                      to="/projectdetails"
                      className="block border-b px-4 py-2 hover:bg-gray-100"
                    >
                      View Details
                    </Link>

                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Complete Project
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">ID</span>
                  <span>{item.id}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Due Date</span>
                  <span>{item.dueDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Site Address
                  </span>
                  <span className="text-right">{item.siteAddress}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Invoice Total
                  </span>
                  <span>{item.InvoiceTotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Expenses
                  </span>
                  <span>{item.expenses}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;