import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import { GetFoodByCategoryAPI } from "../../API/CategoryAPI";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageLoading from "../Elements/PageLoading";
import VisibilitySensor from "react-visibility-sensor";
import { Col } from "react-bootstrap";

const Category = () => {
  let params = useParams();
  let [limitData, setLimitData] = useState(20);
  let [loader, setLoader] = useState(false);
  useEffect(() => {
    GetFoodByCategoryAPI(params.id, params.limit);
  }, []);

  const loadMoreItem = (isVisible) => {
    if (isVisible) {
      setLimitData(limitData + 10);
      setLoader(true);
      GetFoodByCategoryAPI(params.id, limitData).then((res) => {
        if (res === true) {
          setLoader(false);
        }
      });
    }
  };

  const limitBySelect = (limit) => {
    GetFoodByCategoryAPI(params.id, limit);
  };

  let allFoodByCategoryList = useSelector(
    (state) => state.category.allFoodByCategoryList
  );
  let foodList = allFoodByCategoryList?.[0]?.data;
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

  const data = [
    {
      foodName: "Tandoori Chicken",
      userName: "Maira Sola",
      bgColor: "Fuchsia",
      link: "/",
      bgImg: "/Assets/Img/blog/01.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit1.png",
      price: "40",
    },
    {
      foodName: "Horseradish Relish",
      userName: "Danielle A. Willey",
      bgColor: "Purple",
      link: "/",
      bgImg: "/Assets/Img/blog/02.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit2.png",
      price: "60",
    },
    {
      foodName: "Guava Jelly",
      userName: "Gerald R. Danner",
      bgColor: "Pink",
      link: "/",
      bgImg: "/Assets/Img/blog/03.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit3.png",
      price: "46",
    },
    {
      foodName: "Mango Chutney",
      userName: "Linda S. Turner",
      bgColor: "Emerald",
      link: "/",
      bgImg: "/Assets/Img/blog/04.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit4.png",
      price: "30",
    },
    {
      foodName: "Pickapeppa Sauce",
      userName: "Alfredo L. Escalante",
      bgColor: "Fuchsia",
      link: "/",
      bgImg: "/Assets/Img/blog/05.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit5.png",
      price: "80",
    },
    {
      foodName: "Ginger Jam",
      userName: "Luis K. Stephens",
      bgColor: "Purple",
      link: "/",
      bgImg: "/Assets/Img/blog/06.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit6.png",
      price: "43",
    },
    {
      foodName: "Smoked Sprats",
      userName: "Bernice F. Jackson",
      bgColor: "Pink",
      link: "/",
      bgImg: "/Assets/Img/blog/07.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit7.png",
      price: "70",
    },
    {
      foodName: "Pancit Luglug",
      userName: "Noelia R. Hall",
      bgColor: "Emerald",
      link: "/",
      bgImg: "/Assets/Img/blog/08.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit8.png",
      price: "55",
    },
  ];

  return (
    <div className='Category ProfileFoodGallery'>
      <section class='inner-section single-banner bannerstyle'>
        <div class='container text-white'></div>
      </section>
      <section class='inner-section shop-part'>
        <div class='container'>
          <div class='row content-reverse'>
            {/* <div class='col-lg-3'>
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
            </div> */}
            <div class='col-lg-12'>
              <div class='row'>
                <div class='col-lg-12'>
                  <div class='top-filter d-flex justify-content-end'>
                    {/* <div class='filter-show'>
                      <label class='filter-label'>Show :</label>
                      <select
                        class='form-select filter-select'
                        onChange={(event) => limitBySelect(event.target.value)}
                      >
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                      </select>
                    </div> */}
                    {/* <div class='filter-short'>
                      <label class='filter-label'>Short by :</label>
                      <select class='form-select filter-select'>
                        <option selected>default</option>
                        <option value='3'>trending</option>
                        <option value='1'>featured</option>
                        <option value='2'>recommend</option>
                      </select>
                    </div> */}
                    <div class='filter-action '>
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
                {column === "12" ? (
                  <>
                    {foodList?.length !== undefined && foodList?.length > 0 ? (
                      <>
                        {foodList?.map((item, index) => (
                          <div className={`col-${column}`} key={index}>
                            <div class='product-standard border'>
                              <div class='standard-label-group'>
                                <label class='standard-label off'>-15%</label>
                              </div>
                              <div class='standard-media'>
                                <a
                                  class='standard-image'
                                  href='product-video.html'
                                >
                                  <img src={item.foodImage} alt='product' />
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
                                  <a>{item.foodName}</a>
                                </h4>
                                <h5 class='standard-price'>
                                  <del>$34</del>
                                  <span>
                                    {item?.foodPrice}
                                    <small>/piece</small>
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
                                  {item?.foodAdditionalInfo?.slice(0, 50)}
                                </p>
                                <div class='standard-action-group'>
                                  <button
                                    class='product-add'
                                    title='Add to Cart'
                                  >
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
                      </>
                    ) : (
                      <>
                        <div className='mt-4'>
                          <h2>No Food Found!</h2>
                        </div>
                      </>
                    )}
                  </>
                ) : null}
                {column === "6" ? (
                  <>
                    {foodList?.length !== undefined && foodList?.length > 0 ? (
                      <>
                        {foodList?.map((item, index) => (
                          <Col xs={3} className='mb-4' key={index}>
                            <div className={`inner__body ${"Pink"}`}>
                              <div className='img__file'>
                                <img
                                  className='img-fluid'
                                  src={item?.foodImage}
                                  alt=''
                                />
                              </div>
                              <div className='text__file'>
                                <h2>{item?.foodName.slice(0, 10)}</h2>
                                <p className='name'>{"Middle Eastern"}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                  <p className='intro'>
                                    64 <FaStar className='star' />
                                  </p>
                                  <p className='price'>${item?.foodPrice}</p>
                                </div>
                                <div className='overlay__img'>
                                  <img
                                    className='img-fluid'
                                    src={
                                      "/Assets/Img/profileKitchenImg/profile-kit6.png"
                                    }
                                    alt=''
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className='mt-4'>
                          <h2>No Food Found!</h2>
                        </div>
                      </>
                    )}
                  </>
                ) : null}
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <VisibilitySensor onChange={loadMoreItem}>
                  {loader === true ? (
                    <PageLoading />
                  ) : (
                    <>
                      <h4 className='text-danger'>No More Foods Found!</h4>
                    </>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
