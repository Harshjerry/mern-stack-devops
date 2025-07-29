import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link,useLocation} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import publicRequest from "./../requestMethod";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Info=styled.div`width:100%;
opacity:0;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
`;

const Container=styled.div`
flex:1;
margin:10px;
height:350px;
min-width:350px;
align-items:center;
justify-content:center;
display:flex;
background-color:#f1f2f7;
position:relative;
&:hover ${Info}{
  opacity:1;
}
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin:10px;
transition: all 0.5s ease;
  &:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
  }
`;



const Image=styled.img`
height:75%;
z-index:2;`

const Circle=styled.div`
height:200px;
width:200px;
border-radius:50%;
background-color:white;
position:absolute;
`;



const Product=({item})=>{
const [color,setColor]=useState("inherit");

  return(<Container>
                <Circle/>
                         <Image src={item.img}/>
                               <Info>
                                        <Icon>  <ShoppingCartIcon/> </Icon>
                                  <Link  to={`/product/${item._id}`}>      <Icon>   <SearchIcon/>      </Icon>     </Link>
                                        <Icon > <FavoriteBorderIcon onClick={()=>setColor("error")} sx={{backgroundColor:{color}}}/>   </Icon>
                               </Info>
        </Container>);
}

export default Product ;
