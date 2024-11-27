import Image from "next/image"
import image from "../../../public/images/image 30.png"
import images from "../../../public/images/images 32.png"
import imege from "../../../public/images/imege 33.png"
import Link from "next/link"
export default function Projects(){
    return(
        <div className="text-gray-600 body-font">
        <div>
        <h1 className="text-5xl font-small title-font mb-4 text-gray-400 tracking-widest">Our
</h1>
<h1 className="text-6xl font-medium title-font mb-4 text-gray-900 tracking-widest">
Projects</h1>
            <div className="Projects lg:w-6/6  md:ml-auto mx-centre mn-center">

            
    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" src={image}/>
      </div>
         
      <div className="lg:flex-grow  lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-5xl mb-4 font-small text-gray-400">Sample Project</h1>
        <p className="mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="flex items-center flex-wrap ">
          <Link href={"/project1"}>
              <li className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Veiw More 
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
</div>
        
         
        </div>
        </div>
        </div>
        </div>

        

            
    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" src={images}/>
      </div>
         
      <div className="lg:flex-grow  lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-5xl mb-4 font-small text-gray-400">Sample Project 2</h1>
        <p className="mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="flex items-center flex-wrap ">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Veiw More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
</div>
        
         
        
        </div>
        </div>
        </div>

        

            
    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" src={imege}/>
      </div>
         
      <div className="lg:flex-grow  lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-5xl mb-4 font-small text-gray-400">Sample Project 3</h1>
        <p className="mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="flex items-center flex-wrap ">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Veiw More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
</div>
        
         
        </div>
        </div>
        </div>
        </div>
        </div>
         
    )

}