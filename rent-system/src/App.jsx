import './App.css'
import Navbar from './component/Navbar'
import Adds from './component/Adds'
import Pick_Drop from './component/Pick_Drop'
import Cards from './component/Cards'
import Footer from './component/Footer'
import Slidebar from './component/Slidebar'
import DetailCar from './component/DetailCar'
import DashboardDetail from './component/Dashboard_Detail'
function App() {


const data=fetch()


return (
    <>
    <h1>helll</h1>
    <div className='w-full h-full bg-[#F6F7F9]'>
   {/* <Navbar></Navbar>
<Slidebar></Slidebar>
    <DetailCar></DetailCar>
    <Footer></Footer> */}
  
  {/* <DashboardDetail></DashboardDetail> */}
 
      </div>
      {/* bg-[#91a5cd] w-full  */}
      <div className=' '>
   
    
      <Cards></Cards>
   
  
      </div>
 
 {/* <Pick_Drop></Pick_Drop> */}
      {/* <Navbar></Navbar> */}
  {/* <Adds></Adds>
  <Pick_Drop></Pick_Drop>
  <Cards></Cards>
  <Footer></Footer> */}


    </>
  )
}

export default App
