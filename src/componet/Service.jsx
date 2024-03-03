import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { SiFsecure } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Service = () => {
    return (
        <div className='grid grid-cols-3 my-10 '>
            <div className='bg-[#f5f6fa] flex flex-col items-center justify-center rounded-lg mx-5 p-5 '>
                <div className='bg-white  rounded-full'>
                    <CiDeliveryTruck className='m-2 md:text-5xl text-2xl text-[blue]'/>
                </div>
                <h1 className='pl-3 text-center md:font-semibold'>Free and fast Delivery</h1>
            </div>
            <div className=''>
                <div className='bg-[#f5f6fa] flex md:flex-row flex-col items-center rounded-lg p-2'>
                    <div className='bg-white  rounded-full'>
                       <SiFsecure className='m-2 md:text-4xl text-2xl text-[blue]'/>
                    </div>
                    <h1 className='pl-3 text-center md:font-semibold'>Non-contact Shipping</h1>
                    
                </div>
                <div className='bg-[#f5f6fa] mt-2 flex md:flex-row flex-col items-center rounded-lg p-2'>
                    <div className='bg-white  rounded-full'>
                       <GiReceiveMoney className='m-2 md:text-4xl text-2xl text-[blue]'/>
                    </div>
                    <h1 className='pl-3 text-center md:font-semibold'>Non-contact Shipping</h1>
                    
                </div>
            </div>
            <div className='bg-[#f5f6fa] flex flex-col items-center justify-center rounded-lg mx-5 p-5 '>
                <div className='bg-white  rounded-full'>
                    <RiSecurePaymentLine className='m-2 md:text-5xl text-2xl text-[blue]'/>
                </div>
                <h1 className='pl-3 text-center md:font-semibold'>Free and fast Delivery</h1>
            </div>
        </div>
    );
}

export default Service;
