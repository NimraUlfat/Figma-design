import Image from "next/image"
import image from "../../../public/images/image 14.png";
export default function Contact(){
    return(
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
  <h1 className="text-5xl font-small title-font mb-4 text-gray-400 tracking-widest">Contact 
</h1>
<h1 className="text-6xl font-bold title-font mb-4 text-gray-900 tracking-widest">
Information</h1>
<h1 className="text-1xl font-bold">Company Name</h1>
<p>1234 Sample Street Austin Texas 76401</p>
<br></br>
<span className="title-font font-medium text-1xl text-gray-900">512.333.2222</span>
<br></br>
<br></br>
<span className="title-font font-medium text-1xl text-gray-900">sampleemail@gmail.com</span>

    <br></br>
    <div className="flex">
  <button className="flex text-white bg-black border-0 py-2 px-6">Contact us</button>
</div>
      <br></br>
<div className="flex flex-row-reverse lg:max-w-lg lg:w-full w-5/6 mb-10 md:mb-0 order-first md:order-last">
  <Image className="object-cover object-center rounded" alt="hero" src={image} />
</div>
</div>
</section>

</div>
    
    )
}