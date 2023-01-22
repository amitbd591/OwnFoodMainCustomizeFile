import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HowWeDo = () => {
  const data = [
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
      <Row className='mt-2'>
        {data.map((item, index) => {
          return (
            <Col lg={4}>
              <div className='card_details'>
                <Card.Title className='d-flex justify-content-center mt-2 mb-2 card_title'>
                  Recipe Name
                </Card.Title>
                <Card.Body className='Card'>
                  <div className='before_class'>
                    <img
                      src={item.image_before}
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
                      src={item.image_after}
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
          );
        })}
      </Row>
    </Container>
  );
};

export default HowWeDo;
