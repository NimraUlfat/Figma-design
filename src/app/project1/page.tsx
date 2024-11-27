import Image from "next/image"
import image from "../../../public/images/image 33.png"
export default function Projects1(){
    return(
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" src={image}/>
      </div>
         
      <div className="lg:flex-grow  lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-5xl mb-4 font-small text-gray-400">Sample Project</h1>
        <p className="mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="flex items-center flex-wrap ">
          
</div>
        
         
        </div>
        </div>
        </div>
    )
}