import {
  Hammer,
  BadgeDollarSign,
  Receipt,
  Wallet,
  UserRound,
} from "lucide-react";
import DashboardCard from "../Components/DashboardCard";
import BarChart from "../Components/BarChart";
import { LiaEllipsisVSolid } from "react-icons/lia";

 


const Dashboard = () => {


  // Dashboard data
  const data = [

    {
      id: 1,
      name: "Projects in Progress",
      number: "900",
      icon: <Hammer />,
      button: "View Projects",
    },

    {
      id: 2,
      name: "Pending Quotes",
      number: "900",
      icon: <Receipt />,
      button: "View Quotes",
    },

    {
      id: 3,
      name: "Total Expenses",
      number: "$561,000",
      icon: <BadgeDollarSign />,
      time: "+50 this week",
      button: "Track Expense",
    },

    {
      id: 4,
      name: "Invoices Generated",
      number: "50",
      icon: <Wallet />,
      dues: "2 Payments Due",
      button: "View All Invoices",
    },

    {
      id: 5,
      name: "Active Employees",
      number: "11",
      icon: <UserRound />,
      button: "Manage Employees",
    },
  ];


  
  
  const ExpesesData = [
    {id:1 , name:'Tool Bought' , icon:<Hammer/> , price:'4'},
    {id:2 , name:'Vendor Fee' , icon:<Wallet/> , price:'6'},
    {id:3 , name:'Employee Fee' , icon:<UserRound/> , price:'5'},
     {id:5 , name:'Tool Bought' , icon:<Hammer/> , price:'4'},
    {id:6 , name:'Vendor Fee' , icon:<Wallet/> , price:'6'},
    {id:7 , name:'Employee Fee' , icon:<UserRound/> , price:'5'},
    {id:7 , name:'Employee Fee' , icon:<UserRound/> , price:'5'},
    {id:7 , name:'Employee Fee' , icon:<UserRound/> , price:'5'},
    {id:7 , name:'Employee Fee' , icon:<UserRound/> , price:'5'},


   ]
   
  


   
   const projects = data.find((item)=> item.id === 1)
   const  quotes = data.find((item)=> item.id === 2)
   const  expenses = data.find((item)=> item.id === 3)
   const invoices = data.find((item)=> item.id === 4)
   const employees = data.find((item)=> item.id === 5)

  return (
  
    <div className="flex flex-col mt-5 xl:flex-row gap-6">

  {/* Left Section */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">

    {/* Cards */}
    <div className="lg:col-span-4 space-y-6">
      {projects && <DashboardCard {...projects} />}
      {quotes && <DashboardCard {...quotes} />}
    </div>

    {/* Bar Chart */}
    <div className="lg:col-span-8 border border-gray-300 bg-white rounded-md p-4">
      <BarChart />
    </div>

    {/* Expenses Card */}
    <div className="lg:col-span-12">
      {expenses && <DashboardCard {...expenses} />}
    </div>

    {/* Invoices */}
    <div className="lg:col-span-6">
      {invoices && <DashboardCard {...invoices} />}
    </div>

    {/* Employees */}
    <div className="lg:col-span-6">
      {employees && <DashboardCard {...employees} />}
    </div>

  </div>

  {/* Right Sidebar */}
  <div className="w-full xl:w-70 border border-gray-300 rounded-md p-4 bg-white">

    <div className="flex justify-between items-center">
      <h1 className="font-medium">Expenses</h1>
      <LiaEllipsisVSolid
        size={26}
        className="cursor-pointer"
      />
    </div>

    <div className="mt-4 max-h-[600px] overflow-y-auto no-scrollbar space-y-3">

      {ExpesesData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md p-4"
        >
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-lime-500">
                {item.icon}
              </div>

              <h1 className="font-medium">{item.name}</h1>

            </div>

            <p>{item.price}</p>

          </div>
        </div>
      ))}

    </div>

  </div>

</div>

  );
};

export default Dashboard;