import { IoStarSharp } from "react-icons/io5";
const DetailCar=()=>{
    return(
        <>
<div className="flex gap-6">


<div className="w-[462px] h-[508px] bg-slate-500">

    <div className="w-[220px] h-[72px] bg-orange-500 ml-4">
        <h1 className="font-[700] text-[22px] ">Nissan GT-R</h1>
       <div className="flex">
        <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={12}/></span>
        <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={12}/></span>
        <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={12}/></span>
        <span className="text-[#FBAD39]"> <IoStarSharp  fontSize={12}/></span>
        <span className=" text-[white]"> <IoStarSharp  fontSize={12}/></span>
        <h5 className="text-[11px] text-[#596780]">440+ Reviewer</h5>

      </div>
      
    </div>

<div className="w-[414px] h-[120px] bg-stone-900 ml-4 mt-4">
<p className="text-[19px] text-white">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
</div>

<div className="flex  justify-between  ml-4 mr-14">
    <p className="text-[#90A3BF] text-[17px] font-[400]">TypeCar</p>
    <p className="text-[]">Sport</p>
    <p className="text-[#90A3BF] text-[17px] font-[400]">Capacity</p>
    <p>2Person</p>
    
</div>

<div className="flex  justify-between  ml-4 mr-14">
    <p className="text-[#90A3BF] text-[17px] font-[400]">Steering</p>
    <p>Manual</p>
    <p className="text-[#90A3BF] text-[17px] font-[400]">Gasoline</p>
    <p>70L</p>
</div>



</div>
<div className="w-[492px] h-[508px] bg-slate-500 "></div>






</div>

        </>
    ) 
}
export default DetailCar