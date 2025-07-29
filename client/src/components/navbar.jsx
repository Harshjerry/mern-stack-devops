import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "./../responsive";
import {useDispatch,useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import { logoutUser } from "../redux/apiCall";

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Container = styled.div`
  height: 50px;
  ${mobile({ height: "50px" })}
  z-index: 100;
  position: relative;
`;

const MenuItem = styled.span`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration: none;
  color: inherit;
`;

const Logo = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  ${mobile({ fontSize: "24px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display:"none" })}
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Navbar = () => {
  const dispatch=useDispatch();
  const handleLogout=(e)=>{
  e.preventDefault();
  logoutUser(dispatch);
  }
  
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
 
        </Left>
        <Center>
          <Logo>NOIR.</Logo>
        </Center>
        <Right>
        {!user ? (
            <>
              <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                <MenuItem>SIGN-IN</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </>
          )}

          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
