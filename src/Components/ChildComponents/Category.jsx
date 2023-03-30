import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegStar, FaStar, FaTheRedYeti } from "react-icons/fa";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import { GetFoodByCategoryAPI } from "../../API/CategoryAPI";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageLoading from "../Elements/PageLoading";
import VisibilitySensor from "react-visibility-sensor";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { GiOpenedFoodCan } from "react-icons/gi";
import Rating from "react-rating";
import axios from "axios";
import { BaseURL } from "../../Helper/config";

const Category = () => {
  let params = useParams();
  const [catId, setCatId] = useState();
  let [limitData, setLimitData] = useState(20);
  let [loader, setLoader] = useState(false);
  const [cuisinesShow, setCuisinesShow] = useState(false);
  const [tags, setTags] = useState(false);
  const [category, setCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [moreFilters, setMoreFilters] = useState(false);
  const [rate, setRate] = useState(2);
  const [price, setPrice] = useState(10);
  const [tagData, setTagData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [foodTypeData, setFoodTypeData] = useState([]);
  useEffect(() => {
    GetFoodByCategoryAPI(params.id, 10);
    axios.get(BaseURL + "/get-additionaltags").then((res) => {
      setTagData(res.data.data);
    });

    axios.get(BaseURL + "/get-category").then((res) => {
      setCategoryData(res.data.data);
      setCatId(res.data.data);
    });

    axios
      .get(BaseURL + "/get-sub-category-by-single-category/" + params.id)
      .then((res) => {
        setSubCategoryData(res.data.data?.[0]?.subcategoryData);
      });

    axios.get(BaseURL + "/get-foodType").then((res) => {
      setFoodTypeData(res.data.data);
    });
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

  const changeLink = () => {
    GetFoodByCategoryAPI(params.id, 10);
    setCategory(false);
  };

  const limitBySelect = (limit) => {
    GetFoodByCategoryAPI(params.id, limit);
  };

  let allFoodByCategoryList = useSelector(
    (state) => state.category.allFoodByCategoryList
  );
  let foodList = allFoodByCategoryList?.[0]?.data;

  console.log(catId);

  return (
    <>
      <div className='filterCategory'>
        <Container>
          <Row>
            <Col xs={12}>
              <button
                onClick={() => setCuisinesShow(true)}
                className='me-2 myBtn'
              >
                All cuisines
              </button>
              <button className='me-2 myBtn'>Near Me</button>
              <button onClick={() => setCategory(true)} className='me-2 myBtn'>
                All Category
              </button>
              <button
                onClick={() => setSubCategory(true)}
                className='me-2 myBtn'
              >
                All Sub-Category
              </button>
              <button onClick={() => setTags(true)} className='me-2 myBtn'>
                Tags
              </button>
              <button
                onClick={() => setMoreFilters(true)}
                className='me-2 myBtn'
              >
                More Filters
              </button>

              <Modal
                size='lg'
                show={cuisinesShow}
                onHide={() => setCuisinesShow(false)}
                aria-labelledby='example-modal-sizes-title-sm'
                className='filterCategoryModal'
              >
                <Modal.Header closeButton>
                  <Modal.Title id='example-modal-sizes-title-sm'>
                    All cuisines
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='allCuisines'>
                    <Row>
                      {[...Array(20)].map((item, index) => (
                        <Col lg={2}>
                          <div className='wrapper'>
                            <div className='imgFile'>
                              <img
                                src='https://cdn.shef.com/static/media/All-Cuisine-Icon_Globe_200x200px_Colour-HOVER.9cf42dfb.svg'
                                alt=''
                              />
                            </div>
                            <div className='textFile'>
                              <p>All cuisines</p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                size='lg'
                show={category}
                onHide={() => setCategory(false)}
                aria-labelledby='example-modal-sizes-title-lg'
                className='filterCategoryModal'
              >
                <Modal.Header closeButton>
                  <Modal.Title id='example-modal-sizes-title-lg'>
                    Category
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='dietary '>
                    {categoryData?.map((item, index) => (
                      <Link to={`/Category/${item?._id}`}>
                        <button
                          className='wrapper'
                          key={index}
                          onClick={changeLink}
                        >
                          <span className='textFile'>{item?.categoryName}</span>
                        </button>
                      </Link>
                    ))}
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                size='lg'
                show={subCategory}
                onHide={() => setSubCategory(false)}
                aria-labelledby='example-modal-sizes-title-lg'
                className='filterCategoryModal'
              >
                <Modal.Header closeButton>
                  <Modal.Title id='example-modal-sizes-title-lg'>
                    Sub-Category
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='dietary '>
                    {subCategoryData?.map((item, index) => (
                      <button className='wrapper' key={index}>
                        <span className='textFile'>{item?.categoryName}</span>
                      </button>
                    ))}
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                size='lg'
                show={tags}
                onHide={() => setTags(false)}
                aria-labelledby='example-modal-sizes-title-lg'
                className='filterCategoryModal'
              >
                <Modal.Header closeButton>
                  <Modal.Title id='example-modal-sizes-title-lg'>
                    Tags
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='dietary '>
                    {tagData?.map((item, index) => (
                      <button className='wrapper' key={index}>
                        <span className='textFile'>{item?.tagName}</span>
                      </button>
                    ))}
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                size='lg'
                show={moreFilters}
                onHide={() => setMoreFilters(false)}
                aria-labelledby='example-modal-sizes-title-lg'
                className='filterCategoryModal'
              >
                <Modal.Header closeButton>
                  <Modal.Title id='example-modal-sizes-title-lg'>
                    More Filters
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='moreFilters'>
                    <Row>
                      <Col lg={4}>
                        <div className='wrapperOne'>
                          <p className='textHeader'>
                            Filter By Price = {price} $
                          </p>
                          <input
                            type='range'
                            defaultValue={price}
                            min='10'
                            max='1000'
                            onChange={(event) => setPrice(event.target.value)}
                          />
                        </div>
                      </Col>
                      <Col lg={2}>
                        <div className='wrapperOne'>
                          <div className='rating'>
                            <p className='py-2'>Filter By Review</p>
                            <form className='rating-form'>
                              <label htmlFor='neutral' className='lb'>
                                <input
                                  type='radio'
                                  name='rating'
                                  className='neutral'
                                  id='neutral'
                                  defaultValue='neutral'
                                />
                                <svg
                                  className='svg'
                                  xmlns='http://www.w3.org/2000/svg'
                                  xmlnsXlink='http://www.w3.org/1999/xlink'
                                  version='1.1'
                                  width='100%'
                                  height='100%'
                                  viewBox='0 0 24 24'
                                >
                                  <path d='M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z' />
                                </svg>
                              </label>
                              <label htmlFor='super-happy' className='lb'>
                                <input
                                  type='radio'
                                  name='rating'
                                  className='super-happy'
                                  id='super-happy'
                                  defaultValue='super-happy'
                                />
                                <svg className='svg' viewBox='0 0 24 24'>
                                  <path d='M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
                                </svg>
                              </label>
                            </form>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='wrapperOne'>
                          <p className='textHeader'>Filter By Food-Type</p>
                          <div className='dietary '>
                            {foodTypeData?.map((item, index) => (
                              <button className='wrapper' key={index}>
                                <span className='textFile'>
                                  {item?.foodTypeName}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
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
                      {/* <div class='filter-action '>
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
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class='row'>
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
    </>
  );
};

export default Category;
