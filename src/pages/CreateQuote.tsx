import { Plus, Quote } from "lucide-react";
import React, { useState } from "react"

//  interface form {
//     clientName:string;
//     postalCode:number;
//     totalPrice:number;
//    siteAddress:string;
//    country:string;
//    city:string
//    projectName:string
// }

const CreateQuote = () => {


     const [clientName , setClientName]= useState('')
     const [projectName , setProjectName] = useState('') 
     const [streetName , setStreetName] = useState('') 
     const [country , setCountry] = useState('') 
     const [province , setProvince] = useState('') 
     const [city , setCity] = useState('') 
     const [postalCode, setpostalCode] = useState('') 
     const [totalPrice, setTotalPrice] = useState('') 

  

       const onSubmitHandler = (e:React.FormEvent) =>{
        e.preventDefault();

       }
 
  return (
    <div className="mt-10 flex flex-col">
      <div className="w-full px-10 py-3 min-h-screen overflow-hidden border border-gray-300" >
        <h1 className="font-medium text-xl mt-2">Quote Creation</h1>
          
         <form onSubmit={onSubmitHandler} className="mt-5">
             <h1 className="text-gray-700 font-medium"> Client Name </h1>
             <select  onChange={(e)=>setClientName(e.target.value)} value={clientName} className="px-4 py-2 rounded-md w-60  border mt-2 outline-none border-gray-300">
                <option value="haseeb">haseeb</option>
                <option value="haseeb">hamza</option>
                <option value="haseeb">ali</option>
             </select>
             
              <div className="mt-7">
                <h1 className="text-gray-700 font-medium">Project Name</h1>
                <input type="text"  onChange={(e)=>setProjectName(e.target.value)} value={projectName} className="outline-none border px-3 py-1 w-80 rounded-md border-gray-300 mt-3 " 
                 placeholder="Enter Project Name"/>
              </div>
               
               <h1 className="text-xl font-medium mt-5 text-gray-700">Site Address</h1>

               <div className="flex gap-10">
                 <div className="mt-7">
                <h1 className="text-gray-700 font-medium">Street Name</h1>
                <input type="text"  onChange={(e)=>setStreetName(e.target.value)} value={streetName} className="outline-none border px-3 py-1 w-80 rounded-md border-gray-300 mt-3 " 
                 placeholder="Enter Stree tName"/>
              </div>
                  <div className="mt-8">
                <h1 className="text-gray-700 font-medium">Country</h1>
                 <select  onChange={(e)=>setCountry(e.target.value)} value={country} className="px-4 py-1 rounded-md w-60 
                  border mt-2 outline-none border-gray-300">
                <option value="haseeb">Pakistan</option>
                <option value="haseeb">India</option>
                <option value="haseeb">Dubai</option>
             </select>
                      </div>

               </div>

               <div className="flex gap-10">
                 <div className="mt-7">
                <h1 className="text-gray-700 font-medium">Province</h1>
                <input type="text" onChange={(e)=>setProvince(e.target.value)}  value={province} className="outline-none border px-3 py-1 w-80 rounded-md border-gray-300 mt-3 " 
                 placeholder="Chose province"/>
              </div>
                  <div className="mt-8">
                <h1 className="text-gray-700 font-medium">City</h1>
                 <select name="city" onChange={(e)=>setCity(e.target.value)} value={city} className="px-4 py-1 rounded-md w-60 
                  border mt-2 outline-none border-gray-300">
                <option value="haseeb">Samundri</option>
                <option value="haseeb">Failsabad</option>
                <option value="haseeb">Lahore</option>
             </select>
                      </div>

                </div>
                 
                      <div className="mt-7">
                <h1 className="text-gray-700 font-medium">Potal Code</h1>
                <input onChange={(e)=>setpostalCode(e.target.value)} value={postalCode} type="text"  className="outline-none border px-3 py-1 w-full rounded-md border-gray-300 mt-3 " 
                 placeholder="Enter your area's postal code"/>
              </div>
                
                <h1 className="mt-10 font-medium text-xl text-gray-600">Descriptions</h1>
                 <div className="w-xl mt-5 border border-emerald-700">
                  <div className="flex font-medium text-md justify-between px-10 py-2 bg-emerald-700 text-white">
                     <h1>Task Description</h1>
                     <h2>Task Expenses</h2>
                  </div>
                    <div className="flex font-medium  text-md justify-between px-10 py-2 bg-white">
                      <h1 className="text-emerald-700">task Descripton here</h1>
                      <h1 className="text-emerald-700">$4.00</h1>
                    </div>
                    
                 </div>

                 <div className="sm:ml-60 ml-0 w-10 cursor-pointer  h-10 rounded-full flex 
                 items-center justify-center mt-7 text-white bg-emerald-700">
                <Plus/>
                 </div>
                      <div className="mt-5">
                <h1 className="text-gray-700 font-medium">Total Price</h1>
                <input type="text" onChange={(e)=>setTotalPrice(e.target.value)}  value={totalPrice} className="outline-none border px-3 py-1 w-80 rounded-md border-gray-300 mt-3 " 
                 placeholder="Quote a price"/>
              </div>
               
               <button type="submit" className="flex items-center justify-center mt-6 text-sm gap-3 px-4 py-2  cursor-pointer hover:bg-emerald-600 bg-emerald-700 rounded-full text-white">
                <Quote size={15}/> Create a Quote
               </button>
          </form> 

      </div>
    </div>
  )
}

export default CreateQuote