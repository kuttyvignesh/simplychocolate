import React from 'react';
import Cart from './addtocart';
import Chocolate from '../images/chocolate.webp';
import{
 Container,
 Col,
 Row
}  from 'reactstrap';

function ContainerExample() {
    return (
        <div className='details-1'>
      <Container >
        <Row >
          <Col  xs={12} md={12} lg={6}> <div><img  className='img-choco' src={Chocolate}></img> </div></Col>
          <Col  xs={12} md={12} lg={6}><div className='choco-details'>
                    <h3> Protein Mix 30-Pack</h3> 
                    <h1>Flavor pack with 3 different protein bars</h1>
                    <h5>Sale price €67,95</h5>
                    <Cart/>
                </div>
                <p className='choco-details'><b>The Ultimate Tasting Pack</b><br></br>
                Start the year right and replenish your energy reserves with our natural protein bars. Perfect for a small hunger and a clear conscience.
                <br></br>
                <p>Taste our 3 strongest family members.</p>
                <p>
                10 x Rich Arnold - Caramel, peanuts, and dark chocolate<br></br>
                10 x Sixpack Sally - Caramel, yuzu, sesame, and milk chocolate<br></br>
                10 x Speedy Tom - Acai, cocoa, passion fruit, and dark chocolate
                </p>
                <ul>
                    <li>Gluten-free</li>
                    <li>Filled with natural ingredients</li>
                    <li>Handmade in Denmark</li>
                    <li>Award-winning chocolate</li>
                </ul>
                <h4>30 x 40g.</h4>
                </p>
        </Col>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default ContainerExample;