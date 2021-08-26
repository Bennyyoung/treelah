import React from 'react'
import StartInstagramFeed from '../Components/StartInstagramFeed'
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Gallery</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Our Gallery</h1>
                <p>Welcome to our collections of plants</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">All</button>
                  <button data-filter=".bulbs">Bulbs</button>
                  <button data-filter=".fruits">Fruits</button>
                  <button data-filter=".podded-vegetables">Podded vegetables</button>
                  <button data-filter=".root-and-tuberous">Root and tuberous</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row special-list">
            <div className="col-lg-3 col-md-6 special-grid bulbs">
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
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid fruits">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_2.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid bulbs">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_3.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid fruits">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_4.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid bulbs">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_5.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid fruits">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_6.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_7.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_8.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="../images/mango_9.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/mango_10.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid root-and-tuberous">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/gallery-img-11.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 special-grid podded-vegetables">
              <div className="products-single fix">
                <div className="box-img-hover">
                  <img src="images/gallery-img-12.jpg" className="img-fluid" alt="Image" />
                  <div className="mask-icon">
                    <ul>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                        className="fas fa-sync-alt"></i></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                        className="far fa-heart"></i></a></li>
                    </ul>
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
