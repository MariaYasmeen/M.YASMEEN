import React, { useEffect } from 'react';
import image1 from '../assets/luxuryformals.png';   
import image2 from '../assets/luxrypret.png';     
import image3 from '../assets/mommyandme.png';       
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';

const RTWHomePg = () => {
 
  return (
    <>
    <Navbar/>
    <div className="hero-section">  
      <Link to="/mommy-and-me"> <img src={image3} class="img-fluid" alt="..." /></Link>
      <Link to="/luxury-formals"> <img src={image1} class="img-fluid" alt="..." /></Link>
      <Link to="/luxury-pret"> <img src={image2} class="img-fluid" alt="..." /></Link>
       </div>
       <Footer />
    </>
  );
};

export default RTWHomePg;
