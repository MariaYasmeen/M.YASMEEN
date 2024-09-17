import React from "react";
import { Cards } from "../Components/Cards";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Navbar/Navbar";
import image1 from '../assets/luxuryformals.png';
import image2 from '../assets/luxrypret.png';
import image3 from '../assets/tikkajhoomer.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"  // Auto-slide every 3 seconds
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 img-fluid" alt="Luxury Formals" />
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 img-fluid" alt="Luxury Pret" />
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 img-fluid" alt="Tikka/Jhoomer" />
          </div>
        </div>

        {/* Carousel controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards Section */}
      <Cards />

      <Footer />
    </>
  );
};

export default Home;
