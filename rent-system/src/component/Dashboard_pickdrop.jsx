import { IoIosRadioButtonOn } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useState ,useEffect } from "react";
const DashboardPickdrop=()=>{
    return(
        <>
        
        <div className="flex ml-[264px]  w-[1064px] mt-1   ">
        
        
        <div className="w-[505px] h-[132px]   ml-0 rounded-[10px] 
         mt-7  mx-11 bg-white">
        
        <div className="flex  gap-2 mx-5 my-4"><IoIosRadioButtonOn className="mt-[3px]  text-[#3563E9]"/><h2 className="font-[500] mt-[-2px]"> Pick-Up</h2></div>
        
        <div className="flex mx-5 my-4 gap-6">
        
        <div className=" ">
        <h2 className="font-[600]">Locations</h2>
            <select className="w-32 text-[#90A3BF] text-[14px]">
                <option className=""> Select your city</option>
              
            </select>
            </div>
            <span className="border-r border-[#C3D4E9]"></span>
        <div className="">
        <h2 className="font-[600]">Date</h2>
            <select className="w-32  text-[#90A3BF] text-[14px]">
                <option value="">Select your date</option>
              
            </select>
            </div>
            <span className="border-r border-[#C3D4E9]"></span>
        <div className="">
        <h2 className="font-[600]">Time</h2>
            <select className="w-32  text-[#90A3BF] text-[14px]">
                <option  value="">Select your time</option>
            
            </select>
            </div>
        
        
        
        </div>
        
        
        
        </div>
        <div className="relative right-10 mt-16 flex items-center justify-cente rounded-[12px] bg-[#3563E9] w-12 h-12"><RiArrowUpDownLine fontSize={35} className="text-white ml-1.5"/></div>
        
        
        <div className="w-[505px] h-[132px] mt-7 ml-[-39px] rounded-md bg-white hello" >
        
        <div className="flex gap-2 mx-5 my-4"><IoIosRadioButtonOn className="text-[#5CAFFC]"/><h2 className="font-[500] mt-[-3px]"> Drop-Off</h2></div>
        
        <div className="flex mx-5 my-4 gap-6">
        
        <div className=" ">
        <h2 className="font-[600]">Locations</h2>
            <select className="w-32 text-[#90A3BF] text-[14px]">
                <option className="" value="">Select your city</option>
              
            </select>
            </div>
            <span className="border-r border-[#C3D4E9]"></span>
        <div className="">
        <h2 className="font-[600]">Date</h2>
            <select className="w-32  text-[#90A3BF] text-[14px]">
                <option value="">Select your date</option>
              
            </select>
            </div>
            <span className="border-r border-[#C3D4E9]"></span>
        <div className="">
        <h2 className="font-[600]">Time</h2>
            <select className="w-32  text-[#90A3BF] text-[14px]">
                <option  value="">Select your time</option>
            
            </select>
            </div>
        
        
        
        </div>
        
        </div>
        
        
        
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
        </>
    )
}
export default DashboardPickdrop