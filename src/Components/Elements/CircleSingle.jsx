import React from "react";
import Tooltip from "rc-tooltip";
import { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
import { useState } from "react";
const CircleSingle = ({ item, setShow }) => {
  let [seller, setSeller] = useState();
  let circleSellerPostBody = [];
  item?.circleSellerID?.map((x) => circleSellerPostBody.push(x.value));

  let [country, setCountry] = useState();
  let circleCountryPostBody = [];
  item?.circleCountryID?.map((x) => circleCountryPostBody.push(x.value));

  let [category, setCategory] = useState();
  let circleCategoryPostBody = [];
  item?.circleCategoryID?.map((x) => circleCategoryPostBody.push(x.value));
  console.log(circleCategoryPostBody[0]);

  useEffect(() => {
    // ================= get-seller-with-food-details ====================

    if (circleSellerPostBody.length > 0) {
      axios
        .post(BaseURL + "/get-seller-with-food-details", {
          _id: circleSellerPostBody,
        })
        .then((res) => {
          setSeller(res.data.data);
        });
    }

    //   ============ get-country-by-admin-selected ============

    if (circleCountryPostBody.length > 0) {
      axios
        .post(BaseURL + "/get-country-by-admin-selected", {
          _id: circleCountryPostBody,
        })
        .then((res) => {
          setCountry(res.data.data);
        });
    }

    //   ============ get-food-by-category ============
    if (circleCategoryPostBody.length > 0) {
      axios
        .get(
          BaseURL +
            "/get-food-by-category/" +
            item?.circleCategoryID[0]?.value +
            "/" +
            "0",
          {
            _id: circleCategoryPostBody,
          }
        )
        .then((res) => {
          setCategory(res.data.data);
        });
    }
  }, []);

  return (
    <div className=' d-flex align-items-center justify-content-center'>
      <div className='upper'>
        <div className='try'></div>

        <div className='main'>
          <div className='name'>Biryani</div>

          <div className='imguppertwo ' style={{ backgroundColor: "#e11d48" }}>
            <h3>{item?.circleType}</h3>
          </div>

          <div className='imgupperone '>
            <i></i>
          </div>

          <div className='img0 ' style={{ backgroundColor: "#e11d48" }}>
            <i class='fa-solid fa-plus fa-2xl plus  '></i>
          </div>

          {seller?.length !== undefined ? (
            <>
              {seller?.slice(0, 6).map((item, index) => (
                <Tooltip placement='top' overlay={"Custom Text"} key={index}>
                  <img
                    className={`img${index + 1} img-fluid`}
                    alt=''
                    src={item?.sellerProfilePhoto}
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </Tooltip>
              ))}
            </>
          ) : null}

          {country?.length !== undefined ? (
            <>
              {country?.slice(0, 6).map((item, index) => (
                <Tooltip placement='top' overlay={"Custom Text"} key={index}>
                  <img
                    className={`img${index + 1} img-fluid`}
                    alt=''
                    src={item?.countryFlag}
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </Tooltip>
              ))}
            </>
          ) : null}

          {category?.[0]?.data?.length !== undefined ? (
            <>
              {category?.[0]?.data?.slice(0, 6).map((item, index) => (
                <Tooltip placement='top' overlay={"Custom Text"} key={index}>
                  <img
                    className={`img${index + 1} img-fluid`}
                    alt=''
                    src={item?.foodImage}
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </Tooltip>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CircleSingle;
