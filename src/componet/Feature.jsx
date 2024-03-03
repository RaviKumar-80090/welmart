import React, { useContext } from 'react';
import { MainContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Feature = () => {
    const {product, setProduct} = useContext(MainContext);
    const {Feature} = useContext(MainContext);
    const {FeaHandler} = useContext(MainContext);
    // create a function to transfer data to context
    return (
        <div className=' bg-[#f5f6fa] grid md:grid-cols-3 grid-cols-2 py-3 place-items-center px-2 gap-4'>
            {
                Feature.map(
                    (data)=>{
                        return(
                            <div onClick={()=> FeaHandler(data.id) } className='' key={data.id}>
                                <Link to={`single/${data.id}`}>
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
    );
}

export default Feature;
