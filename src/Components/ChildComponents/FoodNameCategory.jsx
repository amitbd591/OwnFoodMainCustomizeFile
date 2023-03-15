import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FoodNameCategory = ({ data }) => {
  return (
    <Container className='FoodNameCategory'>
      <Row className='gap-4 '>
        <Col className=' shadow-lg'>
          <Row className=''>
            <Col className='bg p-2 text-white text-center'>
              <h4 className=''>{data?.sectionTitle1}</h4>
            </Col>
            <Row className='rowFix'>
              {data?.sectionCategories1.map((item, index) => (
                <Col md={2} key={index}>
                  <div className='item'>
                    <Button
                      className={`item${
                        Math.floor(Math.random() * 10) + 1
                      } p-4`}
                    >
                      {item.label}
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodNameCategory;
