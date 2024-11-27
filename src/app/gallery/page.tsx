
import Image from "next/image"
import Rectangle from "../../../public/images/Rectangle 22.png"
import rectangle from "../../../public/images/rectangle23.png"
import ractangle from "../../../public/images/ractangle24.png"
import image from "../../../public/images/image25.png"
import images from "../../../public/images/images26.png"
import square from "../../../public/images/square27.png"
import Square from "../../../public/images/Square28.png"
import sqare from "../../../public/images/sqare29.png"
import sqere from "../../../public/images/Sqere30.png"
import Rectangle31 from "../../../public/images/Rectangle31.png"
export default function Gallery(){
    return(
        
<section className="text-gray-600 body-font">
    
<h1 className="text-5xl font-medium title-font mb-4 text-gray-400 tracking-widest">Photo
</h1>
<h1 className="text-6xl font-medium title-font mb-4 text-gray-900 tracking-widest">
Gallery</h1>

    <div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={Rectangle}/>
</div>

    <div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={rectangle}/>
    </div>
   
    <div className="box">
      <Image alt="gallery" className="w-full h-full object-cover object-center block" src={ractangle}/>
   </div>
  
 
  
    <div className="box">
      <Image alt="gallery" className="w-full h-full object-cover object-center block" src={image}/>
    </div>
    
    <div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={images}/>
    </div>
    
    <div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={square}/>
    </div>
    
    <div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={Square}/>
  </div>
  
  <div className="box">
  <Image alt="gallery" className="w-full object-cover h-full object-center block" src={sqare}/>
</div>

<div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={sqere}/>
</div>
<div className="box">
      <Image alt="gallery" className="w-full object-cover h-full object-center block" src={Rectangle31}/>
</div>


</section>
)}