const Slidebar=()=>{

    return(
        <>
<div className="w-[360px] h-[2016px] bg-slate-600 float-left">
    <div className="pt-8">

    <h3 className="">T Y P E</h3>
   
<div className="space-x-1 mb-3 mt-4"><input  type="checkbox" checked/><label htmlFor=""> Sport  (10)</label></div>
<div className="space-x-1 mb-3"><input type="checkbox" checked/><label htmlFor=""> SUV  (12)</label></div>
<div className="space-x-1 mb-3"><input type="checkbox" /><label htmlFor=""> MPV  (16)</label></div>
<div className="space-x-1 mb-3"><input type="checkbox" /><label htmlFor=""> Sedan  (20)</label></div>
<div className="space-x-1 mb-3 "><input className="" type="checkbox" /><label htmlFor=""> Coupe  (14)</label></div>
<div className="space-x-1"><input type="checkbox" /><label htmlFor=""> Hatchback  (14)</label></div>

    </div>


<div className="pt-8">

    <h3 className="">C A P A C I T Y</h3>

    <div className="space-x-1 mt-4 mb-3"><input type="checkbox"checked/> <label htmlFor="">2 Person  (10)</label></div>
    <div className="space-x-1 mb-3"><input type="checkbox" /> <label htmlFor="">4 Person <span className="text-[#90a3BF]">(14)</span></label></div>
    <div className="space-x-1 mb-3"><input type="checkbox"/> <label htmlFor="">6 Person <span className="text-[#90a3BF]">(12)</span>  </label></div>
    <div className="space-x-1"><input type="checkbox"checked/> <label htmlFor="">8 or More  (16)</label></div>
</div>

<div>
<input className="w-[200px]" type="range"  min="0" max="70"/>
<p>Max. $100.00</p>
</div>







</div>
<div>hello</div>
        </>
    )
}
export default Slidebar