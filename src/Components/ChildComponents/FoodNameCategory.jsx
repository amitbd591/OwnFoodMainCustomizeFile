import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FoodItem } from "../../Database/ImgData";

const FoodNameCategory = () => {
  return (
    <Container fluid className='FoodNameCategory'>
      <Row className='gap-1 '>
        <Col className='mx-2 shadow-lg'>
          <Row className='gap-2'>
            <Col className='bg-primary p-2 text-white'>
              <h4 className='text-white'>The Food Depot</h4>
            </Col>
            <div className='item p-3'>
              {FoodItem.map((item, index) => (
                <Button className={`item${index + 1} p-4`}>
                  {item.item_name}
                </Button>
              ))}
            </div>
          </Row>
        </Col>
        <Col className='mx-3 shadow-lg'>
          <Row className='gap-2'>
            <Col className='bg-primary p-2 text-white'>
              <h4 className='text-white'>Chicken products</h4>
            </Col>
            <div className='item p-3'>
              {FoodItem.map((item, index) => (
                <Button className={`item${index + 1} p-4`}>
                  {item.item_name}
                </Button>
              ))}
            </div>
          </Row>
        </Col>
        <Col className='mx-3 shadow-lg'>
          <Row className='gap-2'>
            <Col className='bg-primary p-2 text-white'>
              <h4 className='text-white'>Hamburger</h4>
            </Col>
            <div className='item p-3'>
              {FoodItem.map((item, index) => (
                <Button className={`item${index + 1} p-4`}>
                  {item.item_name}
                </Button>
              ))}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodNameCategory;
