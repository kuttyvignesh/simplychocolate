import React from 'react';
import Gift1 from '../images/gift-1.webp';
import Gift2 from '../images/gift-2.webp';
import Gift3 from '../images/gift-3.webp';
import{
    Container,
    Col,
    Row
   }  from 'reactstrap';
function Threechoco (){
    return(
            <div  className='free-top'>
                <h2 className='text'>Inspiration for chocolate gifts</h2>
                <Container>
                <Row className='gap'>
                    <Col   xs={12} md={12} lg={4}>
                    <img className='gift' src={Gift1}></img>
                    <p className='text'>Mix chocolate bites</p>
                    <h5 className='text'>Premium Box - Exclusive gift box with 50 bites</h5>
                    <h5 className='text'>€61,95</h5>
                    </Col>
                    <Col   xs={12} md={12} lg={4}>
                    <img  className='gift' src={Gift2}></img>
                    <p className='text'>Mix chocolate bestsellers</p>
                    <h5 className='text'>Premium Heartbox - Exclusive gift box with 40 bites</h5>
                    <h5 className='text'>€47,95</h5>
                    </Col>
                    <Col   xs={12} md={12} lg={4}>
                    <img className='gift' src={Gift3}></img>
                    <p className='text'>Mix chocolate bites</p>
                    <h5 className='text'>The Ultimate Box - Exclusive gift box with 80 bites</h5>
                    <h5 className='text'>€95,95</h5>
                    </Col>

                </Row>
                </Container>
            </div>
   );
        }
        export default Threechoco;