import React from 'react';

const Trusted = () => {
    
    return (
        <>
        <h2 className='bg-[#f5f6fa] text-center text-slate-600 font-semibold text-5xl py-10'>Trusted Compnay</h2>
        <div className='grid md:grid-cols-4  grid-cols-2 place-items-center gap-5 bg-[#f5f6fa] py-10 px-2 place-items-center'>
            <div className=''>
                <img src="../img/logo/tr14.jpg" alt="" className='h-[200px] w-[200px]' />
            </div>
            <div className='border'>
                <img src="../img/logo/tr16.jpg" alt="" className='h-[200px] w-[200px]' />
            </div>
            <div className='border'>
                <img src="../img/logo/tr17.jpg" alt="" className='h-[200px] w-[200px]' />
            </div>
            <div className='border'>
                <img src="../img/logo/tr15.avif" alt="" className='h-[200px] w-[200px]'/>
            </div>
            
        </div>
        </>
    );
}

export default Trusted;
