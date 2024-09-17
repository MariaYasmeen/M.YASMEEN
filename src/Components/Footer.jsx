import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="container footercontainer" style={{ marginTop: "100px" }}>
        <footer className="py-4">
          <div className="row">
            {/* Contact Us Section */}
            <div className="col-12 col-md-4 mb-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-1">5.5 KM, Raiwind Road (Near Fatehbad Village), Lahore, Pakistan.</li>
                <li className="mb-1">+92 (21) 111 627422</li>
                <li className="mb-1">Pricing</li>
                <li className="mb-1">help@mariab.ae</li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="col-6 col-md-2 mb-3">
              <h5>Information</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Returns & Exchange</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Privacy Policy</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">FAQs</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Track Your Orders</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Customer Care</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Blogs</Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div className="col-6 col-md-2 mb-3">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">About Maria.B</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Contact Us</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Store Locator</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="nav-link p-0 text-body-secondary">Career</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-12 col-md-4 mb-3">
              <h5>Subscribe To Our Newsletter</h5>
              <p>Monthly digest of what's new and exciting news from us.</p>
              <form>
                <div className="d-flex flex-column flex-sm-row gap-1">
                  <input
                    id="newsletter1"
                    type="text" 
                    className="text-center"
                    placeholder="Email address"
                  />
                  <button className="  button" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
