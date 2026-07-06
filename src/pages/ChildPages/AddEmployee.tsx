import { UploadCloud, User2Icon } from "lucide-react"
import React, { useState } from "react"

 interface inputData {
    firstName:string,
        lastName:string,
        image:string,
        idImage:string,
        dateOfBirth:string,
        dateJoined:string,
        streetName:string,
        country:string,
        province:string,
        city:string,
        compnay:string,
        postalcode:number,
        gstNumber:number,
        mobileNumber:number,
        sinNumber:number,
        role:string,
        hourlyRate:number,
        depositformImage:string
 }


const AddEmployee = () => {

     const [input , setInput] = useState<inputData>({
        firstName:'',
        lastName:"",
        image:'',
        idImage:'',
        dateOfBirth:"",
        dateJoined:"",
        streetName:'',
        country:'',
        province:"",
        city:'',
        compnay:'',
        postalcode:37300,
        gstNumber:12,
        mobileNumber:73392,
        sinNumber:82933,
        role:"",
        hourlyRate:10,
        depositformImage:""
     })

     const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault();
     
     }

    return (
    <div className="mt-5">
        <form onSubmit={submitHandler} className="h-screen px-10 py-5 overflow-y-auto no-scrollbar border border-gray-300 rounded w-fulll">
            <h1 className="font-bold text-xl">User Details</h1>
            <h1 className="text-gray-500 font-medium mt-5">Personal Details</h1>
          <div className="flex gap-5 sm:flex-row flex-col">
              <div>
                <h1 className="mt-5 text-gray-600 font-medium">First Name</h1>
                <input type="text" value={input?.firstName || ''}  placeholder="Enter First Name"
                 className="border mt-2 border-gray-300 outline-none px-4 py-2 rounded-md w-80"
                onChange={(e)=>setInput({...input , firstName:e.target.value })}  />
              </div>
               <div>
                <h1 className="mt-5 text-gray-600 font-medium">Last Name</h1>
                <input type="text" value={input?.lastName || ''}  placeholder="Enter First Name"
                 className="border mt-2 border-gray-300 outline-none px-4 py-2 rounded-md w-80"
                onChange={(e)=>setInput({...input , lastName:e.target.value })}  />
              </div>
          </div>
          
                <h1 className="mt-5 text-gray-600 font-medium">Employee Picture</h1>
           <div className="border border-gray-300 rounded-md flex flex-col w-40 h-30 mt-3 items-center justify-center">
  <label htmlFor="image" className="cursor-pointer">
    <div>
      {input.image ? (
        <img
          src={input.image}
          alt="preview"
          className="w-40 h-30 object-cover rounded-md"
        />
      ) : (
        <div>

         <div className="border w-10 border-gray-300 cursor-pointer rounded-md p-2 flex items-center justify-center  ">
             <UploadCloud className="text-gray-400" />
        </div>
    <h1 className="text-emerald-700 text-xs mt-3">
      Click To Upload
    </h1>

    <p className="text-gray-500 text-xs">
      PNG or JPG
    </p>

         </div>
      )}
    </div>


    <input
      id="image"
      type="file"
      hidden
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setInput({
          ...input,
          image: URL.createObjectURL(file),
        });
      }}
    />
  </label>
</div>

             <h1 className="mt-5 text-gray-600 font-medium">    Upload ID</h1>
            <div className="w-40 h-30 border border-gray-300 rounded-md flex items-center justify-center mt-3 ">
                <label htmlFor="idimage">

                 {input.idImage ?
                 (
                     <img src={input.idImage} alt=""  className="w-40 h-30 object-cover rounded-md"/>
                    ):(
                        <div>
                        <div className="text-gray-400 w-10 rounded-md p-2 flex items-center justify-center cursor-pointer border border-gray-300" >
                            <UploadCloud/>
                        </div>
                        <p className="text-xs mt-3 text-emerald-700 ">Click To Upload</p>
                        <p className="text-gray-300">PNG or JPG</p>
                    </div>
                 )}  

                   <input type="file" hidden id="idimage" accept="image/*"
                    onChange={(e)=>{
                        const file = e.target.files?.[0]

                        if(file){
                            const url = URL.createObjectURL(file)
                            setInput({...input, idImage:url})
                        }
                    }}
                   />

                 </label>

            </div>
            
    <div className="relative w-full">
        <h1 className="mt-5 text-gray-700 decoration-double">Enter Your Date Birth </h1>
  <input
    type="date"
    value={input.dateOfBirth}
    onChange={(e) =>
      setInput({
        ...input,
        dateOfBirth: e.target.value,
      })
    }
    className="w-full px-4 py-3 border mt-4 border-gray-300 rounded-md appearance-none"
  />
</div>

   <div className="relative w-full">
        <h1 className="mt-5 text-gray-700 decoration-double">Date Joined </h1>
  <input
    type="date"
    value={input.dateJoined}
    onChange={(e) =>
      setInput({
        ...input,
        dateJoined: e.target.value,
      })
    }
    className="w-full px-4 py-3 border mt-4 border-gray-300 rounded-md appearance-none"
  />
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
            <h1 className="text-xl mt-6 text-gray-600">Compnay</h1>
             <input type="text" placeholder="Enter your Compnay name" className="mt-4 border border-gray-300
             w-full px-3 py-1 rounded-md"
             value={input.compnay}
             onChange={(e)=>setInput({...input , compnay:e.target.value})}
             />

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

              <h1 className="text-xl mt-6 text-gray-600">SIN Number</h1>
             <label htmlFor="number" className="border border-gray-300 mt-3 rounded-md py-1.5 px-3" >
            <input  type="Number" id="number" className="outline-none mt-3 w-full " placeholder="91 000 000" 
            value={input.sinNumber} onChange={(e)=>setInput(({...input , 
            sinNumber:e.target.valueAsNumber}))}/>
             </label> 
              
              <h1 className="text-xl mt-6 text-gray-600">Hourly Rate</h1>
              <input type="text" placeholder="Charges per hour"
               className="rounded-md border border-gray-400 outline-none px-3 py-1 w-1/2 mt-3" />

              <h1 className="text-xl mt-6 font-bold text-gray-600">Direct Depost From</h1>
                  <div className="border border-gray-300 rounded-md flex flex-col w-100 h-50 mt-3 items-center justify-center">
  <label htmlFor="depositimage" className="cursor-pointer">
    <div>
      {input.depositformImage ? (
        <img
          src={input.depositformImage}
          alt="preview"
          className="w-100 h-50 object-cover rounded-md"
        />
      ) : (
        <div>

         <div className="border w-10 border-gray-300 cursor-pointer rounded-md p-2 flex items-center justify-center  ">
             <UploadCloud className="text-gray-400" />
        </div>
    <h1 className="text-emerald-700 text-xs mt-3">
      Click To Upload
    </h1>

    <p className="text-gray-500 text-xs">
      PNG or JPG
    </p>

         </div>
      )}
    </div>


    <input
      id="depositimage"
      type="file"
      hidden
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (file) {
            const url =  URL.createObjectURL(file)
            setInput({...input, 
                depositformImage:url
            })
        }

      }}
    />
  </label>
</div>       
             
           </div>
 
                <button type="submit"  className="bg-emerald-800 mt-10  px-3 cursor-pointer py-1 text-white flex gap-2 items-center 
          justify-center rounded-full"> <User2Icon className="size-5"/> Add Employee</button>

  
        </form>
    </div>
  )
}

export default AddEmployee