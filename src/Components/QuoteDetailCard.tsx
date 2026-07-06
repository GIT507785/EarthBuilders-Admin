
const Quotes = () => {

   const quotesData =[
    {serial:1, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},
      {serial:2, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},
      {serial:1, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},
      {serial:1, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},
      {serial:1, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},
      {serial:1, Description:'Tool Purchase ' , Q:'1' , Rate:'$560,000' ,
      Total:'50$' ,},

   ]

  return (
    <div className="mt-8">
      <div className="border border-gray-300 p-4 w-full overflow-hidden overflow-y-scroll no-scrollbar min-h-screen bg-white/50">
        <div>
          <h1 className="text-xl font-medium cursor-pointer">Total Expenses of Project</h1>
        </div>
          
          <div className="flex justify-between bg-lime-100 text-emerald-600 px-3 py-1.5 mt-5">
            <h1>Serial#</h1>
            <h1>Description</h1>
            <h1>Q</h1>
            <h1>Rate</h1>
            <h1>Total</h1>
          </div>
           <div className=" py-1.5 mt-2">
            {quotesData.map((item , index)=>{
              return(
                <div key={index} className="flex justify-between mt-3 border border-gray-300 p-5 shadow-md">
                  <h1>{item.serial}</h1>
                  <h1>{item.Description}</h1>
                  <h1>{item.Q}</h1>
                  <h1>{item.Rate}</h1>
                  <h1>{item.Total}</h1>
                </div>
              )
            })}
             <div className="mt-5 flex justify-between">
                 <div>
                <button className="px-4 flex gap-5 py-1.5 rounded-md bg-emerald-700 text-white">
                    Grand Total <span>$0.05</span>
                    </button>
                    <h1 className="mt-3 font-bold">THANK YOU FOR YOUR BUISNESS!</h1>
                 </div>
                  <div className="mt-3">
                    <div className="flex gap-4">
                        <h1 className="text-gray-600 font-medium">SUBTOTAL</h1>
                        <p>$200.00</p>
                    </div>
                    <div className="flex mt-1 gap-4">
                        <h1 className="text-gray-600 font-medium">Tax Rate</h1>
                        <p>$0.05</p>
                    </div>
                     
                     <div className="flex gap-4 mt-1">
                        <h1 className="text-gray-600 font-medium">Sales Tax</h1>
                        <p>$200.00</p>
                    </div>



                  </div>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Quotes