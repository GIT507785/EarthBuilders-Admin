import { FilterIcon } from "lucide-react";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Quotes = () => {
  const quotesData = [
    {
      id: 1,
      dueDate: "22 Jan, 2027",
      projectName: "Building 1",
      quotedPrice: "$560,000",
      siteAddress: "Elvaston Road, Chicago",
    },
    {
      id: 2,
      dueDate: "22 Jan, 2027",
      projectName: "Building 2",
      quotedPrice: "$450,000",
      siteAddress: "Main Street, Lahore",
    },
    {
      id: 3,
      dueDate: "22 Jan, 2027",
      projectName: "Building 3",
      quotedPrice: "$300,000",
      siteAddress: "Johar Town",
    },
    {
      id: 4,
      dueDate: "22 Jan, 2027",
      projectName: "Building 4",
      quotedPrice: "$800,000",
      siteAddress: "DHA Phase 6",
    },
    {
      id: 5,
      dueDate: "22 Jan, 2027",
      projectName: "Building 5",
      quotedPrice: "$600,000",
      siteAddress: "Canal Road",
    },
  ];

  return (
    <div className="mt-8">
      <div className="min-h-screen rounded-lg border border-gray-300 bg-white p-4">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold">Quotes</h1>

          <button className="flex items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-2 text-white hover:bg-lime-600">
            <FilterIcon size={18} />
            Filter
          </button>
        </div>

        {/* ================= Desktop Table ================= */}

        <div className="mt-6 hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-lime-100 text-left text-emerald-700">
                <th className="p-3">ID</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Project Name</th>
                <th className="p-3">Quoted Price</th>
                <th className="p-3">Site Address</th>
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
                  <td className="p-4">{item.quotedPrice}</td>
                  <td className="p-4">{item.siteAddress}</td>

                  <td className="relative p-4 text-center">
                    <div className="group inline-block cursor-pointer">
                      <LiaEllipsisVSolid className="text-xl" />

                      <div className="absolute right-5 top-10 z-20 hidden w-40 rounded-md border border-gray-300 bg-white shadow-lg group-hover:block">
                        <h1 className="cursor-pointer border-b px-4 py-2 hover:bg-gray-100">
                          Start Project
                        </h1>

                        <Link
                          to="/quotedetails"
                          className="block border-b px-4 py-2 hover:bg-gray-100"
                        >
                          View Quote
                        </Link>

                        <h1 className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                          Delete Project
                        </h1>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Mobile & Tablet Cards ================= */}

        <div className="mt-6 space-y-4 lg:hidden">
          {quotesData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {item.projectName}
                </h2>

                <div className="group relative cursor-pointer">
                  <LiaEllipsisVSolid className="text-xl" />

                  <div className="absolute right-0 top-7 z-20 hidden w-40 rounded-md border border-gray-300 bg-white shadow-lg group-hover:block">
                    <h1 className="cursor-pointer border-b px-4 py-2 hover:bg-gray-100">
                      Start Project
                    </h1>

                    <Link
                      to="/quotedetails"
                      className="block border-b px-4 py-2 hover:bg-gray-100"
                    >
                      View Quote
                    </Link>

                    <h1 className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                      Delete Project
                    </h1>
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
                    Quoted Price
                  </span>
                  <span>{item.quotedPrice}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="font-medium text-gray-600">
                    Site Address
                  </span>

                  <span className="text-right">{item.siteAddress}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Quotes;