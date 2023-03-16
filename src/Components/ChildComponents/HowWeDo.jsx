import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HowWeDo = ({ data }) => {
  console.log(data);
  const datas = [
    {
      image_before: "/Assets/Img/howWeDo_1.jpeg",
      image_after: "/Assets/Img/howWeDo_2.jpeg",
    },
    {
      image_before: " /Assets/Img/howWeDo_3.jpeg",
      image_after: "/Assets/Img/howWeDo_4.jpeg",
    },
    {
      image_before: "/Assets/Img/howWeDo_5.jpeg",
      image_after: "/Assets/Img/howWeDo_6.jpeg",
    },
  ];

  return (
    <Container className='HowWeDo '>
      <div class='title-area text-center pb-2'>
        <span class='sub-title'></span>
        <h2 class='sec-title'>
          <span className='sf_init_title'> How Do</span>{" "}
          <span class=' sf_text-theme'>We Do</span>
        </h2>
      </div>
      {datas.map((item, index) => (
        <Row className='mt-2' key={index}>
          <Col lg={4} key={index}>
            <div className='card_details'>
              <Card.Title className='d-flex justify-content-center mt-2 mb-2 card_title'>
                {item?.sectionTitle1}
              </Card.Title>
              <Card.Body className='Card'>
                <div className='before_class'>
                  <img
                    src={data[0]?.image_before}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='d-flex justify-content-center span-class-before'>
                    <span className='before'>
                      <p>Before</p>{" "}
                    </span>
                  </div>
                </div>
                <div className='after_class'>
                  <img
                    src={data[0]?.image_after}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='span-class-after'>
                    <span className='after '>
                      {" "}
                      <p>After</p>{" "}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Col>
          <Col lg={4} key={index}>
            <div className='card_details'>
              <Card.Title className='d-flex justify-content-center mt-2 mb-2 card_title'>
                {item?.sectionTitle2}
              </Card.Title>
              <Card.Body className='Card'>
                <div className='before_class'>
                  <img
                    src={data[1]?.image_before}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='d-flex justify-content-center span-class-before'>
                    <span className='before'>
                      <p>Before</p>{" "}
                    </span>
                  </div>
                </div>
                <div className='after_class'>
                  <img
                    src={data[1]?.image_after}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='span-class-after'>
                    <span className='after '>
                      {" "}
                      <p>After</p>{" "}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Col>
          <Col lg={4} key={index}>
            <div className='card_details'>
              <Card.Title className='d-flex justify-content-center mt-2 mb-2 card_title'>
                {item?.sectionTitle3}
              </Card.Title>
              <Card.Body className='Card'>
                <div className='before_class'>
                  <img
                    src={data[2]?.image_before}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='d-flex justify-content-center span-class-before'>
                    <span className='before'>
                      <p>Before</p>{" "}
                    </span>
                  </div>
                </div>
                <div className='after_class'>
                  <img
                    src={data[2]?.image_after}
                    alt=''
                    className='img-fluid card-image'
                  />
                  <div className='span-class-after'>
                    <span className='after '>
                      {" "}
                      <p>After</p>{" "}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default HowWeDo;
