import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Navbar=()=>{
    return(
        <>
   <div className="flex justify-around">

<div>MORENT</div>
<div><input placeholder="type here" type="text" /></div>
<div className="flex gap-8 ">
    <div><FaHeart /></div>
    <div><IoIosNotifications /></div>
    <div><IoIosSettings /></div>
    <div><CgProfile /></div>
</div>

   </div>
        </>
    )
}
export default Navbar