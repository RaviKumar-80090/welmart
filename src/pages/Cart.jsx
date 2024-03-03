import React, { useContext,useState } from 'react';
import { MainContext } from '../context/Context';
import { MdDelete } from "react-icons/md";
const Cart = () => {
    const {product,cart,count,single,color, removeHanlder} = useContext(MainContext);
    return (
        <div className='border'>
         <table className="w-full divide-y divide-gray-200">
              <thead className=" text-left bg-gray-50">
                <tr>
                  <th
                    className=" text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Produc-Image
                  </th>
                  <th
                    className=" text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Barnd
                  </th>
                  <th
                    className=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Qunatity
                  </th>
                  <th
                    className=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SubTotal
                  </th>
                  <th
                    className=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                    {
                        cart.map(
                            (itme,index)=>{
                                return(
                                    <tr key={index}>
                                     <td className=" py-4 whitespace-nowrap">
                                        <div className=' border md:w-[100px]'>
                                            <img src={itme.img} alt="" className='w-[100px]'/>
                                        </div>
                                     </td>
                                      <td className=" py-4 whitespace-nowrap">
                                        <div className=''>
                                          <div><h2 className='  '>Name: {single.name} </h2></div>
                                          <div>   <span className='mr-2'> Color: </span> <span className='px-2 rounded-full' style={{
                                            backgroundColor:color
                                                }}></span></div>
                                        </div>
                                        </td>
                                       <td className="py-4 whitespace-nowrap">
                                        <div className='mx-auto'>
                                           {count}
                                        </div>
                                        </td>
                                        <td className="py-4 whitespace-nowrap">
                                        <div className='mx-auto'>
                                           {single.price * count/100}
                                        </div>
                                        </td>
                                        <td className="py-4 whitespace-nowrap">
                                            <MdDelete onClick={()=> removeHanlder(index)} className='text-xl text-red-500 cursor-pointer'/>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                {/* Add more rows as needed */}
              </tbody>
            </table>
        </div>
    );
}

export default Cart;
