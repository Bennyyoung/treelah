import React from 'react'

function ShopDetail() {
 return (
        <>
   <div className="shop-detail-box-main">
    <div className="container">
     <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-6">
       <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
         <div className="carousel-item active"> <img className="d-block w-100" src="images/mango_1.jpg" alt="First slide" /> </div>
         <div className="carousel-item"> <img className="d-block w-100" src="images/mango_2.jpg" alt="Second slide" /> </div>
         <div className="carousel-item"> <img className="d-block w-100" src="images/mango_4.jpg" alt="Third slide" /> </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
         <i className="fa fa-angle-left" aria-hidden="true"></i>
         <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
         <i className="fa fa-angle-right" aria-hidden="true"></i>
         <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
         <li data-target="#carousel-example-1" data-slide-to="0" className="active">
          <img className="d-block w-100 img-fluid" src="images/mango_1.jpg" alt="" />
         </li>
         <li data-target="#carousel-example-1" data-slide-to="1">
          <img className="d-block w-100 img-fluid" src="images/mango_2.jpg" alt="" />
         </li>
         <li data-target="#carousel-example-1" data-slide-to="2">
          <img className="d-block w-100 img-fluid" src="images/mango_4.jpg" alt="" />
         </li>
        </ol>
       </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-6">
       <div className="single-product-details">
        <h2>Mangifera Indica (Mango)</h2>
        <h5> <del>₦ 5,000</del> ₦3,050</h5>
        <p className="available-stock">
         <span> More than 25 available / <a href="#">8 sold </a></span>
        </p>
        <h4>Short Description:</h4>
        <p>Mangifera indica, commonly known as mango. It is a large fruit-tree, capable of growing to a height and crown width of about 30 metres (100 ft) and trunk circumference of more than 3.7 metres (12 ft). It can grow up to 15–30 metres (49–98 ft) tall. The tree grows best in well-drained sandy loam; it does not grow well in heavy wet soils. 
        </p>
        <ul>
         <li>
          <div className="form-group quantity-box">
           <label className="control-label">Quantity</label>
           <input className="form-control" value="0" min="0" max="20" type="number" />
          </div>
         </li>
        </ul>

        <div className="price-box-bar">
         <div className="cart-and-bay-btn">
          <a className="btn hvr-hover" data-fancybox-close="" href="#">Buy New</a>
          <a className="btn hvr-hover" data-fancybox-close="" href="#">Add to cart</a>
         </div>
        </div>

        <div className="add-to-btn">
         <div className="add-comp">
          <a className="btn hvr-hover" href="#"><i className="fas fa-heart"></i> Add to wishlist</a>
          <a className="btn hvr-hover" href="#"><i className="fas fa-sync-alt"></i> Add to Compare</a>
         </div>
         <div className="share-bar">
          <a className="btn hvr-hover" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
          <a className="btn hvr-hover" href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a>
          <a className="btn hvr-hover" href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a className="btn hvr-hover" href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
          <a className="btn hvr-hover" href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
         </div>
        </div>
       </div>
      </div>
     </div>

     {/* <div className="row my-5">
      <div className="card card-outline-secondary my-4">
       <div className="card-header">
        <h2>Product Reviews</h2>
       </div>
       <div className="card-body">
        <div className="media mb-3">
         <div className="mr-2">
          <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
							</div>
          <div className="media-body">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
           <small className="text-muted">Posted by Anonymous on 3/1/18</small>
          </div>
         </div>
         <hr />
         <div className="media mb-3">
          <div className="mr-2">
           <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
          </div>
          <div className="media-body">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
           <small className="text-muted">Posted by Anonymous on 3/1/18</small>
          </div>
         </div>
         <hr />
         <div className="media mb-3">
          <div className="mr-2">
           <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
          </div>
          <div className="media-body">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
           <small className="text-muted">Posted by Anonymous on 3/1/18</small>
          </div>
         </div>
         <hr />
         <a href="#" className="btn hvr-hover">Leave a Review</a>
        </div>
       </div>
      </div> */}

      <div className="row my-5">
       <div className="col-lg-12">
        <div className="title-all text-center">
         <h1>Featured Products</h1>
         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p> */}
        </div>
        <div className="featured-products-box owl-carousel owl-theme">
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" dataToggle="tooltip" dataPlacement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
         <div className="item">
          <div className="products-single fix">
           <div className="box-img-hover">
            <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image" />
            <div className="mask-icon">
             <ul>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
             </ul>
             <a className="cart" href="#">Add to Cart</a>
            </div>
           </div>
           <div className="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5> $9.79</h5>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>

     </div>
    </div>
        </>
   )
}

   export default ShopDetail
