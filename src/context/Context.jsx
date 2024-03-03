import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const MainContext = createContext();
const Context = (props) => {
    const [product,setProduct] = useState([]);
    let [single,setSingle] = useState('');
    const [color,setColor]= useState(null);
    const [count,setCount] = useState(0);
    const [category,setCategory] = useState([
        {id:1,category:"mobile"},
        {id:2, category:"laptop"},
        {id:3,category:"accessories"},
        {id:4,category:"watch"},
        
    ]);
    const [sort,setSort] = useState('');
    const [filterSort, setFilterSort] = useState([]); 
    const [cart,setCart] = useState([]);

    // count function Inc
     const IncHandler=()=>{
        // console.log()
        setCount(count+1);
     }
//  Count Desc
const DescHandler=()=>{
    if( count != 0){
        setCount(count-1);
    }
}
    const FeaHandler =(pId)=>{
        // console.log(pId);
        axios.get(`https://api.pujakaitem.com/api/products?id=${pId}`)
        .then(
            (success)=>{
                // console.log(success.data);
                setSingle( success.data);
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )  
    }
    useEffect(
        ()=>{
            if(single.length != 0){
                localStorage.setItem("Single",JSON.stringify(single))
            }
            if( cart.length != 0){
                localStorage.setItem("cart",JSON.stringify(cart))
                 localStorage.setItem("color",JSON.stringify(color));
                 localStorage.setItem("count",JSON.stringify(count));
            }
        
        },[single,cart]
    )
    useEffect(
        ()=>{
            axios.get("https://api.pujakaitem.com/api/products")
            .then(
                (success)=>{
                    // console.log(success.data.);
                    setProduct(success.data);
                   
                }
            ).catch(
                (error)=>{
                    console.log(error);
                }
            )
            
            const data = localStorage.getItem("Single");
            if( data != null){
                setSingle(JSON.parse(data))
            }
            const col= localStorage.getItem("color");
            const coun = localStorage.getItem("count");
            const car= localStorage.getItem('cart');
            
            if( col && coun && car != null){
                setCount(JSON.parse(coun));
                setColor(JSON.parse(col));
                setCart(JSON.parse(car));
            }

        },[]
    )
    const Feature= product.filter(
        (prod,index)=>{
            if(prod.featured === true){
                return true;
            }
        }
    )
//   sorting
const sortHandler=(sId)=>{
    // console.log(sId);
    setSort(sId);
    let SortItems =product;
    switch (sId){
        case "A-Z":
            SortItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Z-A":
            SortItems.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "Low-High":
            SortItems.sort((a, b) => a.price - b.price);
             break;
        case "High-Low":
            SortItems.sort((a,b)=> b.price - a.price);
            break;
      
        default:
            break;
    }
    setFilterSort(SortItems);
}

//    color function
const ColorHanlder=(cId)=>{
    // console.log(cId);
    setColor(cId);
    }

 const AddtoCart=(car)=>{
    // console.log(car)
    setCart([...cart,car]);
 }

//  removerHandler
const  removeHanlder=(removeId)=>{
    // console.log(removeId);
    if( cart.length == 1){
        localStorage.removeItem("cart");
        setCart([]);
    }
    else{
    const data = cart.filter(
        (items, index)=> index != removeId
    )
    setCart(data);
    }
}
    return (
        <MainContext.Provider value={{product ,Feature, sortHandler,sort,setSort,
        count,setCount,IncHandler,DescHandler, category,cart,AddtoCart,color,ColorHanlder, removeHanlder,
        setProduct,single,setSingle,FeaHandler}}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Context;
export {MainContext}
