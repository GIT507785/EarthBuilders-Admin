import { ArrowLeft, PencilIcon, UserCheck2 } from "lucide-react"
import { useEffect, useState } from "react"
import { data, Link } from "react-router-dom"
import image from '../../assets/person2.jpg'
import { Doughnut } from "react-chartjs-2";
import UserExpensesCard from "./UserExpensesCard";

 interface data {
    name:string,
    role:string,
    workingsite:string;
    image:string
 }

  

  

const UserDetails = () => {

   const [isEdit , setIsEdit] = useState<boolean>(false)
   const [inputData, setInputData] = useState<data>({
  name: "John",
  role: "Accountant",
  workingsite: "Building",
  image: image
});

 useEffect(()=>{
    const saveUser = localStorage.getItem("user")
    if(saveUser){
        setInputData(JSON.parse(saveUser))
    }
 },[])

   const handlesave = ()=>{
    
    localStorage.setItem( 'user', JSON.stringify(inputData))
    setIsEdit(!isEdit)
   }
   
    
  
     
     const analytics = {
  days: {
    total: 30,
    completed: 20,
    remaining: 10,
  },

  weeks: {
    total: 12,
    completed: 81,
    remaining: 4,
  },

  months: {
    total: 12,
    completed: 97,
    remaining: 5,
  },

  years: {
    total: 5,
    completed: 13,
    remaining: 2,
  },
};

  const priceperhour = 40
  const currencySymbol = "$"

 const [filter  , setFilter] = useState<"days" | 'weeks' |"months" | "years">('days')
  
  const current = analytics[filter]
   console.log(filter)
   console.log(current)

  //  const hoursData = {
  //   hours:{
  //       days:10,
  //       worked:40 
  //   },
  //  }
   


  return (
    <div>
        <Link to={'/users'} className="px-4 py-1.5 rounded-full flex items-center justify-center bg-emerald-700 gap-3 cursor-pointer w-27 hover:bg-emerald-600 text-white transition-all mt-5" >
            <ArrowLeft size={17}/> Back</Link> 
            <div className="rounded-md border mt-5 border-gray-300 p-4 w-full h-screen overflow-y-auto no-scrollbar">
             <div className="mt-6 flex justify-between">
                <h1 className="text-xl font-medium text-slate-700 ">User Details</h1>
                <button onClick={handlesave} className="flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-700 text-white w-30 gap-2 cursor-pointer hover:bg-emerald-600 transition-all">
                    {isEdit ?(
                        <div>
                            <h1 >Save</h1>
                        </div>
                    ):(
                        <div className="flex gap-3">
                            <UserCheck2/> Edit
                        </div>
                    )
                    }
                </button>
             </div>
            <div className="flex justify-between mt-10 px-10">
             <div>
                <h1 className="text-gray-500 font-medium">User Name</h1>
                <h1 className="text-gray-500 mt-2 font-medium">Role</h1>
                <h1 className="text-gray-500 mt-2 font-medium">working Site</h1>
             </div>
              <div>

             <div>
                {isEdit ?(
                    <input  value={inputData.name}
                    onChange={(e)=>setInputData({...inputData, name:e.target.value})}
                    type="text" className="border border-gray-300 px-4 py-1.5 rounded-md outline-none" />
                ):(
                    <div>
                        <h1 className="text-slate-900 text-xl font-medium">{inputData.name}</h1>
                    </div>
                )}
             </div>
             <div>
                {isEdit ?(
                    <div>
                        <input type="text" value={inputData.role}
                         onChange={(e)=>setInputData({...inputData, role:e.target.value})}
                         className="border border-gray-300 px-4 py-1.5 mt-3 rounded-md outline-none"
                        />
                    </div>
                ):(
                    <div>
                        <h1 className="text-slate-900 text-xl mt-1 font-medium">{inputData.role}</h1>
                    </div>
                )}
             </div>
             <div>
                {isEdit ?(
                    <div>
                        <input type="text" value={inputData.workingsite}
                         onChange={(e)=>setInputData({...inputData, workingsite:e.target.value})}
                         className="border border-gray-300 px-4 py-1.5 mt-3 rounded-md outline-none"
                        />
                    </div>
                ):(
                    <div>
                        <h1 className="text-slate-900 text-xl mt-1 font-medium">{inputData.workingsite}</h1>
                    </div>
                )}
             </div>
              </div>
             <div className="relative w-40 h-40">
  <img
    src={inputData.image || image}
    alt=""
    className="w-full h-full object-cover rounded-md border"
  />

  {isEdit && (
    <label
      htmlFor="image"
      className="absolute bottom-2 right-2 bg-lime-200 rounded-full p-2 cursor-pointer"
    >
      <PencilIcon className="text-lime-600" />

      <input
        id="image"
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if(file){
          
             const url = URL.createObjectURL(file)
            
              setInputData({...inputData , image:url})

          } else {
            return;
          }
        }}
      />
    </label>
  )}
</div>
            </div>
            {/*====================timegraps======== */}
             <div className="justify-between flex sm:flex-row flex-col">

            <div className="border relative w-70 h-70 border-gray-300  rounded-md p-2">
               <Doughnut
               data={{
                   labels:['Days',],
                   datasets:[
                       {
                           data:[
                            current.completed,
                            current.remaining
                           ],
                           backgroundColor: ["#97CB5C", "#ECEEF3"],
                           borderWidth:0
                        },                    
                        
                    ],
                }}
                options={{
                    cutout:"80%",
                    responsive:true,
                     maintainAspectRatio:false,
                    plugins:{
                        legend:{
                            display:false,
                        },
                    }
                }}
                
                />
                <div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-3xl font-bold">
      {current.remaining}
    </h1>

    <p className="text-gray-500 capitalize">
      {filter}
    </p>
  </div>
                
                <div className="absolute top-3 right-3">
  <select
    value={filter}
    onChange={(e) =>
      setFilter(
        e.target.value as "days" | "weeks" | "months" | "years"
      )
    }
    className="
      px-4 py-2
      rounded-lg
      border border-gray-300
      bg-white
      text-sm
      font-medium
      text-slate-700
      shadow-sm
      outline-none
      cursor-pointer
      hover:border-emerald-500
      focus:ring-2
      focus:ring-emerald-500
      transition-all
    "
  >
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    <option value="months">Months</option>
    <option value="years">Years</option>
  </select>
</div>

</div>
                </div>
                  <div className="border mt-25 flex items-center bg-emerald-50  justify-center w-70 h-30  border-gray-300  rounded-md p-2">
                    <h1 className="text-2xl font-bold text-emerald-800 ">{currencySymbol}{priceperhour.toFixed(2)} <span className="text-xs -ml-1">\hr</span> </h1>
                  </div>
                  <div className="border mt-5 w-70 h-70 relative border-gray-300  rounded-md p-2">
                    <Doughnut
                      data={{
                        labels:["days"],
                        datasets:[
                            {
                                data:['300' , '400' , ],                                                           backgroundColor: ["#97CB5C", "#ECEEF3"],
                            }
                        ]
                      }}
                      options={{
                        cutout:'80%',
                        responsive:true,
                        plugins:{
                            legend:{
                                display:false
                            }
                        }
                      }}
                    />
                     <div className="items-center absolute flex inset-0  justify-center">
                       <h1 className="font-bold text-xl">40 Hours</h1>
                     </div>
                  </div>
                </div>

                 <div>
                  <UserExpensesCard/>
                  </div>         
       
            </div>
    </div>
  )
}

export default UserDetails