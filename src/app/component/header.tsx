import Image from "next/image"
import Group from "../../../public/images/Group 11.png"
import Link from "next/link"
export default function Header(){
    return(
        <div className="header flex items-center justify-between px-4 py-2">
  <div className="logo">
    <Image
      alt="gallery"
      className="w-[80px] h-[50px] object-center"
      src={Group}
    />
  </div>
  <ul className="header-buttons flex space-x-4">
        <Link href={"/"}>
          <li className="relative group cursor-pointer">
            Main
            {/* Top line (before) */}
            <span className="absolute left-0 right-0 top-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            {/* Bottom line (after) */}
            <span className="absolute left-0 right-0 bottom-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </Link>
        <Link href={"/gallery"}>
          <li className="relative group cursor-pointer">
            Gallery
            <span className="absolute left-0 right-0 top-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </Link>
        <Link href={"/projects"}>
          <li className="relative group cursor-pointer">
            Projects
            <span className="absolute left-0 right-0 top-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </Link>
        <Link href={"/certification"}>
          <li className="relative group cursor-pointer">
            Certifications
            <span className="absolute left-0 right-0 top-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="relative group cursor-pointer">
            Contacts
            <span className="absolute left-0 right-0 top-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5  bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </Link>
      </ul>
    </div>
  );
}