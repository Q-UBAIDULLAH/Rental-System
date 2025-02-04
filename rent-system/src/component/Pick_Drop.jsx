import { IoIosRadioButtonOn } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";



const Pick_Drop=()=>{
return(
<>


<div className="flex gap-1">


<div className="w-[552px] h-[132px] ml-16 rounded-[10px] 
 mt-7  mx-11 bg-white">

<div className="flex  gap-2 mx-10 my-4"><IoIosRadioButtonOn className="mt-[3px]  text-[#3563E9]"/><h2 className="font-[500] mt-[-2px]"> Pick-Up</h2></div>

<div className="flex mx-11 my-4 gap-7">

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
<div className="relative right-5 mt-16 flex items-center justify-cente rounded-[12px] bg-[#3563E9] w-12 h-12"><RiArrowUpDownLine fontSize={35} className="text-white ml-1.5"/></div>


<div className="w-[532px] h-[132px] mt-7 mx-5 rounded-md bg-white hello" >

<div className="flex gap-2 mx-10 my-4"><IoIosRadioButtonOn className="text-[#5CAFFC]"/><h2 className="font-[500] mt-[-3px]"> Drop-Off</h2></div>

<div className="flex mx-11 my-4 gap-6">

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




</>)
}
export default Pick_Drop