import Image from "next/image"
import Group from "../../../public/images/Group 11 1.png"
export default function Footer(){
    return(
        <footer className="w-[1440] h-[417] text-gray-600 body-font">
  <div className="bg-black container px-5 py-24 mx-auto flex md:items-center ">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      
    </div>
    <div className="logo">
      <Image alt="gallery" className="w-[80px] object-object-left-top h-[50px] object-center block" src={Group}/>
</div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    
      <div className="lg:w-2/2 md:w-1/2 w-full px-4">
      
        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Information</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white-900">Main</a>
          </li>
          <li>
            <a className="text-white-900">Gallery</a>
          </li>
          <li>
            <a className="text-white-900">Projects</a>
          </li>
          <li>
            <a className="text-white-900">Certifications</a>
          </li>
          <li>
            <a className="text-white-900">Contacts</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-White-900 tracking-widest text-sm mb-3">Contacts</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white-900">
            1234 Sample Street Asutin Texas 78704</a>
          </li>
          <li>
            <a className="text-white-900">512.333.2222</a>
          </li>
          <li>
            <a className="text-white-900">sampleemail@gmail.com</a>
          </li>

        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Social Media</h2>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      
      
    </div>
  </div>
</footer>
)}
    
