"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../context/UserContext";
import { CiAt, CiLock, CiUser } from "react-icons/ci";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { register } = useUser();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-10 p-6 border rounded">
    //   <h2 className="text-2xl mb-4">Register</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input name="username" placeholder="Username" onChange={handleChange} required />
    //     <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
    //     <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
     <div className="h-screen flex">
            <div
              className="hidden lg:flex w-full lg:w-1/2 login_img_section
              justify-around items-center">
              <div
                className=" 
                      bg-black 
                      opacity-20 
                      inset-0 
                      z-0"></div>
              <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
                <p className="text-white mt-1">The simplest app to use</p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <a
                    href="#"
                    className="hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-orange-400 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
              <div className="w-full px-8 md:px-32 lg:px-24">
                <form
                  className="bg-white rounded-md shadow-2xl p-5"
                  onSubmit={handleSubmit}>
                  <h1 className="text-gray-800 font-bold text-2xl mb-1">
                    Hello !
                  </h1>
                  <p className="text-sm font-normal text-gray-600 mb-8">Welcome to Orangebook Publication</p>
                  <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <div className="text-lg text-gray-600"><CiUser/></div>
                  <input name="username" placeholder="Username"
                   className=" pl-2 w-full outline-none border-none"
                    onChange={handleChange} required />
                  </div>
                  <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <div className="text-lg text-gray-600"><CiAt/></div>
                    <input type="email" name="email" 
                     className=" pl-2 w-full outline-none border-none"
                    placeholder="Email" onChange={handleChange} required />
                  </div>
                  <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                   
                  <div className="text-lg text-gray-600"><CiLock  /></div>
                  
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                      className="pl-2 w-full outline-none border-none"
                      id="password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full bg-orange-600 mt-5 py-2 rounded-2xl hover:bg-orange-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                    Register
                  </button>
                  <div className="flex justify-between mt-4">
    
                    <a
                      href="#"
                      className="text-sm ml-2 hover:text-amber-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                      Already have an account yet?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
       
  );
}
