import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { MainContext } from '../context/Context';
const Navbar = () => {
    const [toggle ,setToggle] =useState(false);
    const {cart}=useContext(MainContext);
    return (
        <header className='max-w-full sticky top-0 z-[99999] py-4 bg-[#f5f6fa] from-violet-500 to-fuchsia-500 flex justify-between px-3'>
            <div className=''>
                <img src="../img/logo/ec4.png" alt="" className='w-[200px]'/>
            </div>
            <nav>
                <ul className=' hidden md:flex gap-5 py-2 items-center'>
                    <li  className={`
                     text-black   p-1 cursor-pointer uppercase hover:text-slate-400 active:text-slate-400  
                     rounded `}>
                      <Link to="">  home</Link> 
                        </li>
                    <li  className={`
                     text-black p-1 cursor-pointer uppercase hover:text-slate-400   rounded `}>
                         <Link to="about"> about</Link>
                        </li>
                    <li  className={`
                    text-black  p-1 cursor-pointer uppercase hover:text-slate-400   rounded `}>
                      <Link to="contact">contact</Link>
                        </li>    
                    <li className='text-black  p-1 cursor-pointer uppercase hover:text-slate-400   rounded '>
                      <Link to="product">product</Link>
                        </li>
                    <li className='text-black  p-1 cursor-pointer uppercase hover:text-slate-400   rounded '>
                      <Link to="cart" > <h2 className='absolute top-[10px] right-[14px] text-red-300'> {cart.length}</h2>  <FaCartShopping  className='text-[blue]'/> </Link>
                        </li>
                </ul>
                {
                    toggle ?   <IoCloseSharp onClick={()=> setToggle(!toggle)} className='text-4xl md:hidden block  absolute top-[25px] cursor-pointer right-[20px] '/>
                    :<GiHamburgerMenu onClick={()=> setToggle(!toggle)} className='text-4xl md:hidden block  absolute cursor-pointer top-[25px] right-[20px] ' /> 
                }
              
                
                {/* side menu sm */}
                <ul  className={`
                ${toggle ? "left-0": "left-[-100%]"}
                absolute top-[85px] duration-200 md:hidden block  bg-black/[0.6] grid place-items-center  w-[50%] gap-5 py-2 items-center`}>
                    <li  className={`
                     text-white   p-1 cursor-pointer uppercase hover:text-slate-400 active:text-slate-400  
                     rounded `}>
                      <Link to="">  home</Link> 
                        </li>
                    <li  className={`
                     text-white p-1 cursor-pointer uppercase hover:text-slate-400   rounded `}>
                         <Link to="about"> about</Link>
                        </li>
                    <li  className={`
                    text-white  p-1 cursor-pointer uppercase hover:text-slate-400   rounded `}>
                      <Link to="contact">contact</Link>
                        </li>    
                    <li className='text-white  p-1 cursor-pointer uppercase hover:text-slate-400   rounded '>
                      <Link to="product">product</Link>
                        </li>
                    <li className='text-white  p-1 cursor-pointer uppercase hover:text-slate-400   rounded '>
                      <Link to="cart" > <FaCartShopping /> </Link>
                        </li>
                </ul>
            </nav>

        </header>
    );
}

export default Navbar;
