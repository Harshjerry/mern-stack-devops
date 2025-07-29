import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import {mobile} from "./../responsive";





const Container=styled.div`display:flex;
${mobile({flexDirection:"column"})};
background: url(${props => props.imgSrc});
color:white;
height:400px;
justify-content:center;
align-items:center;
`

const Left=styled.div`flex:1.5;
display:flex;
flex-direction:column;
padding-left:20px;`

const Center=styled.div`flex:1.5;
padding:20px;
${mobile({display:"none"})}`

const Right=styled.div`flex:1;
padding:20px;
${mobile({backgroundColor:"black",marginTop:"10px" })}
`

const Desc=styled.p`
margin:20px 0px;`

const Logo=styled.h1``

const SocialContainer=styled.div`display:flex;`

const SocialIcon=styled.div`width:45px;
height:45px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
align-items:center;
justify-content:center;
display:flex;
margin-right:20px;
cursor:pointer;
`
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer=()=>{
  return(  <Container   imgSrc="https://i.ibb.co/zn9gnRJ/foot.png">
                   <Left>
                      <Logo> NOIR.</Logo>
                      <Desc>Elevate your style to the extraordinary with NOIR., where luxury meets fashion in every stitch. Where each garment is a masterpiece of craftsmanship and style.</Desc>

                      <SocialContainer>
                          <SocialIcon color="3B5999">  <FacebookIcon/>   </SocialIcon>
                          <SocialIcon color="E4405F">   <InstagramIcon/>  </SocialIcon>
                          <SocialIcon color="55ACEE">    <TwitterIcon/>     </SocialIcon>
                           <SocialIcon color="E60023">   <PinterestIcon/>    </SocialIcon>
                      </SocialContainer>

                   </Left>

                  <Center>

                                 <Title>Useful Links</Title>
                                    <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>


                  </Center>

                   <Right>
                   <Title>Contact</Title>
                   <ContactItem>
          <HomeWorkOutlinedIcon style={{marginRight:"10px"}}/> Nilgiri IIITM 474015 ,Gwalior , MP ,IND
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon  style={{marginRight:"10px"}}/> +91 7006993867
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> harshdeep1043@gmail.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />


                   </Right>
      </Container>

    );
}

export default Footer;
