import React from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import {mobile} from "./../responsive";


const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
color:black;
flex-direction:column;
`
const Title=styled.h1`font-size:70px;`


const Desc=styled.div`font-size:24px;
font-weight:500;
margin-bottom:20px;
${mobile({textAlign:"center"})}`

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


const Newsletter=()=>{
return (<Container>
            <Title>  Newsletter</Title>
                <Desc>  Get Timely Updates From Your Favourite Products</Desc>
                         <InputContainer>
                               <Input  placeholder="Your Email"/>
                                     <Button>
                                         <SendIcon/>
                                     </Button>
                         </InputContainer>
  </Container>  );
};

export default Newsletter;
