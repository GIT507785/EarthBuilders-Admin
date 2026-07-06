import {Bar , Doughnut } from 'react-chartjs-2'


 import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";



 const data = [
  {
    month: "Jan",
    material: 320,
    vendor: 280,
    employee: 220,
  },
  {
    month: "Feb",
    material: 280,
    vendor: 230,
    employee: 180,
  },
  {
    month: "Mar",
    material: 350,
    vendor: 260,
    employee: 210,
  },
  {
    month: "Apr",
    material: 300,
    vendor: 240,
    employee: 190,
  },
  {
    month: "May",
    material: 370,
    vendor: 280,
    employee: 230,
  },
  {
    month: "Jun",
    material: 330,
    vendor: 250,
    employee: 200,
  },
  {
    month: "Jul",
    material: 390,
    vendor: 300,
    employee: 240,
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

  return (
    <div className='mt-5'>
       <Bar
         data={{
          labels:data.map((item)=> item.month),
          datasets:[
            {
              label:'Material Purchase',
              data:data.map((item)=> item.material),
                backgroundColor:"#4E7D71",
                borderRadius:[5]
            },
            {
              label:'Vender Cost',
              data:data.map((item)=> item.vendor),
              backgroundColor:"#94C95D"
            },
            {
              label:"Employee Cost",
              data:data.map((item)=> item.employee),
              backgroundColor :'#e0e0e0'
            },
          

          ]
        
        }}
       />
    </div>
  )
}

export default BarChart