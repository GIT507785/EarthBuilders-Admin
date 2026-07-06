import { Plus, Quote } from "lucide-react";
import React, { useState } from "react";

const CreateQuote = () => {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      clientName,
      projectName,
      streetName,
      country,
      province,
      city,
      postalCode,
      totalPrice,
    });
  };

  return (
    <div className="mt-10 flex flex-col">
      <div className="w-full min-h-screen border border-gray-300 rounded-lg px-4 sm:px-6 lg:px-10 py-6">
        <h1 className="text-2xl font-semibold">Quote Creation</h1>

        <form onSubmit={onSubmitHandler} className="mt-6 space-y-6">
          {/* Client Name */}
          <div className="">
            <h1 className="font-medium text-gray-700">Client Name</h1>

            <select
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="mt-2 w-full sm:w-72 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-emerald-600"
            >
              <option value="">Select Client</option>
              <option value="Haseeb">Haseeb</option>
              <option value="Hamza">Hamza</option>
              <option value="Ali">Ali</option>
            </select>
          </div>

          {/* Project Name */}
          <div>
            <h1 className="font-medium text-gray-700">Project Name</h1>

            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter Project Name"
              className="mt-2 w-full sm:w-96 rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-emerald-600"
            />
          </div>

          {/* Site Address */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Site Address
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Street */}
              <div>
                <label className="font-medium text-gray-700">
                  Street Name
                </label>

                <input
                  type="text"
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                  placeholder="Enter Street Name"
                  className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-emerald-600"
                />
              </div>

              {/* Country */}
              <div>
                <label className="font-medium text-gray-700">Country</label>

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-emerald-600"
                >
                  <option value="">Select Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Dubai">Dubai</option>
                </select>
              </div>

              {/* Province */}
              <div>
                <label className="font-medium text-gray-700">Province</label>

                <input
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder="Choose Province"
                  className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-emerald-600"
                />
              </div>

              {/* City */}
              <div>
                <label className="font-medium text-gray-700">City</label>

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-emerald-600"
                >
                  <option value="">Select City</option>
                  <option value="Samundri">Samundri</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Lahore">Lahore</option>
                </select>
              </div>
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <label className="font-medium text-gray-700">Postal Code</label>

            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter Postal Code"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-emerald-600"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Descriptions
            </h2>

            <div className="mt-5 overflow-x-auto rounded-md border border-emerald-700">
              <div className="min-w-[300px] ">
                <div className="flex justify-between
                  bg-emerald-700 px-6 py-3 font-medium text-white">
                  <h1>Task Description</h1>
                  <h1>Task Expenses</h1>
                </div>

                <div className="flex justify-between px-6 items-center ">
                  <div className="text-emerald-700 border-r border-emerald-600 p-2 sm:pr-20 h-10">
                     <h1 className="mt-2">
                        Task Description Here
                     </h1>
                  </div>

                  <h1 className="text-emerald-700">$4.00</h1>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center items-center  sm:justify-start">
              <button
                type="button"
                className="flex mx-auto cursor-pointer  h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white transition hover:bg-emerald-600"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div>
            <h1 className="font-medium text-gray-700">Total Price</h1>

            <input
              type="text"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
              placeholder="Quote a Price"
              className="mt-2 w-full sm:w-96 rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-emerald-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-white transition hover:bg-emerald-600 sm:w-fit"
          >
            <Quote size={18} />
            Create Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuote;