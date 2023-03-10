import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";

const Category = () => {
  const [column, setColumn] = useState("12");

  const FoodItem = [
    {
      item_name: "Barger",
      item_image: "/Assets/Img/barger.png",
    },
    {
      item_name: "Biriyani",
      item_image: "/Assets/Img/biriyani.png",
    },
    {
      item_name: "Chaowmin",
      item_image: "/Assets/Img/chaowmin.png",
    },
    {
      item_name: "Nachos",
      item_image: "/Assets/Img/nachos.png",
    },
    {
      item_name: "Pizza",
      item_image: "/Assets/Img/pizza.png",
    },
    {
      item_name: "Roll Chicken",
      item_image: "/Assets/Img/roll_chicken.png",
    },
    {
      item_name: "Barger",
      item_image: "/Assets/Img/barger.png",
    },
    {
      item_name: "Biriyani",
      item_image: "/Assets/Img/biriyani.png",
    },
    {
      item_name: "Chaowmin",
      item_image: "/Assets/Img/chaowmin.png",
    },
    {
      item_name: "Nachos",
      item_image: "/Assets/Img/nachos.png",
    },
    {
      item_name: "Pizza",
      item_image: "/Assets/Img/pizza.png",
    },
    {
      item_name: "Roll Chicken",
      item_image: "/Assets/Img/roll_chicken.png",
    },
  ];

  return (
    <div className='Category'>
      <section class='inner-section single-banner bannerstyle'>
        <div class='container text-white'></div>
      </section>
      <section class='inner-section shop-part'>
        <div class='container'>
          <div class='row content-reverse'>
            <div class='col-lg-3'>
              <div class='shop-widget'>
                <h6 class='shop-widget-title'>Filter by Category</h6>
                <form>
                  <input
                    class='shop-widget-search'
                    type='text'
                    placeholder='Search...'
                  />
                  <ul class='shop-widget-list shop-widget-scroll'>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate1' />
                        <label for='cate1'>vegetables</label>
                      </div>
                      <span class='shop-widget-number'>(13)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate2' />
                        <label for='cate2'>groceries</label>
                      </div>
                      <span class='shop-widget-number'>(28)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate3' />
                        <label for='cate3'>fruits</label>
                      </div>
                      <span class='shop-widget-number'>(35)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate4' />
                        <label for='cate4'>dairy farm</label>
                      </div>
                      <span class='shop-widget-number'>(47)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate5' />
                        <label for='cate5'>sea foods</label>
                      </div>
                      <span class='shop-widget-number'>(59)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate6' />
                        <label for='cate6'>diet foods</label>
                      </div>
                      <span class='shop-widget-number'>(64)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate7' />
                        <label for='cate7'>dry foods</label>
                      </div>
                      <span class='shop-widget-number'>(77)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate8' />
                        <label for='cate8'>fast foods</label>
                      </div>
                      <span class='shop-widget-number'>(85)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate9' />
                        <label for='cate9'>drinks</label>
                      </div>
                      <span class='shop-widget-number'>(92)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate10' />
                        <label for='cate10'>coffee</label>
                      </div>
                      <span class='shop-widget-number'>(21)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate11' />
                        <label for='cate11'>meats</label>
                      </div>
                      <span class='shop-widget-number'>(14)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='cate12' />
                        <label for='cate12'>fishes</label>
                      </div>
                      <span class='shop-widget-number'>(56)</span>
                    </li>
                  </ul>
                  <button class='shop-widget-btn'>
                    <i class='far fa-trash-alt'></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>

              <div class='shop-widget'>
                <h6 class='shop-widget-title'>Filter by Price</h6>
                <form>
                  <div class='shop-widget-group'>
                    <input type='text' placeholder='Min - 00' />
                    <input type='text' placeholder='Max - 5k' />
                  </div>
                  <button class='shop-widget-btn'>
                    <i class='fas fa-search'></i>
                    <span>search</span>
                  </button>
                </form>
              </div>

              <div class='shop-widget'>
                <h6 class='shop-widget-title'>Filter by Rating</h6>
                <form>
                  <ul class='shop-widget-list'>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='feat1' />
                        <label for='feat1'>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                        </label>
                      </div>
                      <span class='shop-widget-number'>(13)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='feat2' />
                        <label for='feat2'>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star'></i>
                        </label>
                      </div>
                      <span class='shop-widget-number'>(28)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='feat3' />
                        <label for='feat3'>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </label>
                      </div>
                      <span class='shop-widget-number'>(35)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='feat4' />
                        <label for='feat4'>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </label>
                      </div>
                      <span class='shop-widget-number'>(47)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='feat5' />
                        <label for='feat5'>
                          <i class='fas fa-star active'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </label>
                      </div>
                      <span class='shop-widget-number'>(59)</span>
                    </li>
                  </ul>
                  <button class='shop-widget-btn'>
                    <i class='far fa-trash-alt'></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div class='shop-widget'>
                <h6 class='shop-widget-title'>Filter by Best Seller</h6>
                <form>
                  <ul class='shop-widget-list'>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='tag1' />
                        <label for='tag1'>new items</label>
                      </div>
                      <span class='shop-widget-number'>(13)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='tag2' />
                        <label for='tag2'>sale items</label>
                      </div>
                      <span class='shop-widget-number'>(28)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='tag3' />
                        <label for='tag3'>rating items</label>
                      </div>
                      <span class='shop-widget-number'>(35)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='tag4' />
                        <label for='tag4'>feature items</label>
                      </div>
                      <span class='shop-widget-number'>(47)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='tag5' />
                        <label for='tag5'>discount items</label>
                      </div>
                      <span class='shop-widget-number'>(59)</span>
                    </li>
                  </ul>
                  <button class='shop-widget-btn'>
                    <i class='far fa-trash-alt'></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div class='shop-widget'>
                <h6 class='shop-widget-title'>Filter by Country</h6>
                <form>
                  <input
                    class='shop-widget-search'
                    type='text'
                    placeholder='Search...'
                  />
                  <ul class='shop-widget-list shop-widget-scroll'>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand1' />
                        <label for='brand1'>Bangaldesh</label>
                      </div>
                      <span class='shop-widget-number'>(13)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand2' />
                        <label for='brand2'>Usa</label>
                      </div>
                      <span class='shop-widget-number'>(28)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand3' />
                        <label for='brand3'>India</label>
                      </div>
                      <span class='shop-widget-number'>(35)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand4' />
                        <label for='brand4'>Malaysia</label>
                      </div>
                      <span class='shop-widget-number'>(47)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand5' />
                        <label for='brand5'>Maxico</label>
                      </div>
                      <span class='shop-widget-number'>(59)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand6' />
                        <label for='brand6'>Australia</label>
                      </div>
                      <span class='shop-widget-number'>(64)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand7' />
                        <label for='brand7'>Turkey</label>
                      </div>
                      <span class='shop-widget-number'>(77)</span>
                    </li>
                    <li>
                      <div class='shop-widget-content'>
                        <input type='checkbox' id='brand8' />
                        <label for='brand8'>Neatherland</label>
                      </div>
                      <span class='shop-widget-number'>(85)</span>
                    </li>
                  </ul>
                  <button class='shop-widget-btn'>
                    <i class='far fa-trash-alt'></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
            </div>
            <div class='col-lg-9'>
              <div class='row'>
                <div class='col-lg-12'>
                  <div class='top-filter'>
                    <div class='filter-show'>
                      <label class='filter-label'>Show :</label>
                      <select class='form-select filter-select'>
                        <option value='1'>12</option>
                        <option value='2'>24</option>
                        <option value='3'>36</option>
                      </select>
                    </div>
                    <div class='filter-short'>
                      <label class='filter-label'>Short by :</label>
                      <select class='form-select filter-select'>
                        <option selected>default</option>
                        <option value='3'>trending</option>
                        <option value='1'>featured</option>
                        <option value='2'>recommend</option>
                      </select>
                    </div>
                    <div class='filter-action'>
                      <div onClick={() => setColumn("6")} title='Two Column'>
                        {column === "6" ? (
                          <i class='fas fa-th-large bg-icon'></i>
                        ) : (
                          <i class='fas fa-th-large '></i>
                        )}
                      </div>
                      <div
                        className='mx-2'
                        title='One Column'
                        onClick={() => setColumn("12")}
                      >
                        {column === "12" ? (
                          <i class='fas fa-th-list bg-icon'></i>
                        ) : (
                          <i class='fas fa-th-list '></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                {column === "12" &&
                  FoodItem.map((item) => (
                    <div className={`col-${column}`}>
                      <div class='product-standard border'>
                        <div class='standard-label-group'>
                          <label class='standard-label off'>-15%</label>
                        </div>
                        <div class='standard-media'>
                          <a class='standard-image' href='product-video.html'>
                            <img src={item.item_image} alt='product' />
                          </a>
                          <div class='standard-widget'>
                            <a
                              title='Product View'
                              href='#'
                              class='fas fa-eye'
                              data-bs-toggle='modal'
                              data-bs-target='#product-view'
                            ></a>
                          </div>
                        </div>
                        <div class='standard-content'>
                          <h4 class='standard-name'>
                            <a>{item.item_name}</a>
                          </h4>
                          <h5 class='standard-price'>
                            <del>$34</del>
                            <span>
                              $28<small>/piece</small>
                            </span>
                          </h5>
                          <div class='standard-rating'>
                            <i class='active icofont-star'></i>
                            <i class='active icofont-star'></i>
                            <i class='active icofont-star'></i>
                            <i class='active icofont-star'></i>
                            <i class='icofont-star'></i>
                            <a>(3)</a>
                          </div>
                          <p class='standard-desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit molestias quaerat rem ullam ut nam quibusdam
                            labore sed magnam eos Inventore quis corrupti nemo
                            ipsa ratione culpa porro vitae.
                          </p>
                          <div class='standard-action-group'>
                            <button class='product-add' title='Add to Cart'>
                              <i class='fas fa-shopping-basket'></i>
                              <span>add to cart</span>
                            </button>

                            <button
                              class='standard-wish wish'
                              title='Add to Wishlist'
                            >
                              <i class='fas fa-heart'></i>
                              <span>Add To Favorite</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {column === "6" &&
                  FoodItem.map((item) => (
                    <div className='wrapper col-4'>
                      <div class='product-card shadow'>
                        <div class='product-media'>
                          <div class='product-label'>
                            <label class='label-text new'>new</label>
                          </div>
                          <button class='product-wish wish' tabindex='-1'>
                            <AiFillHeart />
                          </button>
                          <a class='product-image' tabindex='-1'>
                            <img
                              src={item.item_image}
                              className='img-fluid'
                              alt='product'
                            />
                          </a>
                          <div class='product-widget'>
                            <a
                              title='Product View'
                              href='#'
                              class='fas fa-eye'
                              data-bs-toggle='modal'
                              data-bs-target='#product-view'
                              tabindex='-1'
                            ></a>
                          </div>
                        </div>
                        <div class='product-content'>
                          <div class='product-rating'>
                            <span>
                              {" "}
                              <FaStar />
                            </span>
                            <span>
                              {" "}
                              <FaStar />
                            </span>
                            <span>
                              {" "}
                              <FaStar />
                            </span>
                            <span>
                              {" "}
                              <FaStar />
                            </span>
                            <span>
                              {" "}
                              <FaStar />
                            </span>
                            <a href='#' tabindex='-1'>
                              (3)
                            </a>
                          </div>
                          <h6 class='product-name'>
                            <a href='#' tabindex='-1'>
                              {item.item_name}
                            </a>
                          </h6>
                          <h6 class='product-price'>
                            <del>$34</del>
                            <span>
                              $28 <small>/piece</small>
                            </span>
                          </h6>
                          <button
                            class='product-add '
                            title='Add to Cart'
                            tabindex='-1'
                          >
                            <AiOutlineShopping />
                            <span>add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <button
                  class='product-load-more  '
                  title='Add to Cart'
                  tabindex='-1'
                >
                  <span>Load More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
