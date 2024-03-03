import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <>
          <h1 className='text-5xl text-center pt-5 px-3'> 404</h1>
          <h2 className='text-4xl text-center px-3'>Uh oh! you are lost</h2>
          <h3 className='md:text-3xl text-xl text-center py-3 px-3'>this page you are looking dest not exist. how you are got there is a mystery but can click button given below go to back</h3>
          <button className='bg-[blue] table mx-auto px-3 text-2xl rounded-lg text-white my-5'>
            <Link to=""> Home</Link> 
             </button>
        </>
    );
}

export default Error;
