const Footer=()=>{
    return(
        <>
 {/* flex justify-between */}
<div className="w-[1366px] h-[480px]   bg-slate-400">


<div className="flex justify-between">

<div className="w-[292px] h-[108px] ml-8 mt-12 bg-slate-500">
    <h2 className="font-[600] text-[32px] text-[#3563E9]">MORENT</h2>
<p className="text-[17px] font-[350] text-[#131313] mt-2">Our vision is to provide convenience and help increase your sales business.</p>
</div>

<div className="flex gap-[80px] mr-16 mt-12">
    <div className="">
        <h3 className="font-[600]">About</h3>
        <p className="mb-4 mt-7">How it works</p>
        <p className="mb-4">Featured</p>
        <p className="mb-4">Partnership</p>
        <p className="mb-4 w-[130px]">Business Relation</p>
    </div>
    <div>
        <h3 className="font-[600]">Community</h3>
        <p className="mb-4 mt-7">Events</p>
        <p className="mb-4">Blogs</p>
        <p className="mb-4">Podcast</p>
        <p className="mb-4 w-[100px]">Invite a friend</p>
    </div>

    <div>
        <h3 className="font-[600]">Socials</h3>
        <p className="mb-4 mt-7">Discord</p>
        <p className="mb-4">Instagram</p>
        <p className="mb-4">Twitter</p>
        <p className="mb-4">Facebook</p>
    </div>
    
</div>


</div>




<div className="border-[1px] text-[#131313] mt-10"></div>

<div className="flex justify-between mt-8">

<div className="ml-12"><p>©2022 MORENT. All rights reserved</p></div>
<div className="flex gap-14 mr-14">
    <p>Privacy & Policy</p><p>Terms & Condition</p>
    </div>


</div>



</div>


        </>
    )

}

export default Footer