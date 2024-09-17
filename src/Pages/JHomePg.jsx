import React from 'react';
import image1 from '../assets/JEWELRY.png';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import BoxButton from '../Animations/BoxButton';
import { Footer } from '../Components/Footer';

const JHomePg = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section text-center" style={{ backgroundColor: "whitesmoke" }}>
        <Link to="/mommy-and-me">
          <img src={image1} className="img-fluid" alt="..." />
        </Link>

        {/* Section 1 */}
        <div className="row align-items-center g-3 py-3">
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <img
              src="https://www.mariab.pk/cdn/shop/files/weding_wear_1640x1140_44c90626-dba5-448a-ab94-58e93608df5d.jpg?v=1715758870"
              className="d-block mx-lg-auto img-fluid"
              alt="Earrings"
              width="700"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <BoxButton buttonName="Earrings"
              path="/earrings" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center g-3 py-3">
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <img
              src="https://www.mariab.ae/cdn/shop/collections/JEWELRY_THUMBNAIL_500X500_3517960e-b27e-44b7-ba06-0be1e51428ee_500x.jpg?v=1726470597"
              className="d-block mx-lg-auto img-fluid"
              alt="Tikka/Jhoomer"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <BoxButton buttonName="Tikka/Jhoomer"
                  path="/tikka-jhoomer" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center g-3 py-3">
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <img
              src="https://ae01.alicdn.com/kf/S81f7b4df3c5146b197d3dc93421eafe3g.jpg_640x640q90.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Rings"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <BoxButton buttonName="Rings" 
                  path="/rings" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default JHomePg;
