"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useUser } from "../context/UserContext";



const data = [
    {menu: 'Home', link: '/'},
    {menu: 'Products', link: '/products'},
    {menu: 'Contact', link: '/contact'},
    {menu: 'About', link: '/about'},
]




const Navbar = () => {


const { user, logout } = useUser();
    const [active, setactive] = useState(false);
 
 
 
 
  const menu = () => {
    setactive((prevstate) => !prevstate);
  };


  return (
    <nav className="flex items-center justify-between text-black body-font py-5 w-[90%] mx-auto sticky top-0 z-50 bg-white">
     <div className="flex">
     <Link
          href="/"
          className="flex title-font font-medium items-center text-black  hover:cursor-pointer"
        >
          <Image
            src="/LogoImage.png"
            width={56}
            height={56}
            alt="OrangeBookPublicationLogo"
          />
          <span className="ml-3 text-xl font-semibold">
            Orange Book <br /> Publication
          </span>
        </Link>
     </div>
        <div className="ml-auto pl-12 lg:ml-0 md:hidden hidden gap-8 lg:flex lg:flex-wrap font-semibold items-center text-base justify-center">

{
    data.map((e,id)=>{
      return  <Link key={id}
        href={e.link}
        className="hover:text-orange-500 hover:cursor-pointer text-lg"
      >
        {e.menu}
      </Link>
    })
}

</div>


      <div className="pr-4 relative">
          <button
            className="flex items-center justify-center text-3xl lg:hidden"
            onClick={menu}
          >
            {!active ? (
              <div>
                <FaBars />
              </div>
            ) : (
              <MdClose />
            )}
          </button>
        </div>
      <div
        className={`md:ml-auto top-[100%] absolute z-10 w-full p-4 rounded-3xl lg:hidden flex-col items-center text-base justify-center gap-5 bg-orange-200 mx-auto mt-4 ${
          active ? "flex" : "hidden"
        }`}
      >
    {
    data.map((e,id)=>{
      return  <Link key={id}
        href={e.link}
        className="mr-5 hover:text-black hover:drop-shadow hover:cursor-pointer"
      >
        {e.menu}
      </Link>
    })
}
      </div>
      <div>
{ user ?  <div>Hello <br/> {user.username}</div> : <div className="space-x-4">
        <button className="px-4 py-2 bg-orange-400 rounded-full border-2 border-orange-500 text-white text-lg">
          <Link href="/login" className="hover:cursor-pointer">Login</Link>
        </button>
        <button className="px-4 py-2 hover:bg-orange-400 rounded-full border-2 border-orange-500 text-orange-500 hover:text-white text-lg">
          <Link href="/register" className="hover:cursor-pointer">Sign up</Link>
        </button>
      </div>}
    
      </div>
    </nav>
  );
};

export default Navbar;
