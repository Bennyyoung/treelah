import React from 'react'
import StartInstagramFeed from '../Components/StartInstagramFeed'
import Copyright from '../Components/Copyright'
import { Link } from 'react-router-dom'


export default function Contact() {
 return (
  <>

   <div className="all-title-box">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <h2>Contact Us</h2>
       <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"> Contact Us </li>
       </ul>
      </div>
     </div>
    </div>
   </div>

   <div className="contact-box-main">
    <div className="container">
     <div className="row">
      <div className="col-lg-8 col-sm-12">
       <div className="contact-form-right">
        <h2>GET IN TOUCH</h2>
        <p>We reply in 24 hrs</p>
        <form id="contactForm">
         <div className="row">
          <div className="col-md-12">
           <div className="form-group">
            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
            <div className="help-block with-errors"></div>
           </div>
          </div>
          <div className="col-md-12">
           <div className="form-group">
            <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
            <div className="help-block with-errors"></div>
           </div>
          </div>
          <div className="col-md-12">
           <div className="form-group">
            <input type="text" className="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject" />
            <div className="help-block with-errors"></div>
           </div>
          </div>
          <div className="col-md-12">
           <div className="form-group">
            <textarea className="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
            <div className="help-block with-errors"></div>
           </div>
           <div className="submit-button text-center">
            <button className="btn hvr-hover" id="submit" type="submit">Send Message</button>
            <div id="msgSubmit" className="h3 text-center hidden"></div>
            <div className="clearfix"></div>
           </div>
          </div>
         </div>
        </form>
       </div>
      </div>
      <div className="col-lg-4 col-sm-12">
       <div className="contact-info-left">
        <h2>CONTACT INFO</h2>
        <p>Feel free to contact us below </p>
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

  </>
 )
}
