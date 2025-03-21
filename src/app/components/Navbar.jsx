"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useUser } from "../context/UserContext";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

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
    <nav className="flex items-center justify-between bg-orange-50 text-black body-font py-5 px-16 sticky top-0 z-50">
     <div className="flex">
     <Link
          href="/"
          className="flex title-font items-center text-black  hover:cursor-pointer"
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
        <div className="ml-auto pl-12 lg:ml-0 md:hidden hidden gap-8 lg:flex lg:flex-wrap  items-center text-base justify-center">

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
{ user ?  <div className="flex gap-6 items-center justify-center"><div className="text-3xl flex items-center"><FaUserCircle /></div><div>Hello, <br/> {user.username}</div> <div className="text-3xl"><button className="flex hover:text-red-500 items-center" onClick={logout}><MdLogout/> </button></div></div> : <div className="space-x-4">
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
