import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = ({myData}) => {
    const {name} = myData;
    return (
        <div className='max-full grid md:grid-cols-4  md:my-10 my-3'>
            <div className=' col-span-2 md:my-10 my-3 px-3'>
                <h2 className='text-slate-700 text-xl md:px-0 px-4 font-semibold pt-[40px] capitalize'>welcome</h2>
                <h1 className='text-5xl py-3 md:px-0 px-4 font-semibold capitalize'>
                    {name}</h1>
                <p className='md:px-0 px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Obcaecati, consequuntur! Voluptatum eum, adipisci repellat
                      repellendus voluptas nobis praesentium rerum 
                    modi similique reiciendis necessitatibus minus consectetur
                     natus odio nihil quidem tempore?</p>
                     <Link>
                        <button className='bg-[blue] md:mx-0 mx-4 px-3 py-1 rounded-lg my-4'>Shop Now</button>
                     </Link>
            </div>
            <div className=' col-span-2'>
                <div className='ter '>
                  <img src="../img/logo/hero.jpg" alt="hero-image"  className=''/>
                </div>
               
            </div>
        </div>
    );
}

export default HeroSection;
