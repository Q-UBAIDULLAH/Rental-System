// import { FaHeart } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { IoIosSettings } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { CiSearch } from "react-icons/ci";
// import { CiSliderHorizontal } from "react-icons/ci";
// import myimg from '../assets/myimg.jpg'
// const Navbar=()=>{
//     return(
//         <>

//    <div className="flex justify-between bg-[#FFFFFF] pl-16 sm:mt-5">

// <div><p className="font-[700] text-[#3563E9]  text-[22px] ">MORENT</p></div>

    

// <div className="w-[370px] h-[56px]  mr-[490px]  sm:mt-14 md:mt-0 sm:ml-[-96px] md:ml-0">

// <input className="sm:w-72 md:w-[370px] md:h-[35px]  sm:rounded-md md:rounded-[20px] pl-10 pb-1 font-[500] border-[1px]"  id="search" placeholder="Search something here" type="text" />
// <CiSearch  className="absolute  top-4  transform -translate-y-1/2 w-10 h-5 text-[#596780] sm:mt-[75px] md:mt-5 "/>
// <CiSliderHorizontal className="absolute  top-4 transform -translate-y-1/2 -translate-x-[-325px] md:w-9 md:h-10 text-5xl text-[#596780] sm:w-9 sm:h-9 sm:ml-[-8px] 
// sm:mt-[76px] md:mt-5  sm:rounded-md md:border-0 sm:border border-gray-200"/>
// </div>
// <div className="flex gap-4 mr-9">
//     <div className="bg-[#fafbfb] border border-gray-200 w-[35px] h-[35px] rounded-[20px]   md:flex md:items-center md:justify-center  sm:hidden  "><FaHeart className="text-[#596780] "/></div>
//     <div className="bg-[#fafbfb] border border-gray-200 w-[35px] h-[35px]  text-[20px] rounded-[20px]   md:flex md:items-center md:justify-center sm:hidden "><IoIosNotifications  className="text-[#596780] "/></div>
//     <div className="bg-[#fafbfb] border border-gray-200 w-[35px] h-[35px] text-[20px] rounded-[20px]   md:flex md:items-center md:justify-center sm:hidden"><IoIosSettings  className="text-[#596780] "/></div>
//     <div className="sm:ml-[-460px] md:ml-0 bg-[#fafbfb] border border-gray-200 sm:h-7 sm:w-8 md:w-[35px] md:h-[35px] md:rounded-[20px]   md:flex md:items-center md:justify-center sm:rounded-[20px]"><img className="sm:rounded-[20px] sm:w-8 sm:h-7 md:w-[35px] md:h-[34px]
//     md:rounded-[20px]" src={myimg} alt="" /></div>
// </div>

//    </div>
//         </>
//     )
// }
// export default Navbar

















import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import myimg from "../assets/myimg.jpg";

const Navbar = () => {
  return (
   
    
    <div className=" md:flex sm:flex items-center justify-between bg-yellow-100  sm:px-8 py-3">

<div className="flex justify-between w-full">
    <div className="flex items-center"><RxHamburgerMenu className="text-4xl "/></div>
    <div className="bg-gray-100 border border-gray-200  rounded-full flex items-center justify-center">
          <img className="w-11 h-11 rounded-full" src={myimg} alt="Profile" />
        </div>

</div>


      {/* Logo */}
      <div className="mt-3">
        <p className="font-bold text-[#3563E9] text-2xl">MORENT</p>
      </div>
     
      
       <div className="relative flex-1  flex justify-between items-center   w-full  mt-4 sm:flex">
    

      
        <input
          className="w-72  h-10 sm:h-12 pl-10 pr-12 rounded-lg border  border-gray-300 focus:outline-none"
          placeholder="Search something here"
          type="text"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        {/* <CiSliderHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2  
         cursor-pointer" /> */}
         
         <div className="border ml-2 rounded-lg">
         <CiSliderHorizontal className="text-slate-400 text-4xl "/>
         </div>
         
      </div> 

   
   
 


      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Hidden on small screens */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="bg-gray-100 border border-gray-200 p-2 rounded-full flex items-center justify-center">
            <FaHeart className="text-gray-600" />
          </div>
          <div className="bg-gray-100 border border-gray-200 p-2 rounded-full flex items-center justify-center">
            <IoIosNotifications className="text-gray-600" />
          </div>
          <div className="bg-gray-100 border border-gray-200 p-2 rounded-full flex items-center justify-center">
            <IoIosSettings className="text-gray-600" />
          </div>
        </div>

        {/* Profile Image */}
        <div className="hidden bg-gray-100 border border-gray-200 p-1 rounded-full flex items-center justify-center">
          <img className="w-10 h-10 rounded-full" src={myimg} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
