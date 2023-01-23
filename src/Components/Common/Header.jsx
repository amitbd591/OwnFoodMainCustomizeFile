import React, { useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaCartPlus,
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaSearch,
  FaUserCheck,
  FaUserCog,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import Modal from "@mui/material/Modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { BsXLg } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import { Uber_image } from "../../Database/ImgData";
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };
  // const [show, setShow] = useState(false);

  const handleCloseSidebar = () => setShow(false);
  const handleShow = () => setShow(true);

  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [paneLeft, SetpanLeft] = useState(false);
  console.log(paneLeft);
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpen = () => setOpenSearch(true);
  const handleClose = () => setOpenSearch(false);
  const [zip, SetZip] = useState(false);
  const zipControl = () => {
    SetZip(!zip);
  };

  const style = {
    position: "absolute",
    top: "0%",
    width: "100%",
    bgcolor: "background.paper",
    //   border: "2px solid #000",
    boxShadow: 24,
    height: 500,
    p: 4,
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className='Header shadow'>
      {/* ================== Nav Section ================== */}
      <div className='container-fluid'>
        <div className=' header-content'>
          <Link to={"/"}>
            <img src='/Assets/Img/Logo.png' alt='logo' className='logo' />
          </Link>

          <button
            className='btn_barger'
            onClick={(e) => {
              e.preventDefault();
              SetpanLeft(true);
            }}
          >
            <i class='fas fa-bars fa-lg '></i>
          </button>

          <div className='zipCode position-relative'>
            <div>
              <div className='zipCodeBtn' onClick={zipControl}>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span className='ps-2'>Berlin • Jetzt</span>
              </div>
              <div className={zip ? "zipCodePopup active" : "zipCodePopup"}>
                <div className='d-flex justify-content-center'>
                  <div className='zipCode_input position-relative'>
                    <div className='w-100'>
                      <div>
                        <h2>Location-Details</h2>
                        <div>
                          <div className='d-flex justify-content-between mt-4'>
                            <div>
                              <span>
                                <FaMapMarkerAlt />
                              </span>
                              <span className='ps-1 '>Berlin</span>
                            </div>
                            <div>
                              <span className='zipCodeBtn'>Berlin</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='d-flex justify-content-between mt-4'>
                            <div>
                              <span>
                                <FaMapMarkerAlt />
                              </span>
                              <span className='ps-1 '>Berlin</span>
                            </div>
                            <div>
                              <span className='zipCodeBtn'>Berlin</span>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <Button className='btn_done aligns-items-center'>
                          Done
                        </Button>

                        <div className='filterBtn  mt-4'>
                          <div className=' d-flex justify-content-center'>
                            <span>Filter</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className='closeIcon position-absolute'
                        onClick={zipControl}
                      >
                        <span>
                          <BsXLg />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' d-flex justify-content-between  '>
            <span
              className='zip-form ms-1'
              onClick={() => {
                handleOpen();
              }}
            >
              <label
                htmlFor='searchInput'
                className='d-flex gap-3 justify-content-center align-items-center'
              >
                <span>Search Food Drinks...</span>
                <span>
                  <FaSearch />
                </span>

                {/* <input placeholder=' Search Food Drinks...' /> */}
              </label>
            </span>
          </div>

          <nav class='nav  bg-white'>
            <div class='container-fluid '>
              <div class='row'>
                <div class='col-12'>
                  <div class='navbar-content'>
                    <ul class='navbar-list bg-white'>
                      <li className='navbar-item'>
                        <a class='navbar-link ' href='#'>
                          EARN MONEY
                        </a>
                      </li>

                      <li class='navbar-item dropdown'>
                        <a class='navbar-link' href='#'>
                          ALL FOOD <FaAngleDown />
                        </a>
                        <ul class='dropdown-position-list'>
                          <li>
                            <a href='#'>Popular Kitchen</a>
                          </li>
                          <li>
                            <a href='#'>Instant Food</a>
                          </li>
                          <li>
                            <a href='#'>Pre-Order Food</a>
                          </li>
                          <li>
                            <a href='#'>Wish Order</a>
                          </li>
                          <li>
                            <a href='#'>Catering Food</a>
                          </li>
                          <li>
                            <a href='#'>Find us in these state</a>
                          </li>
                          <li>
                            <a href='#'>All Categories</a>
                          </li>
                        </ul>
                      </li>

                      <li className='navbar-item'>
                        <a class='navbar-link ' href='#'>
                          CATERING
                        </a>
                      </li>

                      <li className='navbar-item'>
                        <a class='navbar-link ' href='#'>
                          RECIPE
                        </a>
                      </li>

                      <li className='navbar-item'>
                        <a class='navbar-link ' href='#'>
                          DIARY
                        </a>
                      </li>
                    </ul>

                    <div>
                      <Link to={"/CustomerRegistration"}>
                        <button type='button' class='btnopen btn-primary'>
                          <i class='fa-solid fa-right-to-bracket me-1'></i>
                          Open Your Account
                        </button>
                      </Link>

                      <Link to={"/CustomerLogin"}>
                        <button
                          type='button'
                          class='btnSign btn-primary'
                          onClick={() => {
                            navigate("login");
                          }}
                        >
                          {" "}
                          <i class='fa-solid fa-right-to-bracket me-1'></i>
                          Sign In
                        </button>
                      </Link>

                      <button
                        className='header-widget header-cart '
                        title='Cartlist'
                        onClick={() => {
                          setState({ isPaneOpen: true });
                        }}
                      >
                        <i className='fas fa-shopping-basket'></i>
                        <sup>9+</sup>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ================== Drawer Left /Left Sidebar ================== */}
      <div style={{ zIndex: 999 }}>
        <SlidingPane
          className='slidingpaneLeft'
          isOpen={paneLeft}
          from='left'
          width='320px'
          z-Index='27'
          onRequestClose={() => SetpanLeft(false)}
        >
          <div className='d-flex'>
            <div className='row'>
              <div className='col-md-10'>
                <a href='https://ownfood.hostdivine.com/'>
                  {" "}
                  <img
                    src={"/Assets/Img/ownfood.png"}
                    className='img-fluid'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-2'>
                {" "}
                <button
                  class=''
                  onClick={() => {
                    SetpanLeft(false);
                  }}
                >
                  <i class='icofont-close'></i>
                </button>
              </div>
            </div>
          </div>

          <div className='sidebar overflow-hidden'>
            <div>
              <div className='sidebar-item mt-5'>
                <div className='sidebar-title'>
                  <span>EARN MONEY</span>
                </div>
              </div>

              <div className='sidebar-item'>
                <div className='sidebar-title' onClick={handleShow}>
                  <span>ALL FOOD</span>
                  <FaAngleRight size={25} />
                </div>
              </div>

              <div className='sidebar-item'>
                <div className='sidebar-title'>
                  <span>CATERING</span>
                </div>
              </div>

              <div className='sidebar-item'>
                <div className='sidebar-title'>
                  <span>FAQ</span>
                </div>
              </div>

              <div className='sidebar-item'>
                <div className='sidebar-title'>
                  <span>Dairy</span>
                </div>
              </div>
            </div>
          </div>
        </SlidingPane>
      </div>

      <Offcanvas
        show={show}
        toggleOffcanvas={toggleOffcanvas}
        onHide={handleCloseSidebar}
        style={{ width: 319 }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className='d-flex align-items-center ms-4'>
              <div onClick={toggleOffcanvas}>
                {" "}
                <FaArrowLeft />
              </div>
              <div className='ms-5'>
                {" "}
                <h4>Main Menu</h4>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='secoundTitle'> ALL FOOD</div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>POPLULAR KITCHEN</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>INSTANT FOOD</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>PRE-ORDER FOOD</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
          <div className='sidebar-item'>
            <div className='sidebar-title'>WISH-ORDER</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* ================== drawer Right / Right Sidebar ================== */}
      <div>
        <SlidingPane
          className='some-custom-class'
          overlayClassName='some-custom-overlay-class'
          isOpen={state.isPaneOpen}
          width='400px'
          onRequestClose={() => setState({ paneLeft: false })}
        >
          <aside className='cart-sidebar active  '>
            <div className='cart-header'>
              <div className='cart-total'>
                <i className='fas fa-shopping-basket'></i>
                <span>total item (5)</span>
              </div>
              <button
                className='cart-close'
                onClick={() => {
                  setState({ isPaneOpen: false });
                }}
              >
                <span className='icofont-close'>
                  <AiOutlineClose />
                </span>
              </button>
            </div>
            <ul className='cart-list'>
              <li className='cart-item'>
                <div className='cart-media'>
                  <a href='#'>
                    <img src='Assets/Img/product/01.jpg' alt='product' />
                  </a>
                  <button className='cart-delete'>
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
                <div className='cart-info-group'>
                  <div className='cart-info'>
                    <h6>
                      <a href='product-single.html'>existing product name</a>
                    </h6>
                    <p>Unit Price - $8.75</p>
                  </div>
                  <div className='cart-action-group'>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <FaMinus />
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <FaPlus />
                      </button>
                    </div>
                    <h6>$56.98</h6>
                  </div>
                </div>
              </li>
              <li className='cart-item'>
                <div className='cart-media'>
                  <a href='#'>
                    <img src='Assets/Img/product/02.jpg' alt='product' />
                  </a>
                  <button className='cart-delete'>
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
                <div className='cart-info-group'>
                  <div className='cart-info'>
                    <h6>
                      <a href='product-single.html'>existing product name</a>
                    </h6>
                    <p>Unit Price - $8.75</p>
                  </div>
                  <div className='cart-action-group'>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <FaMinus />
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <FaPlus />
                      </button>
                    </div>
                    <h6>$56.98</h6>
                  </div>
                </div>
              </li>
              <li className='cart-item'>
                <div className='cart-media'>
                  <a href='#'>
                    <img src='Assets/Img/product/03.jpg' alt='product' />
                  </a>
                  <button className='cart-delete'>
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
                <div className='cart-info-group'>
                  <div className='cart-info'>
                    <h6>
                      <a href='product-single.html'>existing product name</a>
                    </h6>
                    <p>Unit Price - $8.75</p>
                  </div>
                  <div className='cart-action-group'>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <FaMinus />
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <FaPlus />
                      </button>
                    </div>
                    <h6>$56.98</h6>
                  </div>
                </div>
              </li>
              <li className='cart-item'>
                <div className='cart-media'>
                  <a href='#'>
                    <img src='Assets/Img/product/04.jpg' alt='product' />
                  </a>
                  <button className='cart-delete'>
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
                <div className='cart-info-group'>
                  <div className='cart-info'>
                    <h6>
                      <a href='product-single.html'>existing product name</a>
                    </h6>
                    <p>Unit Price - $8.75</p>
                  </div>
                  <div className='cart-action-group'>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <FaMinus />
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <FaPlus />
                      </button>
                    </div>
                    <h6>$56.98</h6>
                  </div>
                </div>
              </li>
              <li className='cart-item'>
                <div className='cart-media'>
                  <a href='#'>
                    <img src='Assets/Img/product/05.jpg' alt='product' />
                  </a>
                  <button className='cart-delete'>
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
                <div className='cart-info-group'>
                  <div className='cart-info'>
                    <h6>
                      <a href='product-single.html'>existing product name</a>
                    </h6>
                    <p>Unit Price - $8.75</p>
                  </div>
                  <div className='cart-action-group'>
                    <div className='product-action'>
                      <button className='action-minus' title='Quantity Minus'>
                        <FaMinus />
                      </button>
                      <input
                        className='action-input'
                        title='Quantity Number'
                        type='text'
                        name='quantity'
                        value='1'
                      />
                      <button className='action-plus' title='Quantity Plus'>
                        <FaPlus />
                      </button>
                    </div>
                    <h6>$56.98</h6>
                  </div>
                </div>
              </li>
            </ul>
            <div className='cart-footer'>
              <button className='coupon-btn'>Do you have a coupon code?</button>
              <form className='coupon-form'>
                <input type='text' placeholder='Enter your coupon code' />
                <button type='submit'>
                  <span>apply</span>
                </button>
              </form>
              <a className='cart-checkout-btn' href='checkout.html'>
                <span className='checkout-label'>Proceed to Checkout</span>
                <span className='checkout-price'>$369.78</span>
              </a>
            </div>
          </aside>
        </SlidingPane>
      </div>

      {/* ================== Large Search ================== */}

      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          style={{ zIndex: 5 }}
          open={openSearch}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <div className='container-fluid'>
              <div className='d-flex  justify-content-between align-items-center'>
                <a href='https://ownfood.hostdivine.com'>
                  <img
                    src={"/Assets/Img/Logo.png"}
                    style={{ width: 100, marginTop: -20 }}
                  />
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    SetpanLeft(true);
                  }}
                  style={{
                    height: 40,
                    // width: 40,
                    color: "#1b6dc1",
                  }}
                >
                  <i class='fas fa-bars fa-lg '></i>
                </button>
                <form className='sf_search-form'>
                  <input
                    id='searchInput'
                    type='text'
                    placeholder='Food, groceries, drinks, etc'
                    style={{ marginLeft: 5 }}
                  />
                  <button>
                    <i className='fas fa-search'></i>
                  </button>
                </form>

                {/* <form className="header-form "></form> */}
                <button
                  type='button'
                  class='btn-close'
                  aria-label='Close'
                  onClick={() => {
                    handleClose();
                  }}
                ></button>
              </div>
              <div className='mt-3'>
                {" "}
                <Box className='container' sx={{ width: "71%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label='basic tabs example'
                    >
                      <Tab label='All' {...a11yProps(0)} />
                      <Tab label='Restaurant' {...a11yProps(1)} />
                      <Tab label='Grocery' {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            {/* <ImageIcon /> */}
                            <img
                              src={Uber_image[0].item_image}
                              alt=''
                              className='img-fluid'
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Italian'
                          secondary='Jan 9, 2014'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <img
                              src={Uber_image[1].item_image}
                              alt=''
                              className='img-fluid'
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Pizza' secondary='Jan 7, 2014' />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <img
                              src={Uber_image[2].item_image}
                              alt=''
                              className='img-fluid'
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Maxican'
                          secondary='July 20, 2014'
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Photos'
                          secondary='Jan 9, 2014'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <WorkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Work' secondary='Jan 7, 2014' />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Vacation'
                          secondary='July 20, 2014'
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Photos'
                          secondary='Jan 9, 2014'
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <WorkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Work' secondary='Jan 7, 2014' />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary='Vacation'
                          secondary='July 20, 2014'
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                </Box>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
