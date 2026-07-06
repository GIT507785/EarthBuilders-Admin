import { HandshakeIcon, UploadCloud, User2Icon } from "lucide-react"
import React, { useState } from "react"

 interface inputData {
    firstName:string,
        lastName:string,
        email:string,
        streetName:string,
        country:string,
        province:string,
        city:string,
        postalcode:number,
        gstNumber:number,
        mobileNumber:number,
 }


const AddClients = () => {

     const [input , setInput] = useState<inputData>({
        firstName:'',
        lastName:"",
        email:"",
        streetName:'',
        country:'',
        province:"",
        city:'',
        postalcode:37300,
        gstNumber:12,
        mobileNumber:73392,
     })

     const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault();
     
     }

    return (
    <div className="mt-5">
        <form onSubmit={submitHandler} className="h-screen px-10 py-5 overflow-y-auto no-scrollbar border border-gray-300 rounded w-fulll">
            <h1 className="font-bold text-xl">User Details</h1>
            <h1 className="text-gray-500 font-medium mt-5">Personal Details</h1>
          <div className="flex gap-5">
              <div>
                <h1 className="mt-5 text-gray-600 font-medium">First Name</h1>
                <input type="text" value={input?.firstName || ''}  placeholder="Enter First Name"
                 className="border mt-2 border-gray-300 outline-none px-4 py-2 rounded-md w-80"
                onChange={(e)=>setInput({...input , firstName:e.target.value })}  />
              </div>
               <div>
                <h1 className="mt-5 text-gray-600 font-medium">Last Name</h1>
                <input type="text" value={input?.lastName || ''}  placeholder="Enter Last Name"
                 className="border mt-2 border-gray-300 outline-none px-4 py-2 rounded-md w-80"
                onChange={(e)=>setInput({...input , lastName:e.target.value })}  />
              </div>
          </div>
          
 
         <div>
            <h1 className="mt-5 font-bold text-xl">Address</h1>
             <div className="flex sm:flex-row flex-col gap-4">
               <div>
                <h1 className="mt-6 text-gray-600 font-medium   ">Street Name</h1>
                <input type="text" placeholder="Enter  street Name" className="px-4 py-1   border border-gray-300 rounded-md outline-none mt-2 w-70"/>

               </div>

                  <div>
                <h1 className="mt-6 text-gray-600 font-medium   ">Country</h1>
                 <select name="" id="" className="px-4 mt-2 py-1 rounded-md w-70 border border-gray-300">
                    <option value="" disabled className="text-gray-400">Choose Country</option>
                    <option value="">Pakistan</option>
                    <option value="">Punjab</option>
                    <option value="">India</option>
                    <option value="">Dubai</option>
                 </select>
               </div>


             </div>
         </div>

         <div>
             <div className="flex sm:flex-row flex-col gap-4">

                     <div>
                <h1 className="mt-6 text-gray-600 font-medium   ">Province</h1>
                 <select name="" id="" className="px-4 mt-2 py-1 rounded-md w-70 border border-gray-300">
                    <option value=""  className="text-gray-400">Choose Province</option>
                    <option value="">Punjab</option>
                    <option value="">Sindh</option>
                    <option value="">Lahore</option>
                 </select>
               </div>               


                  <div>
                <h1 className="mt-6 text-gray-600 font-medium   ">City</h1>
                 <select name="" id="" className="px-4 mt-2 py-1 rounded-md w-70 border border-gray-300">
                    <option value="" className="text-gray-400">Choose City</option>
                    <option value="">Faislabad</option>
                    <option value="">Samundri</option>
                    <option value="">Lahore</option>
                 </select>
               </div>


             </div>

         </div>


           <div>
            <h1 className="text-xl mt-6 text-gray-600">Postal Code</h1>
             <label htmlFor="number" className="border border-gray-300 mt-3 rounded-md py-1.5 px-3" >

            <input  type="Number" id="number" className="outline-none mt-3 w-full " placeholder="Enter your area's postal code" value={input.postalcode} onChange={(e)=>setInput({...input , 
                postalcode:e.target.valueAsNumber})}/>
             </label> 

           </div>


            <div>
            <h1 className="text-xl mt-6 text-gray-600">GST Number</h1>
             <label htmlFor="number" className="border border-gray-300 mt-3 rounded-md py-1.5 px-3" >

            <input  type="Number" id="number" className="outline-none mt-3 w-full " placeholder="Enter your GST Number" value={input.gstNumber} onChange={(e)=>setInput({...input , 
            gstNumber:e.target.valueAsNumber})}/>
             </label> 
             
           </div>
                 
            <h1 className="mt-5 text-slate-700 font-medium text-2xl">Contact Information</h1>
            <div>
            <h1 className="text-xl mt-6 text-gray-600">Mobile Number</h1>
             <label htmlFor="number" className="border border-gray-300 mt-3 rounded-md py-1.5 px-3" >
            <input  type="Number" id="number" className="outline-none mt-3 w-full " placeholder="+91 000 0000" value={input.mobileNumber} onChange={(e)=>setInput(({...input , 
            mobileNumber:e.target.valueAsNumber}))}/>
             </label>

  
             <div>
                <h1 className="mt-5 text-gray-600 font-medium">Email Address</h1>
                <input type="text" value={input?.email || ''}  placeholder="xyz@.com"
                 className="border mt-2 border-gray-300 outline-none px-4 py-2 rounded-md w-80"
                onChange={(e)=>setInput({...input , email:e.target.value })}  />
              </div>
             
             
           </div>
 
                <button type="submit"  className="bg-emerald-800 mt-10  px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <HandshakeIcon className="size-5"/> Add Client</button>

  
        </form>
    </div>
  )
}

export default AddClients