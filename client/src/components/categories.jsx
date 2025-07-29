import React from "react";
import {useState} from "react";
import styled from "styled-components";
import { categories} from "./../data";
import CategoryItem from "./categoryItem";
import {mobile} from "./../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


const Category=()=>{
  return(<Container>

{categories.map(item=>(
  <CategoryItem item={item}/>
))}

    </Container>);
}

export default Category;
