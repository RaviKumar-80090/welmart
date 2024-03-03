import React, { useContext } from 'react';
import { MainContext } from '../context/Context';
import { Link } from 'react-router-dom';

const List = ({catHandler,company,range,inp}) => {
    const {FeaHandler} = useContext(MainContext);
    // Filter the Product by the category
    let {product}= useContext(MainContext);
    if( catHandler != null){
        product = product.filter(
            (prod)=> prod.category != catHandler)
    }
    //   sorting product by drapdown
    if(company != "All"){
        product =product.filter(
            (items ,index)=> items.company == company 
        )
    }
    // Range
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
        {
            product.map(
                (data)=>{
                    return(
                        <div onClick={()=> FeaHandler(data.id) }
                         className='border  m-5 rounded-xl p-2' key={data.id}>
                            <Link to={`/single/${data.id}`} className='grid grid-cols-2 gap-3'>
                                <div className='overflow-hidden rounded-lg md:my-5 group w-[250px] h-[150px]'>
                                        <h3 className='absolute bg-white rounded-lg px-3 top-[5px]
                                        md:text-xl text-slate-600 right-0'>{data.category}</h3>
                                    <img src={data.image} alt="image" className='
                                            duration-1000 group-hover:scale-110     ' />
                                        
                                    </div>
                                <div className=' md:col-span-1 col-span-2'>
                                    <h2 className='md:text-xl'>{data.name}</h2>
                                    <h3 className='md:text-lg'>₹ {data.price/100}</h3>
                                    <h3 className='md:text-sm text-[10px] text-justify'>{data.description}</h3>
                                    <button className='border capitalize px-3 rounded-lg bg-slate-500 hover:bg-slate-900  text-white duration-200 my-3 '> read more</button>
                                </div>
                                </Link>
                         </div>

                    )
                }
            )
        }
           
        </>
        
    );
}

export default List;
