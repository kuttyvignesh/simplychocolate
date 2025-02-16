import React from 'react';

import Envi from '../images/environment.jpg';
import{
 Container,
 Col,
 Row
}  from 'reactstrap';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

function ContainerExample() {
    return (
        <div >
      <Container >
        <Row >
          <Col  xs={12} md={12} lg={6}> 
          <img  className='woman-img' src={Envi}></img>
          </Col>
          <Col  xs={12} md={12} lg={6}> 
          <div data-aos="slide-up" data-aos-delay="100" className='woman'>
            <b>  Environment</b>
            <h3>Our green journey</h3>
            <p>It is quite understandable that there is a significant focus on packaging when discussing the environment and recycling, and at Simply Chocolate, we are constantly working towards our goal of 100% recyclable packaging. We are on a mission. Imagine an edible wrapper - that is, no waste. We're not quite there yet, but we're on our way, and until we reach our goal, we're doing everything we can to improve more and more.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      <script src="bower_components/aos/dist/aos.js"></script> 
            <script>
    AOS.init();
  </script>
      </div>
    );
  }
  
  export default ContainerExample;