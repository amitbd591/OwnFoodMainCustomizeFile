import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaHeart,
  FaPlay,
  FaQuestion,
  FaRegStar,
  FaStar,
  FaTheRedYeti,
} from "react-icons/fa";
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
import { useRef } from "react";
import store from "../../Redux/Store/Store";
import { setFoodByCategoryList } from "../../Redux/State-slice/CategorySlice";
import { setCartList } from "../../Redux/State-slice/CartSlice";

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
  const [price, setPrice] = useState(0);
  const [tagData, setTagData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [foodTypeData, setFoodTypeData] = useState([]);
  let [newPostBody, setPostBody] = useState({});

  useEffect(() => {
    // GetFoodByCategoryAPI(params.id, 10);
    newPostBody.categoryID = params.id;

    axios.post(BaseURL + "/filter", { categoryID: params.id }).then((res) => {
      // console.log(res.data);
      if (res.data.status === "Success") {
        store.dispatch(setFoodByCategoryList(res.data.data));
      }
    });
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
    // if (isVisible) {
    //   setLimitData(limitData + 10);
    //   setLoader(true);
    //   // GetFoodByCategoryAPI(params.id, limitData).then((res) => {
    //   //   if (res === true) {
    //   //     setLoader(false);
    //   //   }
    //   // });
    //   axios.post(BaseURL + "/filter", newPostBody).then((res) => {
    //     // console.log(res.data);
    //     if (res.data.status === "Success") {
    //       store.dispatch(setFoodByCategoryList(res.data.data));
    //     }
    //   });
    // }
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
  // let allFoodByCategoryList = allFoodByCategoryList;
  let subCatRef,
    tagRef,
    priceRef = useRef();

  const filterData = () => {
    let postBody = {};

    if (subCatRef) {
      newPostBody.subCategoryID = subCatRef;
    }
    if (price > 0) {
      newPostBody.foodPrice = parseInt(price);
    }
    setPostBody({ ...newPostBody, postBody });
    // console.log(postBody);
    axios.post(BaseURL + "/filter", newPostBody).then((res) => {
      // console.log(res.data);
      if (res.data.status === "Success") {
        store.dispatch(setFoodByCategoryList(res.data.data));
      }
    });
  };

  // let allCartList = useSelector((state) => state.cart.allCartList);
  let allCartList = JSON.parse(localStorage.getItem("cartData"));
  let cartConrtol = (item) => {
    // store.dispatch(setCartList([...allCartList, item]));
    localStorage.setItem("cartData", JSON.stringify([...allCartList, item]));
  };

  console.log(allCartList);

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
                      <a href={`/Category/${item?._id}`}>
                        <button
                          className='wrapper'
                          key={index}
                          onClick={changeLink}
                        >
                          <span className='textFile'>{item?.categoryName}</span>
                        </button>
                      </a>
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
                      <button
                        className='wrapper'
                        key={index}
                        onClick={filterData}
                      >
                        <span
                          className='textFile'
                          ref={() => (subCatRef = item?._id)}
                        >
                          {item?.categoryName}
                        </span>
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
                            onClick={filterData}
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
        <section className='inner-section single-banner bannerstyle'>
          <div className='container text-white'></div>
        </section>
        <section className='inner-section shop-part'>
          <div className='container'>
            <div className='row content-reverse'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='top-filter d-flex justify-content-end'></div>
                  </div>
                </div>
                <div className='row'>
                  {allFoodByCategoryList?.length !== undefined &&
                  allFoodByCategoryList?.length > 0 ? (
                    <>
                      {allFoodByCategoryList?.map((item, index) => (
                        <Col xs={3} className='mb-4' key={index}>
                          <div className={`inner__body ${"Pink"}`}>
                            <div className='img__file'>
                              <img
                                className='img-fluid'
                                src={item?.foodImage}
                                alt=''
                              />
                              <div className='text_design'>
                                <h5>Abid Ahmed Sobhan</h5>
                              </div>
                              <ul className='card-action-buttons'>
                                <li>
                                  <a
                                    href='#'
                                    target='_blank'
                                    className='btn-floating  white'
                                    alt=''
                                  >
                                    <i className='material-icons grey-text text-darken-3'>
                                      <FaQuestion />
                                    </i>
                                  </a>
                                </li>
                                <li>
                                  <a className='btn-floating accent-2'>
                                    <i className='material-icons like'>
                                      <FaHeart />
                                    </i>
                                  </a>
                                </li>
                                <li>
                                  <a id='buy' className='btn-floating  blue'>
                                    <i className='material-icons buy'>
                                      <FaStar />
                                    </i>
                                  </a>
                                </li>
                                <li>
                                  <a id='buy' className='btn-floating  blue'>
                                    <i className='material-icons buy'>
                                      <FaPlay />
                                    </i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='text__file'>
                              <div className='d-flex justify-content-between align-items-center top_header'>
                                <p className='price'>${item?.foodPrice}</p>
                                <p className=''>
                                  <p className='intro'>
                                    <i
                                      className='material-icons buy'
                                      onClick={() => cartConrtol(item)}
                                    >
                                      add_shopping_cart
                                    </i>
                                  </p>
                                </p>
                              </div>
                              <div className='d-flex align-items-center justify-content-center'>
                                <p
                                  className=''
                                  style={{
                                    marginTop: -18,
                                    position: "relative",
                                  }}
                                >
                                  <h2>{item?.foodName?.slice(0, 10)}</h2>
                                </p>
                              </div>
                              <ul className='bottom_footer'>
                                <li>
                                  <img
                                    src='/Assets/Img/pot-1.jpeg'
                                    className='footer_img'
                                    alt=''
                                  />
                                </li>
                                <li>
                                  <img
                                    src='/Assets/Img/pot-2.jpeg'
                                    className='footer_img'
                                    alt=''
                                  />
                                </li>
                                <li>
                                  <img
                                    src='/Assets/Img/pot-3.jpeg'
                                    className='footer_img'
                                    alt=''
                                  />
                                </li>
                              </ul>

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
