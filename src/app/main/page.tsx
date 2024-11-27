import Image from "next/image"
import Rectangle from "../../../public/images/Rectangle 6.png"
import Ractangle from "../../../public/images/Rectangle8.png"
import Rictangle from "../../../public/images/Rictangle 9.png"
import Rectingle from "../../../public/images/Rectingle 10.png"
import image from "../../../public/images/image 12.png"
import i from "../../../public/images/i.png"
import j from "../../../public/images/j.png"
import circle from "../../../public/images/circle 17.png"
import images from "../../../public/images/images 15.png"
import square from "../../../public/images/square 16.png"
import image17 from "../../../public/images/image17.png"
import image18 from "../../../public/images/image18.png"
import Frame from "../../../public/images/Frame 10.png"
import Frame9 from "../../../public/images/Frame9.png"
import Frame8 from "../../../public/images/Frame8.png"
import slide1 from "../../../public/images/slide1.png"

export default function Main() {
  return (
    <div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <br></br>
        <h2 className="text-sm title-font-bold sm:text-5xl text-gray-500 tracking-widest">PROJECT</h2>
      
       <br></br>
        <h3 className="text-sm title-font-bold sm:text-7xl text-black tracking-widest">Lorum</h3>

        <div className="absolute bottom-0 left-0 flex w-[200px] h-[100px] py-10 items-center justify-center"> 
  <div className="flex items-center justify-center mr-2"> 
    <Image
      src={Frame8}
      alt="sideimage"
      width={52}
      height={53}
      className="object-cover"
    />
  </div>
  <div className="flex items-center justify-center"> 
    <Image
      src={Frame9}
      alt="sideimage"
      width={52}
      height={53}
      className="object-cover"
    />
  </div>
</div>


        <div className="relative w-full lg:w-3/6 md:ml-auto">
          <div className="w-full">
            <Image
              src={Rectangle} 
              alt="rectangle"
              width={600}
              height={800}
            />
          </div>

          <div className="absolute bottom-0 left-0 w-[200px] h-[100px] py-10">
            <Image
              src={Frame} 
              alt="sideimage"
              width={200}
              height={100}
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    <div className="text-gray-600 body-font">
    <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" src={Rectangle}/>
      </div>
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <Image className="object-cover object-center rounded" alt="hero" src={Rictangle}/>
      </div>
      <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
        <Image className="object-cover object-center rounded" alt="hero" src={Rectingle}/>
      </div>
      <div className="lg:flex-grow  lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-5xl text-5xl mb-4 font-small text-gray-400">About</h1>
        <p className="mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="flex items-center flex-wrap ">
        <button className="flex ml-auto text-white bg-white-300 border-0 py-2 px-6 focus:outline-none hover:bg-white-300 rounded">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">READ MORE
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a></button>
</div>
        
         
        </div>
        </div>
      </div>
    </div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="text-6xl font-small title-font mb-4 text-gray-400 tracking-widest">Main Focus/Mission Statement
    </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image className="object-cover object-center rounded" alt="hero" src={i}/>
          <div className="flex-grow sm:pl-8 sm:text-2xl">
            <p className="mb-4">Lorem ipsum dolor sit amet, 
              <br></br>
              consectetur adipiscing elit. 
              <br></br>
              Sed efficitur, lectus et facilisis placerat.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image className="object-cover object-center rounded" alt="hero" src={j}/>
          <div className="flex-grow sm:pl-8 sm:text-2xl">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
            <br></br>
               adipiscing elit. Sed efficitur, lectus et
               <br></br>
                facilisis placerat, magna mauris porttitor
                <br></br>
                 tortor, a auctor est felis ut nisl.</p>
            
          </div>
        </div>
      </div>
      
      </div>

      </div>
      </section>

<section className="text-gray-600 body-font">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    
    <div className="relative w-full mx-auto">
      <Image
        alt="gallery"
        className="w-full object-cover h-64 md:h-80 lg:h-96 object-center block"
        src={circle}
      />
      
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">Sample Project</h1>
        
        {/* View More Button */}
        <a href="#more" className="bg-gray-800 hover:bg-indigo-300 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300">
          View More
        </a>
      </div>
    </div>

    <div className="w-full mx-auto">
      <Image
        alt="gallery"
        className="w-full object-cover h-64 md:h-80 lg:h-96 object-center block"
        src={images}
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-4 mt-4">
  
    <div className="w-full md:w-4/6 mx-auto">
      <Image
        alt="gallery"
        className="w-full object-cover h-full object-center block"
        src={square}
      />
    </div>
    <div className="w-full md:w-5/6 mx-auto">
      <Image
        alt="gallery"
        className="w-full object-cover h-full object-center block"
        src={image17}
      />
    </div>
    <div className="w-full md:w-5/6 mx-auto">
      <Image
        alt="gallery"
        className="w-full object-cover h-full object-center block"
        src={image18}
      />
    </div>
  </div>
</section>

<section className="text-gray-600 body-font relative">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <br />
    
    {/* Contact Form on the Left */}
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0 order-last md:order-first">
      <h1 className="text-5xl font-small title-font mb-4 text-gray-400 tracking-widest">
        Contact us
      </h1>

      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone number</label>
        <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="interested_in" className="leading-7 text-sm text-gray-600">Interested In</label>
        <input type="text" id="interested_in" name="interested_in" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
    </div>

    {/* Image on the Right */}
    <div className="lg:max-w-lg lg:w-full w-5/6 mb-10 md:mb-0 order-first md:order-last">
      <Image className="object-cover object-center rounded" alt="hero" src={image} />
    </div>

  </div>
  
  </section>
    </div>


        

    )
}