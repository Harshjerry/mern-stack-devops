import React from "react";
import Slider from "./../components/slider";
import Category from "./../components/categories";
import Products from "./../components/products";
import Newsletter from "./../components/newsletter2";
import Footer from "./../components/footer";
import Front from "./../components/front2";
import Navbar from "./../components/navbar";

import Announcement from "./../components/announcement";
const Home=()=>{
  return (
    <div >
    <Announcement/>
  <Navbar/>
      <Front/>
      <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default Home;
