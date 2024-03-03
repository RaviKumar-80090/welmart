import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componet/Navbar';
import Footer from '../componet/Footer';

const Main = () => {
    return (
       <>
         <Navbar/>
         <div className='max-w-[1220px] mx-auto'>
         <Outlet/>
         </div>
         
         <Footer/>
       </>
    );
}

export default Main;
