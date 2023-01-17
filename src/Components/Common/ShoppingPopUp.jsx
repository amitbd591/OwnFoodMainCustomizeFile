import React from "react";
import { Modal } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const ShoppingPopUp = ({ show, handleClose }) => {
  return (
    <div className='ShoppingPopUp container' style={{ padding: 10 }}>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        // backdrop="static"
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title>Food Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='product-view'>
            <div className='row'>
              <div className='col-md-6 col-lg-6'>
                <div className='view-gallery'>
                  <div className='view-label-group'>
                    <label className='view-label new'>new</label>
                    <label className='view-label off'>-10%</label>
                  </div>
                  <ul className='preview-slider slider-arrow'>
                    <li>
                      <img src={"/Assets/Img/barger.png"} alt='product' />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 col-lg-6'>
                <div className='view-details'>
                  <h3 className='view-name'>
                    <a>existing product name</a>
                  </h3>
                  <div className='view-meta'>
                    <p>
                      SKU:<span>1234567</span>
                    </p>
                    <p>
                      BRAND:<a href='#'>radhuni</a>
                    </p>
                  </div>
                  <div className='view-rating'>
                    <i className='active icofont-star'></i>
                    <i className='active icofont-star'></i>
                    <i className='active icofont-star'></i>
                    <i className='active icofont-star'></i>
                    <i className='icofont-star'></i>
                    <a>(3 reviews)</a>
                  </div>
                  <h3 className='view-price'>
                    <del>$38.00</del>
                    <span>
                      $24.00<small>/per kilo</small>
                    </span>
                  </h3>
                  <p className='view-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit non
                    tempora magni repudiandae sint suscipit tempore quis maxime
                    explicabo veniam eos reprehenderit fuga
                  </p>
                  <div className='view-list-group'>
                    <label className='view-list-title'>tags:</label>
                    <ul className='view-tag-list'>
                      <li>
                        <a href='#'>organic</a>
                      </li>
                      <li>
                        <a href='#'>Chicken with extra cheese</a>
                      </li>
                      <li>
                        <a href='#'>chilis</a>
                      </li>
                    </ul>
                  </div>
                  <div className='view-list-group'>
                    <label className='view-list-title'>Share:</label>
                    <ul className='view-share-list'>
                      <li>
                        <a
                          href='#'
                          className='icofont-facebook'
                          title='Facebook'
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='icofont-twitter' title='Twitter'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='icofont-linkedin'
                          title='Linkedin'
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='icofont-instagram'
                          title='Instagram'
                        >
                          <FaInstagramSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='view-add-group'>
                    <button className='product-add' title='Add to Cart'>
                      <i className='fas fa-shopping-basket'></i>
                      <span>add to cart</span>
                    </button>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <i className='icofont-minus'></i>
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <i className='icofont-plus'></i>
                      </button>
                    </div>
                  </div>
                  <div className='view-action-group'>
                    <a
                      className='view-wish wish'
                      href='#'
                      title='Add Your Wishlist'
                    >
                      <i className='icofont-heart'></i>
                      <span>add to wish</span>
                    </a>
                    <a
                      className='view-compare'
                      href='#'
                      title='Compare This Item'
                    >
                      <i className='fas fa-random'></i>
                      <span>Compare This</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShoppingPopUp;
