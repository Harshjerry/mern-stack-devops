import React from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import {mobile} from "./../responsive";


const Container=styled.div`
display:flex;
100vh;
margin-bottom:50px;
${mobile({flexDirection:"column"})}
`
const Title=styled.h1`font-size:70px;
${mobile({marginLeft:"50px"})}`


const Desc=styled.div`font-size:24px;
font-weight:500;
margin-bottom:20px;
${mobile({textAlign:"center",marginLeft:"30px"})}`

const InputContainer=styled.div`width:45%;
height:40px;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
border:1px solid lightgray;
`

const Input=styled.input`
border:0;
flex:9;
padding-left:20px;
height:90%;`


const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
height:100%;
cursor:pointer;`
const Image=styled.img`
width:600px;
height:450px;
padding-left:50px;
${mobile({ width:"300px" ,height:"230px"})}`;
const InfoCont=styled.div`height:60vh;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
color:black;
flex-direction:column;
flex:1.5;
margin-right:80px;`;
const ImageCont=styled.div`flex:1;
display:flex;
justify-content:center;
align-items:center;
margin:0;
`;


const Newsletter=()=>{
return (<Container>
  <ImageCont>
  <Image src="https://i.ibb.co/wdj2FD6/LAPY.png"/>
  </ImageCont>
  <InfoCont>
            <Title>  Newsletter</Title>
                <Desc>  Get Timely Updates From Your Favourite Products</Desc>
                         <InputContainer>
                               <Input  placeholder="Your Email"/>
                                     <Button>
                                         <SendIcon/>
                                     </Button>
                         </InputContainer>
   </InfoCont>

  </Container>  );
};

export default Newsletter;
