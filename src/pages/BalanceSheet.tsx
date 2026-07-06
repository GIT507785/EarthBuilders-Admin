import {Link} from 'react-router-dom'
import { ArrowLeft, CalendarDays, ChevronDown, PencilIcon } from "lucide-react"
import { GrFavorite } from 'react-icons/gr'
import { useEffect, useState } from 'react'
import DisplayColumns from '../Components/Balancesheet/DisplayColumns'
import ShowRows from '../Components/Balancesheet/ShowRows'
import ComparePeriod from '../Components/Balancesheet/ComparePeriod'
import AccountingMethod from '../Components/Balancesheet/AccountingMethod'
import RunReportButton from '../Components/Balancesheet/RunReportButton'
import ReportToolbar from '../Components/Balancesheet/ReportToolbar'

 

const BalanceSheet = () => {

    const reportPeriods = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "This Quarter",
  "Last Quarter",
  "This Year",
  "Year-to-Date",
  "Custom",
];


  const formatDate = (date: Date)=>{
   return date.toISOString().split("T")[0]
  }

  const [period , setPeriod] = useState("Year-to-Date")
  console.log(period)
  const [fromDate , setFromDate] = useState("")
  const [toDate  , setToDate] = useState(formatDate(new Date()))
  
    useEffect(()=>{     

       const current =  new Date()
        
      switch (period){
        case "Today":
        setFromDate(formatDate(current))
        setToDate(formatDate(current))

        break;

        case "Yesterday":{
          const date = new Date()
          date.setDate(date.getDate() - 1)
          break;
        }
        
        case "This Week":{
          const start = new Date()
          
          start.setDate(start.getDate() - start.getDay());
          break
          
        }
          
         case "This Month":{
          const start = new Date(
            current.getFullYear(),
            current.getMonth(),
            1
          )
           setFromDate(formatDate(start))
           setToDate(formatDate(current)) 
         
            break;

         }

         case "Year-to-Date":{
          const start = new Date(current.getFullYear(),0,1)
           setFromDate(formatDate(start))
           setToDate(formatDate(current)) 
           break;
         }

          case "custom":
            break;

            default:
              break; 
      }
    },[period])

    useEffect(()=>{
     
      

    },[period, fromDate,toDate])

     const runReport = ()=>{

     }

   const [displayColumns , setDisplayColumns] = useState('Total Only')
   
   const [rows , setRows] = useState("Active Only")

    const [comparePeriod , setComparePeriod] = useState("None")
    const [accountingMethod , setAccountingMethod] = useState<"Cash" | "Accrual">('Accrual')




  return (

<div>
      <div className="flex mt-5 items-center justify-between">
        <Link to="/" className="flex  gap-3 cursor-pointer hover:bg-emerald-600 transition-all bg-emerald-800 text-white px-4 py-2 rounded-full justify-center items-center">
          <ArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="font-bold">Back </h1>
        </Link>
          <div>
            <div className="flex gap-5">
               <button className="flex  gap-3 cursor-pointer hover:bg-emerald-600 transition-all bg-emerald-800 text-white px-4 py-2 rounded-full justify-center items-center"><PencilIcon/> Customize</button>
               <button className="flex  gap-3 cursor-pointer hover:bg-emerald-600 transition-all bg-emerald-800 text-white px-4 py-2 rounded-full justify-center items-center"><GrFavorite/> Save Customization </button>
            </div>

          </div>
      </div>
       <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
         <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="font-medium text-xl">Balance Sheet Report</h1>
          <button onClick={runReport} className="flex  gap-3 cursor-pointer hover:bg-emerald-600 transition-all bg-emerald-800 text-white px-4 py-2 rounded-full " 
          >Run Report</button>
        </div>
         <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

    {/* Report Period */}
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Report Period
      </label>

      <div className="relative">

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full appearance-none rounded-lg border
           border-gray-300 bg-white px-4 py-3 pr-10 text-sm outline-none transition-all focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        >
          {reportPeriods.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

      </div>
    </div>

    {/* From Date */}
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        From
      </label>

      <div className="relative">

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          readOnly={period !== "Custom"}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none transition-all focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />

        <CalendarDays
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

      </div>
    </div>

    {/* To Date */}
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        To
      </label>

      <div className="relative">

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          readOnly={period !== "Custom"}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none transition-all focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />

        <CalendarDays
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

      </div>
    </div> 
           
  </div>
           <div className='sm:grid-cols-4 grid gap-4 mt-5'>

          <DisplayColumns value={displayColumns} onChange={setDisplayColumns}/>
          <ShowRows value={rows} onChange={setRows}/>
          <ComparePeriod value={comparePeriod} onChange={setComparePeriod}/>
    <AccountingMethod value={accountingMethod} onChange={setAccountingMethod}/>
           </div>
           <ReportToolbar/>


</div>
       </div>
    </div>
  )
}

export default BalanceSheet