import React from "react";
import styled from "styled-components";
import Product from "./product";

import {mobile} from "./../responsive";
import {useState,useEffect} from "react";
import axios from "axios";


const Container=styled.div` display:flex;
padding:30px;
flex-wrap:wrap;
width:93vw;
${mobile({padding:"0px"})}`;

const Products=({cat,filter,sort})=>{

const [products,setProducts]=useState([]);
const [filteredProducts,setFilteredProducts]=useState([]);

useEffect(()=>{
const getProducts=async()=>{
  try{
const BACKEND_URL = process.env.BACKEND_URL;
const res = await axios.get(cat ? `${BACKEND_URL}/product?category=${cat}` : `${BACKEND_URL}/product`);

setProducts(res.data);
}catch(err){
    console.log(err);
  }
}
getProducts();
},[cat]);


useEffect(()=>{
  cat&& setFilteredProducts(products.filter((item)=>
  Object.entries(filter).every(([key,value])=>
  item[key].includes(value)
)
)
);
},[products,cat,filter]);


useEffect(() => {
  if (sort === "Newest") {
    setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
  } else if (sort === "asc") {
    setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
  } else {
    setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
  }
}, [sort]); // Add dependencies to the array



  return(<Container>
    {cat? filteredProducts.map((item)=>(<Product item={item} key={item.id}/>))
: products.slice(0,8).map((item)=>(<Product item={item} key={item.id}/>))

  }
    </Container>);
}

export default Products ;
