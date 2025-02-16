import React from 'react';
import Icon1 from '../images/gpay.png'
import Icon2 from '../images/applepay.png'

import Icon3 from '../images/american.png'
import Icon4 from '../images/master.png'
import Icon5 from '../images/visa.png'
import Icon6 from '../images/union.png'
import Fb from '../images/fb.png';
import Insta from '../images/apple.png'




import{
    Container,
    Col,
    Row
   }  from 'reactstrap';
function Threechoco (){
    return(
            <div className='footer'>
                 <Container >
                    <Row >
                        <Col  xs={12} md={12} lg={3}>
                            <h2>Say hi!</h2>
                            <p>digital@simplychocolate.dk</p>
                            <p>Simply® <br></br>
                                Amager Landevej 123<br></br>
                                2770 Kastrup<br></br>
                                CVR. nr. 32761844</p>
                                <Container>
                    <Row>
                    <Col  xs={12} md={12} lg={2}> 
                    <a href="#" target='blank'><img src={Fb}></img></a>
                    </Col>
                    <Col  xs={12} md={12} lg={2}> 
                    <a href="#" target='blank'> <img src={Insta}></img></a>
                    </Col>
                    </Row>
                </Container>
                        </Col>
                      
                            <Col  xs={12} sm={6} md={12} lg={3}>
                            <h3>For businesses</h3>
                            <p>Log In
                            </p>
                            <p>Create a b2b profile</p>
                            <p> Chocolate for the office</p>
                            <p> My profile</p>
                            </Col>
                            <Col  xs={12} sm={6} md={12} lg={2}>
                            <h3>Info</h3>
                            <p>Search</p>
                            <p> Shipping and delivery</p>
                            <p> Privacy policy</p>
                            <p> Inspection report</p>
                            <p> Cookies</p>
                            <p> Frequently asked questions</p>
                            <p> Contact</p>
                            <p>   Subscription policy/</p>
                            <p>  See my subscription</p>
                            <p> Job</p>
                            <p>Impressum</p>
                            </Col>
                            <Col  xs={12} sm={6} md={12} lg={3}>
                            <h3>About Simply®</h3>
                            <p>About Us</p>
                            <p>All natural</p>
                            <p> Sustainability</p>
                            <p> Responsibility</p>
                            <p> Our team</p>
                            </Col>
                            <Col  xs={12} sm={6} md={12} lg={1}>
                            <h3>Shop</h3>
                            <p>Bars</p>
                            <p> Bites</p>
                            <p> Protein</p>
                            <p> Gift Boxes</p>
                            <p>Christmas calendars</p>
                            <p> Active</p>
                            </Col>
                         
                       
                     
                    </Row>
                </Container>
                <Container>
                    <Row>
                    <Col  xs={12} sm={6} md={12} lg={2}> 
                    <img src={Icon1}></img>
                    </Col>
                    <Col  xs={12} sm={6} md={12} lg={2}> 
                    <img src={Icon2}></img>
                    </Col>
                    <Col  xs={12} sm={6} md={12} lg={2}>
                    <img src={Icon3}></img> 
                    </Col>
                    <Col  xs={12} sm={6} md={12} lg={2}> 
                    <img src={Icon4}></img>
                    </Col>
                    <Col  xs={12} sm={6} md={12} lg={2}> 
                    <img src={Icon5}></img>
                    </Col>
                    <Col  xs={12} sm={6} md={12} lg={2}> 
                    <img src={Icon6}></img>
                    </Col>

                    </Row>
                </Container>
               

            </div>
                    
        );
    }
    export default Threechoco;   