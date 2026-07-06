import { Download } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { useMemo } from "react";
import ExpensesTrackerCard from "../../Components/ExpensesTrackerCard";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const centerTextPlugin = {
  id: "centerText",
  afterDraw(chart: any) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);

    if (!meta.data.length) return;

    const x = meta.data[0].x;
    const y = meta.data[0].y;

    ctx.save();
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "#111827";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("40 Hours", x, y);
    ctx.restore();
  },
};

const ProjectDetails = () => {
  const expenseData = useMemo(
    () => ({
      labels: [
        "Material Purchases",
        "Vendor Cost",
        "Employee Cost",
      ],
      datasets: [
        {
          data: [57700, 20000, 10000],
          backgroundColor: [
            "#5E8F7A",
            "#97CB5C",
            "#ECEEF3",
          ],
          borderWidth: 0,
          hoverOffset: 5,
          cutout: "55%",
        },
      ],
    }),
    []
  );

  const expenseOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right" as const,
          labels: {
            usePointStyle: true,
            pointStyle: "circle" as const,
            padding: 18,
          },
        },
      },
    }),
    []
  );

  const timeData = useMemo(
    () => ({
      datasets: [
        {
          data: [70, 45],
          backgroundColor: ["#97CB5C", "#ECEEF3"],
          borderWidth: 0,
          borderRadius: 2,
          cutout: "80%",
        },
      ],
    }),
    []
  );

  const timeOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
    }),
    []
  );
 
  

  return (
    <div className="w-full h-screen overflow-y-auto p-5 rounded-lg border border-gray-200 no-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Project Name</h1>

          <p className="mt-2 text-gray-600">
            Working Site :
            <span className="text-gray-500 ml-1">
              Selvston Road, Chicago
            </span>
          </p>

          <p className="text-gray-600 mt-1">
            Project Deadline :
            <span className="ml-1">
              22 Jan, 2025
            </span>

            <span className="text-red-500 ml-2">
              (Due in 3 Days)
            </span>
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white hover:bg-emerald-600">
          <Download size={18} />
          Generate Invoice
        </button>
      </div>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Expense Chart */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h2 className="mb-5 text-lg font-semibold">
            Expenses
          </h2>

          <div className="h-[320px]">
            <Doughnut
              data={expenseData}
              options={expenseOptions}
            />
          </div>
        </div>

        {/* Time Chart */}
        <div className="rounded-xl border border-gray-200 p-5">
          <h2 className="mb-5 text-lg font-semibold">
            Time Spent
          </h2>

          <div className="mx-auto h-[320px] w-[320px]">
            <Doughnut
              data={timeData}
              options={timeOptions}
              plugins={[centerTextPlugin]}
            />
          </div>
        </div>
      </div>

      {/* Expense Table */}
      <div className="mt-8">
        <ExpensesTrackerCard />
      </div>
    </div>
  );
};

export default ProjectDetails;