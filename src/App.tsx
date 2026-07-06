import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Quotes from "./pages/Quotes"
import BalanceSheet from "./pages/BalanceSheet"
import Home from "./pages/Home"
import Expenses from "./pages/Expenses"
import Payrolls from "./pages/Payrolls"
import Users from "./pages/Users"
import Clients from "./pages/Clients"
import Vendors from "./pages/Vendors"
import Invoices from "./pages/Invoices"
import Notification from "./Components/Notification"
import CreateQuote from "./pages/CreateQuote"
import QuoteDetails from "./pages/QuoteDetails"
import ProjectDetails from "./pages/ChildPages/ProjectDetails"
import ProjectSummary from './Components/ProjectSummary'
import AddEmployee from "./pages/ChildPages/AddEmployee"
import UserDetails from "./pages/ChildPages/UserDetails"
import ExpensesDetails from "./pages/ChildPages/ExpensesDetails"
import AddClients from "./pages/ChildPages/AddClients"
import AddVendor from "./pages/ChildPages/AddVendor"
import VendorDetails from "./pages/ChildPages/VendorDetails"
import { ToastContainer } from "react-toastify";
import { Children } from "react"
import EmployeePayRolls from "./pages/ChildPages/EmployeePayRolls"

const App = () => {
     

   const router = createBrowserRouter([
     {
       path:"/",
       Component:Home,
       children:[
         {
           index:true,
           Component:Dashboard
          },
          {
            path:"projects",
            Component:Projects
          },
          {
            path:"quotes",
            Component:Quotes
          },
          {
            path:"expenses",
            Component:Expenses
          },
          {
            path:'payrolls',
          Component:Payrolls,
            },
            {
              path:"employeepayrolls",
              Component:EmployeePayRolls,                
            },
        {
          path:"users",
          Component:Users
        },
        {
          path:"clients",
          Component:Clients
        },
        {
          path:'vendors',
          Component:Vendors
        },
        {
          path:'invoices',
          Component: Invoices  
        },
        {
          path:'balancesheet',
          Component:BalanceSheet
        },
        {
          path:'notifications',
          Component:Notification
        },
        {
          path:'createquote',
          Component:CreateQuote
        },
        {
          path:'quotedetails',
          Component:QuoteDetails
        },
        {
          path:'projectdetails',
          Component:ProjectDetails
        },
        {
          path:'projectsummary',
          Component:ProjectSummary
        },
        {
          path:'addemployee',
          Component:AddEmployee
        },
        {
          path:"userdetails",
          Component:UserDetails
        },
        {
          path:"expensesdetails",
          Component:ExpensesDetails
        },
        {
          path:"addclient",
          Component:AddClients
        },
        {
          path:"addvendor",
          Component:AddVendor
        },
         {
           path:"vendordetails",
           Component:VendorDetails
          }
        ]
      }
   ])

  return (
    <div>
   <ToastContainer/>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App