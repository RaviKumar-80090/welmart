import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainContext } from '../context/Context';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceOff } from "react-icons/tb";
import { SiFsecure } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { MdOutlineStar,MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";
const SingleProduct = () => {
    const {single,AddtoCart,color,ColorHanlder} = useContext(MainContext);
    const {count,setCount} = useContext(MainContext);
    const {IncHandler,DescHandler} = useContext(MainContext);
    const [img,setImg] = useState('https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    // console.log(color)
     const ImgHandler =(eId)=>{
        // console.log(eId);
        setImg(eId);
     }
    // console.log(col);
    return (
        <div className=''>
            <div className='flex  gap-2 pl-3'>
             <Link to="/"> 
                <h2 className='text-xl text-[#55efc4] py-1'> Home</h2>
                </Link>
                <h2 className='text-xl py-1'> / {single.name}</h2> 
            </div>
           
            <div className='grid grid-cols-5'>
                <div className='col-span-1 place-self-start '>

                    {
                      single.image.map(
                            (data)=>{
                                return(
                                    <div onClick={()=> ImgHandler(data.url)} className='p-3' key={data.id}>
                                        <img src={data.url} alt="image" className='rounded-lg ' />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <div className='md:col-span-2 col-span-4 flex justify-center items-center'>
                    <div className='p-2'>
                        <img src={img} alt="image" className='rounded-lg w-[400px]' />
                    </div>
                </div>
                <div className='md:col-span-2 col-span-5  p-5 '>
                    <h2 className='text-2xl capitalize text-[#0984e3] py-2'>{single.name}</h2>
                  {/*rating   */}
                    {
                         Array.from({length:5}, (ele,index)=>{
                            let number= index +0.5;
                            return(
                                <span className='inline-flex justify-center text-xl' key={index} >
                                    {
                                    single.stars >= index+1 ? <MdOutlineStar className='text-[yellow]'/> 
                                    : single.starts >= number ? <MdOutlineStarOutline className=''/>
                                    : <MdOutlineStarHalf className=' text-[yellow]'/>
                                    }
                                    </span>
                            )
                         }) 
                    }
                     <span className='text-xl text-slate-500 pl-2'>({single.reviews} customer Reviews)</span>
                    <div className='text-xl'>
                      MRP:  <del className='text-2xl text-red-800  py-2'> ₹ {single.price/100}</del>
                    </div>
                    
                    <h2 className='text-2xl text-[#6c5ce7] py-2'>Deal of the days ₹ {3399}.00</h2>
                    <h3 className='text-xl text-justify py-2'> <span className='font-bold'>Description:</span>  {single.description}</h3>
                    <div className='grid grid-cols-4 my-4 '>
                        <div className='flex flex-col justify-center items-center'>
                        <TbTruckDelivery className='text-3xl text-[#48dbfb]'/>
                        <p className='text-[14px] text-[#6c5ce7]'>Free Delivery</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <TbReplaceOff className='text-3xl text-[#48dbfb]'/>
                            <p className='text-[14px] text-[#6c5ce7]' >30 days Replacement </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                          <TbTruckDelivery className='text-3xl text-[#48dbfb]'/>
                          <p className='text-[14px] text-[#6c5ce7]'>welmart delivery</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <SiFsecure className='text-3xl text-[#48dbfb]'/>
                           <p className='text-[14px] text-[#6c5ce7]'>2 years warranity </p>
                        </div>
                    </div>
                    <hr />
                    <h2 className='text-xl py-2 text-red-700'>Available:  <span className='text-red-600'>in stock {single.stock}</span> </h2>
                    <h2 className='text-xl capitalize'>ID: <span className='text-[blue]'> {single.id}</span> </h2>
                    <h2 className='text-xl capitalize '>Brands: <span className='text-[blue]'>  {single.company} </span></h2>
                    <hr className='bg-black my-2' />
                    <div className='flex gap-3'>
                    <h2  className='text-2xl font-bold'>Colors :</h2>
                    {
                        single.colors.map(
                            (current, index)=>{
                                return(

                                    <button onClick={()=> ColorHanlder(current) } className={`rounded-full px-5
                                    ${color === current ? "active:opacity-100" : " active:opacity-50"}`}
                                     style={{backgroundColor: current }} key={index}>
                                        {
                                            color === current ? <FaCheck className='text-white'/>
                                            : ""
                                        }
                                        
                                    </button>
                                )
                            }
                        )
                    }
                    </div>
                    {
                        single.stock == 1 ? ""
                        :<>
                        <div className=' border flex items-center my-2'>
                        <button onClick={DescHandler} className='bg-[blue] px-5 py-1 text-white rounded-lg my-4 mx-4 text-2xl text-center'>-</button>
                        <h3 className='text-3xl'>{count}</h3>
                        <button onClick={IncHandler} className='bg-[blue] px-5 py-1 text-white rounded-lg my-4 mx-4 text-2xl text-center'>+</button>
                    </div>
                    <Link to="/cart" 
                    onClick={()=> AddtoCart({img})}>
                       <button className='text-2xl bg-[blue] px-2 text-white py-1 rounded-lg' >Add to Cart</button>
                         </Link>
                   
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
