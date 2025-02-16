import React from 'react';

import Women from '../images/women.webp';
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
          <img  className='woman-img' src={Women}></img>
          </Col>
          <Col  xs={12} md={12} lg={6}> 
          <div data-aos="slide-up" data-aos-delay="100" className='woman'>
            <b> Greenhouse Project</b>
            <h3>Our friends in Africa</h3>
            <p>In a greenhouse near a cocoa plantation close to San Pédro in Ivory Coast,
                 a group of local women cultivate vegetables and fruits. It's not possible to 
                 grow vegetables and fruits in that area due to soil conditions, lack of water,
                 and the heat. But with our greenhouse, the right soil, and water supply, we 
                 have contributed to a nourishing future for our cocoa farmers and their families.
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