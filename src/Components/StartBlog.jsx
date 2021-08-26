import React from 'react'

export default function StartBlog() {
 return (
  <div className="latest-blog">
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="title-all text-center">
       <h1>latest blog</h1>
       <p>Our daily post entries about our personal experiences and hobbies on mango trees and fruits</p>
      </div>
     </div>
    </div>
    <div className="row">
     <div className="col-md-6 col-lg-4 col-xl-4">
      <div className="blog-box">
       <div className="blog-img">
        <img className="img-fluid" src="images/mango_husk.jpg" alt="" />
       </div>
       <div className="blog-content">
        <div className="title-blog">
         <h3>Mango husk</h3>
         <p>The mango husk isa hard outer layer that protects the seed inside. The seeds before germinations are usually soft and gentle</p>
        </div>
        <ul className="option-blog">
         <li><a href="#"><i className="far fa-heart"></i></a></li>
         <li><a href="#"><i className="fas fa-eye"></i></a></li>
         <li><a href="#"><i className="far fa-comments"></i></a></li>
        </ul>
       </div>
      </div>
     </div>
     <div className="col-md-6 col-lg-4 col-xl-4">
      <div className="blog-box">
       <div className="blog-img">
        <img className="img-fluid" src="images/mango_pit.jpg" alt="" />
       </div>
       <div className="blog-content">
        <div className="title-blog">
         <h3>The Pit of a mango</h3>
         <p>When a mango is cut open we find the husk that is called the pit of a mango</p>
        </div>
        <ul className="option-blog">
         <li><a href="#"><i className="far fa-heart"></i></a></li>
         <li><a href="#"><i className="fas fa-eye"></i></a></li>
         <li><a href="#"><i className="far fa-comments"></i></a></li>
        </ul>
       </div>
      </div>
     </div>
     <div className="col-md-6 col-lg-4 col-xl-4">
      <div className="blog-box">
       <div className="blog-img">
        <img className="img-fluid" src="images/mango_chutney.jpg" alt="" />
       </div>
       <div className="blog-content">
        <div className="title-blog">
         <h3>Mango Chutney</h3>
         <p>Mango Chutneys are sauces or condiments made from mango relish</p>
        </div>
        <ul className="option-blog">
         <li><a href="#"><i className="far fa-heart"></i></a></li>
         <li><a href="#"><i className="fas fa-eye"></i></a></li>
         <li><a href="#"><i className="far fa-comments"></i></a></li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
