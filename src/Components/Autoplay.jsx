import React from "react";
import Slider from "react-slick";
import HoverImg from "../ImgSliders/HoverImg"

function AutoPlay() {
  const settings = {
         dots: true,
         autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
  cssEase: 'linear'
    };
  
  return (
    <div style={{marginTop:"23px", margin:"1rem", padding:"3px"}} className="hoverimgslider">
    
    <center><h3 >Featured Designs</h3></center>
    <div className="slider-container" >
      <Slider {...settings} > 
        <div>
        <HoverImg
        imageSrc="/slick1.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      />
      <center><p>bridal</p></center>
        </div>
        <div>
        <HoverImg
        imageSrc="/slick2.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      /> <center><p>bridal</p></center></div>
        <div>
        <HoverImg
        imageSrc="/slick3.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      /> <center><p>Mommy & Me</p></center></div>
      
        <div>
        <HoverImg
        imageSrc="/slick4.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      /><center><p>Mommy & Me</p></center> </div>
        <div>
        <HoverImg
        imageSrc="/slick5.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      /><center><p>Men</p></center> </div>
        <div>
        <HoverImg
        imageSrc="/slick3.png" 
        heading="Amazing Place"
        buttonText="Learn More"
      /><center><p>Mommy & Me</p></center> </div>
              </Slider>
    </div>
    </div>
    );
}

export default AutoPlay;
