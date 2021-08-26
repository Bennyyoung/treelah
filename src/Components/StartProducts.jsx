import React from 'react'

export default function StartProducts() {
 return (
  <div className="products-box">
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="title-all text-center">
       <h1>Nursery to Trees</h1>
       <p>Our mango plants are propagated and grown to a desired age</p>
      </div>
     </div>
    </div>
    <div className="row">
     <div className="col-lg-12">
      <div className="special-menu text-center">
       <div className="button-group filter-button-group">
        <button className="active" data-filter="*">All</button>
        <button data-filter=".top-featured">Top featured</button>
        <button data-filter=".best-seller">Best seller</button>
       </div>
      </div>
     </div>
    </div>

    <div className="row special-list">
     <div className="col-lg-3 col-md-6 special-grid best-seller">
      <div className="products-single fix">
       <div className="box-img-hover">
        <div className="type-lb">
         <p className="sale">Sale</p>
        </div>
        <img src="images/mango_1.jpg" className="img-fluid" alt="Image" />
        <div className="mask-icon">
         <ul>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
           className="fas fa-sync-alt"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
           className="far fa-heart"></i></a></li>
         </ul>
         <a className="cart" href="#">Add to Cart</a>
        </div>
       </div>
       <div className="why-text">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5> ₦3,050</h5>
       </div>
      </div>
     </div>

     <div className="col-lg-3 col-md-6 special-grid top-featured">
      <div className="products-single fix">
       <div className="box-img-hover">
        <div className="type-lb">
         <p className="new">New</p>
        </div>
        <img src="images/mango_8.jpg" className="img-fluid" alt="Image" />
        <div className="mask-icon">
         <ul>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
           className="fas fa-sync-alt"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
           className="far fa-heart"></i></a></li>
         </ul>
         <a className="cart" href="#">Add to Cart</a>
        </div>
       </div>
       <div className="why-text">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5> ₦3,900</h5>
       </div>
      </div>
     </div>

     <div className="col-lg-3 col-md-6 special-grid top-featured">
      <div className="products-single fix">
       <div className="box-img-hover">
        <div className="type-lb">
         <p className="sale">Sale</p>
        </div>
        <img src="images/mango_3.jpg" className="img-fluid" alt="Image" />
        <div className="mask-icon">
         <ul>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
           className="fas fa-sync-alt"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
           className="far fa-heart"></i></a></li>
         </ul>
         <a className="cart" href="#">Add to Cart</a>
        </div>
       </div>
       <div className="why-text">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5> ₦3,050</h5>
       </div>
      </div>
     </div>

     <div className="col-lg-3 col-md-6 special-grid best-seller">
      <div className="products-single fix">
       <div className="box-img-hover">
        <div className="type-lb">
         <p className="sale">Sale</p>
        </div>
        <img src="images/mango_4.jpg" className="img-fluid" alt="Image" />
        <div className="mask-icon">
         <ul>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
           className="fas fa-sync-alt"></i></a></li>
          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
           className="far fa-heart"></i></a></li>
         </ul>
         <a className="cart" href="#">Add to Cart</a>
        </div>
       </div>
       <div className="why-text">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5> ₦3,400</h5>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
