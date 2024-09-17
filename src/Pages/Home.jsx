 
  import React from "react";
  import { Cards } from "../Components/Cards";
  import {Footer} from "../Components/Footer"
  import { Navbar } from "../Navbar/Navbar";
  import slider1 from "../assets//slider1.png";
  import slider3 from "../assets/slider3.png";
  import slider4 from "../assets/slider4.png";
  import slider5 from "../assets/slider5.png";
  const Home = () => {

    return (
      <>
      <Navbar />
     
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider3} className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item active">
        <img src={slider1} className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider5} className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider4} className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider5} className="d-block w-100 img-fluid" alt="..." />
      </div>
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <Cards />
      </>
    );
  };
  
  export default Home;
  
