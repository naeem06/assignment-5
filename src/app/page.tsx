 import Header from "./Header/Header";
 import Image from "next/image";
 import layers from "../public/layers.svg"

export default function Home() {
  return (
    <div>
      <Header/>
      <div id="hero" className="flex">

      <div id="section1" className="w-[50%] pt-[170px] pl-[120px] gap-[50px] ">

       <div id="heading" className="text-[40px] w-[496px] h-[189px] font-[Libre-Bodoni] font-[700]"><h1>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1></div>

       <div className="w-[80%] h-[120px] text-[17px] text-[#787054] font-[Libre-Bodoni] font-[700]"><p>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p></div>

       <div className="w-[177px] h-[42px] rounded-[10px] text-[20px] font-[500] bg-[#A29875]  hover:bg-[#91855c]  "><button className="pl-[35px] pt-[5px] font-[Libre-Bodoni] text-[#FFFFFF] ">Explore Now</button></div> 
      </div>


      <div id="section2" className="w-[50%] pt-[50px] pl-[50px]">
     <div id="img" className="w-[462px] h-[647px] p-[50px] ">  <img src={layers.src} alt="image" />
     </div>
      </div>
      </div>
    </div>
  );
}
