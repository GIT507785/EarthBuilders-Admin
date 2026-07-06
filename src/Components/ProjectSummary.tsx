import { ArrowLeft, Download, Edit, Send } from "lucide-react"
import { Link } from "react-router-dom"
import image from '../assets/logo.png'
import QuoteDetailCard from '../Components/QuoteDetailCard'

const QuoteDetails = () => {
  return (
    <div className="mt-10 px-6">
       <div className="flex justify-between ">
        <div>
            <Link to={'/quotes'} className="bg-emerald-800 hover:bg-emerald-700 gap-2 text-white cursor-pointer px-4 py-2 rounded-full flex items-center justify-center " >
              <ArrowLeft size={14}/>  Back</Link>
        </div>
         <div className="flex gap-4">
            <button className="bg-emerald-800 text-sm gap-2 hover:bg-emerald-700 text-white cursor-pointer px-4 py-2 rounded-full flex items-center justify-center ">
              <Download size={18}/>  Download Quote</button>
            <button className="bg-emerald-800 gap-2 text-sm text-white hover:bg-emerald-700 cursor-pointer px-4 py-2 rounded-full flex items-center justify-center "><Send size={18}/> Send Quote</button>
            <button className="bg-emerald-800 gap-2 text-sm text-white cursor-pointer px-4 hover:bg-emerald-700 py-2 rounded-full flex items-center justify-center "><Edit size={18}/> Edit Quote</button>
         </div>
        </div>  
        {/* main content */}
        <div className="p-4 border mt-5 shadow-md border-gray-300 rounded w-full min-h-screen overflow-hidden no-scrollbar">
         
         <div className="flex justify-between ">
             <div>
              <h1 className="mt-5 font-bold text-xl">Invoice # 80176</h1>
               <p className="mt-1 text-gray-600">Total:5000$</p>
               <p className="mt-1 text-gray-600">PO:568 888 82</p>

             </div>
            <img src={image} className="h-30 w-30" alt="" />
         </div>
           
           <div className="flex justify-between border-b border-gray-300 pb-3" >
            <h1 className="mt-5 font-bold text-xl">Summary</h1>
             <p className="text-sm text-gray-600 mt-5"> Created:January24,2014</p>
           </div>
              <div>

           <div className="flex gap-20 mt-5">
             <h1 className="font-medium text-[17px] text-gray-600" >Project Name</h1>
             <h2 className="font-medium">Highway building</h2>
           </div>
           <div className="flex gap-16 mt-3">
             <h1 className="font-medium text-[17px] text-gray-600" >project Location</h1>
             <h2 className="font-medium">Highway building</h2>
           </div>
           <div className="flex gap-10 mt-3">
             <h1 className="font-medium text-[17px] text-gray-600" >Project Description</h1>
             <h2 className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at neque maxime!</h2>
           </div>
              </div>
            
             <div className="mt-10 flex gap-80 border-b border-gray-300 pb-1" >
            <h1 className="mt-5 font-bold text-xl">Service Provider</h1>
             <h1 className="text-gray-600 mt-5 text-xl font-normal"> Customer</h1>
           </div>

            <div className="flex gap-40 mt-4 font-stretch-100%">
                <h1>Good Earth Builders (268686 Alberta LTD)</h1>
                <h1>Hazelview property servicesinc</h1>
            </div>

            <div className="flex gap-85 mt-2 font-stretch-100%">
                <h1>1230 17  AVE SW</h1>
                <h1>1230 17  AVE SW</h1>
            </div>

            <div className="flex gap-80 mt-2 font-stretch-100%">
                <h1>Calgory,AB T2T 0BB</h1>
                <h1>Calgory,AB T2T 0BB</h1>
            </div>

            <div className="flex gap-92 mt-2 font-stretch-100%">
                <h1>403-9928473</h1>
                <h1>403-9928473</h1>
            </div>

            <div>
                <QuoteDetailCard/>
            </div>

        </div>
    </div>
  )
}

export default QuoteDetails