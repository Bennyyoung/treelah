import React from 'react'

export default function Categories() {
 return (
  <div className="categories-shop">
   <div className="container">
    <div className="row">
     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="shop-cat-box">
       <img className="img-fluid" src="images/mango_chunks.png" alt="" />
       <a className="btn hvr-hover" href="#">Mango Chunks</a>
      </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="shop-cat-box">
       <img className="img-fluid" src="images/sliced_mangoes.jpg" alt="" />
       <a className="btn hvr-hover" href="#">Sliced Mangoes</a>
      </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="shop-cat-box">
       <img className="img-fluid" src="images/hedgehog_mango.jpg" alt="" />
       <a className="btn hvr-hover" href="#">Hedgehog Mango</a>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
