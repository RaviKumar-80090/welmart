import React, { useContext, useState } from 'react';
import { MainContext } from '../context/Context';
import { Link } from 'react-router-dom';
const Grid = ({catHandler,category,company,range,inp}) => {
    const {FeaHandler} =useContext(MainContext);
    let {product} = useContext(MainContext);
    // product filter
    if( catHandler != null){
        product=product.filter(
            (product)=> product.category === catHandler)
    }
//   sorting product by drapdown
    if(company != "All"){
        product =product.filter(
            (items ,index)=> items.company == company 
        )
    }
//   Price Sort by  the Range 

if( range != 0){
    product =product.filter(
        (items ,index)=> items.price == range 
    )
}
//  search by the seach box 
 if( inp.length != 0){
    product= product.filter(
        (items)=> items.name == inp
    )
 }
    return (
        <>
        <h3 className='text-center text-3xl text-[#55efc4]'>{product.length} Product</h3>
        <div className=' grid md:grid-cols-3 grid-cols-2 py-3 place-items-center px-2 gap-4'>
            {
                product.map(
                    (data)=>{
                        return(
                            <div onClick={()=> FeaHandler(data.id) } className='' key={data.id}>
                                <Link to={`/single/${data.id}`}>
                                    <div className='psodo group'>
                                        <h3 className='absolute bg-white rounded-lg px-3 top-[5px]
                                        md:text-xl text-slate-600 right-0'>{data.category}</h3>
                                    <img src={data.image} alt="image" className='
                                            duration-1000 group-hover:scale-110' />
                                        
                                    </div>
                                    <div className='flex justify-between items-center'>
                                            <h2 className='md:text-xl text-[#55efc4]'>{data.name}</h2>
                                            <h2 className='md:text-xl text-[#00b894]'>₹ {data.price /100}</h2>
                                    </div>

                                </Link>
                                
                               
                            </div>

                        )
                    }
                )
            }
        </div>
       </> 
    );
}

export default Grid;
