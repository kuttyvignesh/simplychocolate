import React from 'react';

import Solar from '../images/solar.jpg';
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
          <img  className='woman-img' src={Solar}></img>
          </Col>
          <Col  xs={12} md={12} lg={6}> 
          <div data-aos="slide-up" data-aos-delay="100" className='woman'>
            <b> Solar panels</b>
            <h3>We love the sun</h3>
            <p>Normally, the sun is one of chocolate's worst enemies – both sunlight and the heat from its rays can damage chocolate. But at Simply Chocolate in Copenhagen, the two are actually best friends. We've installed our very own solar panel system on the roof of the factory. This means that we are 100% self-sufficient with energy when the sun is shining.
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