import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    const data = {
        name:"WelMart",
    }
    return (
        <div className='bg-[#192a56] mt-[70px]'>
            <section className='lg:w-[800px] md:w-[600px] 
            grid grid-cols-2 place-items-center w-[350px] bg-[#f5f6fa] rounded-lg mx-auto
             -translate-y-9 '>
                <div className='py-2'>
                    <h2 className='md:text-xl text-scale-800 capitalize'>ready to get Started?</h2>
                    <h2 className='md:text-xl text-scale-800 capitalize'>talk to us today</h2>
                </div>
                <button className='bg-[blue] px-3 py-1 rounded-lg'>
                    <Link to=""> Get started</Link></button>
            </section>
            <footer className='relative grid md:grid-cols-4 grid-cols-2 max-w-[1000px] mx-auto'>
                <div className='m-5'>
                    <h1 className='text-xl text-white pb-2 capitalize'>{data.name}</h1>
                    <p className='text-white capitalize'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, id.</p>
                </div>
                <div className='m-5'>
                    <p className='text-xl pb-2 text-white capitalize'>subscribe to get importent update</p>
                    <form action="">
                        <input type="text" className='w-full rounded-lg' />
                        <input type="submit" value="subscribe" className='bg-[blue] my-2 px-2 rounded-lg text-white'/>
                    </form>
                </div>
                <div className='m-5'>
                    <h2 className='text-white text-xl capitalize'>follow us</h2>
                    <div className='w-full grid grid-cols-5 text-white text-xl p-4'>
                     <Link to="https://www.youtube.com/" target="_blank">
                       <FaYoutube/> 
                     </Link>   
                        <FaInstagram/>
                        <FaWhatsapp/>
                        <FaTwitter/>
                        <FaFacebookF/>
                    </div>

                </div>
                <div className='m-5'>
                    <h2 className='text-xl text-white capitalize'>Contact us</h2>
                    <Link to="+1234567890" >
                        <h2 className='text-white'> +1234567890</h2>
                            </Link>
                </div>
            </footer>
            <div className='max-w-[1000px] mx-auto'>
            <hr />
            <h2 className='text-xl text-white text-center py-2 capitalize'> @{ new Date().getFullYear()} all right reserved by Welmart</h2>
            </div>
        
        </div>
    );
}

export default Footer;
