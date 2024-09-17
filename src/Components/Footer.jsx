import React from "react";
import { Link } from "react-router-dom";

export const Footer = () =>{
    return (
        <>
        <div class="container footercontainer" style={{marginTop:"100px"}}>
  <footer class="py-1">
    <div class="row">
      <div class=" col-md-3 mb-3" >
        <h5>Contact Us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-1">5.5 KM, Raiwind Road (Near Fatehbad Village)
          Lahore, Pakistan.</li>
          <li class="nav-item mb-1">+92 (21) 111 627422</li>
          <li class="nav-item mb-1">Pricing</li>
          <li class="nav-item mb-1">help@mariab.ae</li>
        </ul>
      </div>

      <div class="col-2 col-md- mb-3">
        <h5>Information</h5>
        <ul class="nav flex-column">
        <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Returns & Exchange</Link></li>
      <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
        <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
        <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Track Your Orders</Link></li>
        <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Customer Care</Link></li>
        <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Blogs</Link></li>
         </ul>
      </div>

      <div class="col-2 col-md-1 mb-3">
        <h5>About</h5>
        <ul class="nav flex-column">
      <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">About Maria.B</Link></li>
          <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Contact Us</Link></li>
          <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Store Locator</Link></li>
          <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Terms & Conditions</Link></li>
          <li class="nav-item mb-1"><Link to="#" class="nav-link p-0 text-body-secondary">Career</Link></li>
          </ul>
          </div>

      <div class="col-md-4 offset-md-1 mb-5">
        <form>
          <h5>Subscribe To Our Newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row  gap-1">
            <label  for="newsletter1" class="visually-hidden newslable">Your Email Address Here</label>
            <input id="newsletter1" type="text" class="form-control newsletterlable" placeholder="Email address" />
            <button class="btn " type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  
  </footer>
</div>
        </>
    )
}