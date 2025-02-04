import Navbar from './Navbar'
import Slidebar from './Slidebar'
import Cards from './Cards'
import Dashboard_Detail from './Dashboard_DetailCars'
import Dashboard_DetailCar from './Dashboard_DetailCars'
import DashboardPickdrop from './Dashboard_pickdrop'
import Footer from './Footer'
const DashboardDetail=()=>{
    return(
        <>
        <Navbar></Navbar>
       
            <div className=''>
        <Slidebar></Slidebar>
        <DashboardPickdrop></DashboardPickdrop>
        <div className='ml-72 mt-[-110px]'>
        <Dashboard_DetailCar ></Dashboard_DetailCar>
       
        </div>
        <Footer></Footer>
        </div>
        <div className='clear-both'></div>
 
        
        
         
        
         
     
          
        
     
      
        </>
    )
}
export default DashboardDetail