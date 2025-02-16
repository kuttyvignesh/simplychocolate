import React from 'react';
import free1 from '../images/free-1.jpg'
import free2 from '../images/free-2.jpg'
import{
    Container,
    Col,
    Row
   }  from 'reactstrap';
function Threechoco (){
    return(
            <div>
                <h3 className='text'>Looking for vegan or gluten-free chocolate?</h3><br></br>
                <Container >
                    <Row className='gap-free'>
                        <Col  xs={12} md={12} lg={6}>
                            <div className='free-img'> <img className='free' src={free1} width='500px'></img></div>
                            <div  className='free-text'><p>Vegan chocolate</p></div>
                        </Col>
                        <Col  xs={12} md={12} lg={6}>
                        <div className='free-img'> <img className='free' src={free2} width='500px'></img></div>
                        <div  className='free-text'><p>Gluten-free chocolate</p></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
    export default Threechoco;       
