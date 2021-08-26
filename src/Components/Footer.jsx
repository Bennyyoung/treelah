import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
 return (
  <footer>
   <div className="footer-main">
    <div className="container">
     <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-top-box">
        <h3>Business Time</h3>
        <ul className="list-time">
         <li>Monday - Friday: 08.00am to 05.00pm</li>
         <li>Saturday: 10.00am to 08.00pm</li>
         <li>Sunday: <span>Closed</span></li>
        </ul>
       </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-top-box">
        <h3>Newsletter</h3>
        <form className="newsletter-box">
         <div className="form-group">
          <input className="" type="email" name="Email" placeholder="Email Address*" />
          <i className="fa fa-envelope"></i>
         </div>
         <button className="btn hvr-hover" type="submit">Submit</button>
        </form>
       </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-top-box">
        <h3>Social Media</h3>
        <p>You can follow us below</p>
        <ul>
         <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
        </ul>
       </div>
      </div>
     </div>
     <hr />
     <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-widget">
        <h4>About Treelah</h4>
        <p>Treelah is a Tree selling and planting company which is aimed towards bringing the value of trees to our homes</p>
       </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-link">
        <h4>Information</h4>
        <ul>
         <li><Link to="/about">About Us</Link></li>
         {/* <li><Link to="#">Customer Service</Link></li>
         <li><Link to="#">Our Sitemap</Link></li>
         <li><Link to="#">Terms &amp; Conditions</Link></li>
         <li><Link to="#">Privacy Policy</Link></li>
         <li><Link to="#">Delivery Information</Link></li> */}
        </ul>
       </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
       <div className="footer-link-contact">
        <h4>Contact Us</h4>
        <ul>
         <li>
          <p><i className="fas fa-map-marker-alt"></i>Address: No 7 Weli Crescent <br /> Street Rumaugholu PortHarcourt,<br /> RiverState </p>
         </li>
         <li>
          <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+2348057826599">0805 782 6599</a></p>
         </li>
         <li>
          <p><i className="fas fa-envelope"></i>Email: <a href="mailto:softbloom28@gmail.com">softbloom28@gmail.com</a></p>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </footer>
 )
}
