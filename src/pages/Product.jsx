import React, { useContext, useState } from 'react';
import { MainContext } from '../context/Context';
import List from '../componet/List';
import { Link, Outlet } from 'react-router-dom';
import Grid from '../componet/Grid';
import { MdOutlineGridView } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
const Product = () => {
    const {product,setProduct,category,sort,setSort,sortHandler} = useContext(MainContext);
    const [catHandler,setCateHandlder] = useState(null);
    const [change,setChange]= useState(null);
    const [listView,setListView] = useState(false);
    const [company ,setCompany] = useState('All');
    const [range,setRange]= useState(0);
    const data=[<MdOutlineGridView/>,<CiBoxList/>];
    // controlled-component
    const [inp ,setInp] = useState('');
    const gridHanlder=(gId)=>{
        // console.log(gId);
        setChange(gId);
    }
    // sortHandle
    // range Finder
    const RangeArr= product.map(
        (pric)=> pric.price);
    // console.log(RangeArr);
    const InpSearch=(event)=>{
            setInp(event.target.value);
            event.target.value="";
    }
    // Rseset Handler
    const resetHandler =()=>{
        setCateHandlder(null);
        setCompany("All");
        setRange(1);
    }
    return (
        <div className=' grid grid-cols-4'>
            <div className='col-span-1 '>
                <div className='px-4 pt-5'>
                   <input type="text" placeholder='search' onChange={InpSearch}
                   value={inp}  className='w-full border rounded-lg py-1 px-2 '/>
                </div>
               
                <h2 className='md:text-2xl text-xl font-bold capitalize text-[#5f27cd] py-2 text-center'> Category</h2>
                <ul className='md:p-4'>
                    <li onClick={()=> setCateHandlder(null) } className={`
                    ${catHandler == null ? "bg-violet-500   text-red-800" : ""}
                    md:text-xl capitalize px-2 py-1 cursor-pointer border-b`}> All</li>
                    {
                        category.map(
                            (cate,index)=>{
                                return(
                                    <li onClick={()=>setCateHandlder(cate.category) } className={`
                                    ${index === category.length-1 ? "" : "border-b"}
                                    ${catHandler == cate.category ? "bg-violet-500   text-red-800  " :""}
                                    md:text-xl capitalize px-2 py-1 cursor-pointer`} key={cate.id}>
                                        {cate.category}
                                   </li>

                                )
                            }
                        )
                    }
                
                    
                </ul>
                {/* company drapdown */}
                
                <div className='md:px-5  px-2'>
                        <label htmlFor="" className='md:text-2xl'>Company</label>
                        <br/>
                        <select onChange={(e)=> setCompany(e.target.value) } value={company} className='w-full border py-1 rounded-lg focus:outline-none px-2 md:mt-3 md:text-xl'>
                            <option value="all">All</option>
                            <option  value="dell">Dell</option>
                            <option value="samsung"> Samsung </option>
                            <option value="apple"> Apple</option>
                            <option value="nokia">Nokia</option>
                            <option value="asus">Asus</option>
                            <option value="lenova">Lenovo</option>
                        </select>
                </div>
                
                {/* company Drapdown */}
                {/* Range */}
                <div className='md:p-5 p-2'>
                   <h2 className='text-2xl'>₹ {range} </h2>
                   <input onChange={(e)=> setRange(e.target.value)} type="range" 
                   value={range}  min="1" max={`${Math.max.apply(null,RangeArr)}`} className='w-full' />
                </div>
                
                {/* Range */}
                <button onClick={resetHandler} className='px-4 bg-red-600 rounded-lg table mx-auto text-white'> Reset</button>
            </div>
            
            <div className='col-span-3  gap-2'>
                <div className='flex justify-between px-3 items-center '>
                    <ul className='flex gap-3 py-2  items-center pt-3'>
                        {
                            data.map(
                                (items,index)=>{
                                    return(
                                        <li onClick={()=> gridHanlder(index)} className={`
                                        ${change === index ? "text-red-900 !bg-[blue]" : ""}
                                        
                                        bg-slate-600 px-3 rounded-lg 
                                        text-white cursor-pointer py-1 text-center`} key={index}>
                                        {items}
                                    </li>

                                    )
                                    
                                }
                            )
                        }
                    </ul>
                     <select onChange={(e)=> sortHandler(e.target.value)} value={sort} className='w-[150px] focus:outline-none border rounded-lg '>
                        <option value="Default">Default</option>
                        <option value="A-Z"> A-Z</option>
                        <option value="Z-A"> Z-A</option>
                        <option value="Low-High">Low-High</option>
                        <option value="High-Low">High-Low</option>
                     </select>
                     
                </div>
             
                {
                    change === null ? <Grid catHandler={catHandler} inp={inp} category={category} range={range} company={company}/> 
                    : change== listView ? <Grid catHandler={catHandler} company={company}/> 
                    : <List catHandler={catHandler} company={company} range={range} inp={inp}/>
                }
                {/* <li onClick={gridHanlder} className='bg-[blue] px-3 rounded-lg text-white cursor-pointer'>Grid</li>
                <li onClick={listHanlder} className='bg-[blue] px-3 rounded-lg text-white cursor-pointer '>List</li> */}
            </div>
        </div>
    );
}

export default Product;
