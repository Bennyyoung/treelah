import React from 'react'
import Header from '../Components/Header'
import StartInstagramFeed from '../Components/StartInstagramFeed'
import Footer from '../Components/Footer'
import Copyright from '../Components/Copyright'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>About Us</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-frame"> <img className="img-fluid" src="images/mango_10.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="noo-sh-title-top">We are <span>Treelah</span></h2>
              <p>"We at treelah, as little as ₦3050 would plant one tree in your home, one tree for every home, is our mission.
                The Science is that, Trees play a tremendous role in climate change as they help to offset(Counterbalance Oxygen to Carbon ratio) carbon, they also provide shade and lastly they are good sources of Biodiversity (The diversity of plant and animal life in a particular habitat or in the world as a whole).

                </p>
              <p>Our vision is bringing the value of trees to every home.</p>
              {/* <a className="btn hvr-hover" href="#">Read More</a> */}
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. </p> */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. </p> */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. </p> */}
              </div>
            </div>
          </div>
          {/* <div className="row my-4">
            <div className="col-12">
              <h2 className="noo-sh-title">Meet Our Team</h2>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="images/img-1.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3> <span className="post">Web Developer</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis,
                    placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="images/img-2.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Kristiana</h3> <span className="post">Web Developer</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis,
                    placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="images/img-3.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3> <span className="post">Web Developer</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis,
                    placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="images/img-1.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3> <span className="post">Web Developer</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis,
                    placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.
                  </p>
                </div>
                <hr className="my-0" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  )
}
