import React from "react";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {useState} from "react";
import {sliderItems} from "./../data";
import {mobile} from "./../responsive";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
background-color:white;
overflow:hidden;  ${mobile({ display: "none" })};
position:relative;
`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:#CECDCD;
border-radius:50%;
justify-content:center;
align-items:center;
display:flex;
position:absolute;
left:${props=>props.direction==="left" && "15px"};
right:${props=>props.direction==="right" && "15px"};
cursor:pointer;
opacity:0.5;
z-index:2;
top: 40%;
`

const Wrapper=styled.div`height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex*-100}vw);
`


const Slide=styled.div`display:flex;
align-items:center;
height:100vh;
width:100vw;
background-color:#${props=>props.bg}`

const ImgContainer=styled.div`flex:1;
height:100%;
`

const InfoContainer=styled.div`flex:1;
margin-bottom:40px;
padding:40px;
margin-right:100px;
`

const Image=styled.img`
margin-top:50px;
height:90%;
margin-left:50px;

`

const Title=styled.h1`font-size:60px;
font-family: 'Montaga', serif;
font-weight: lighter;
`
const Button=styled.button`
padding:10px;
font-size:17px;
background-color:teal;
cursor :pointer;
color:white;
border:0;
border-radius:10px;
`
const Desc=styled.p`margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`




const Slider=()=>{
const [slideIndex,setSlideindex]=useState("");

const handleClick=(dir)=>{
  if(dir==="left"){
    setSlideindex(slideIndex>0?slideIndex-1:2);
  }else{
setSlideindex(slideIndex<2?slideIndex+1:0);
  }

}

  return(<Container>
                <Arrow direction="left" onClick={()=>handleClick("left")}> <ArrowLeftOutlinedIcon/>  </Arrow>
                <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                                                    <Slide  bg={item.bg}>
                                                            <ImgContainer>  <Image src={item.img}/></ImgContainer>
                                                            <InfoContainer>
                                                            <Title>{item.title}</Title>
                                                            <Desc>{item.desc}</Desc>
                                                          <Link to="/products/tshirt">  <Button> SHOP NOW</Button></Link>
                                                             </InfoContainer>
                                                    </Slide>

                                                    ))}
                </Wrapper>
                <Arrow  direction="right" onClick={()=>handleClick("right")}>  <ArrowRightOutlinedIcon /> </Arrow>


    </Container>);
}

export default Slider;
