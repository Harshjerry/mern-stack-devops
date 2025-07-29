import React from "react";
import styled from "styled-components";

const Container=styled.div`
height:35px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:13px;
font-weight:500;
margin-bottom:5px;
`

const Announcement=()=>{

  return(<Container>Luxury Redefined: Elevate Your Wardrobe with Premium Quality  </Container>);
}

export default Announcement;
