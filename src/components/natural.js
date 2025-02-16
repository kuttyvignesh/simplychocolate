import React from 'react';


import Img from '../images/FB_kvadrat_mix_2024_47.webp'
import Img1 from '../images/FB_kvadrat_mix_2024_45.webp'
import Img2 from '../images/FB_kvadrat_mix_2024_49.webp'
import{
    Container,
    Col,
    Row
   }  from 'reactstrap';
function Threechoco (){
    return(
            <div className='free-top'>
                <h2 className='text'>It's all natural</h2>
            <p className='text'>At Simply, we only use natural ingredients, steering clear of synthetic powders and artificial additives. We're a bit picky when it comes to our ingredients. We<br></br>
                 only use the best nature has to offer – taste and quality mean everything to us. Always. We spend a lot of time searching for new and exciting flavors, and <br></br>
                 we're willing to go to great lengths for new innovative opportunities, but we never compromise on good taste. This is our love for natural chocolate.</p>
                 <div className='free-top'>
            <h2 className='text'>Spread joy around you</h2><br></br>
            
            <Container >
                <Row className='gap'>
                    <Col   xs={12} md={12} lg={4}>
                        <div className='img-index-1'> <img className='choco-col-img'  src={Img}></img></div>
                       <div className='img-index-2'> <button>For festive occasions</button></div>
                    </Col>
                    <Col  xs={12} md={12} lg={4}>
                        <div className='img-index-1'><img className='choco-col-img' src={Img1}></img></div>
                        <div className='img-index-2'> <button>For Birthday Party</button></div>
                    </Col>
                    <Col  xs={12} md={12} lg={4}>
                    <div className='img-index-1'><img className='choco-col-img' src={Img2}></img></div>
                    <div className='img-index-2'> <button>For the hostess</button></div>
                    </Col>
                </Row>


            </Container><br></br><br></br>
            </div>
            </div>
          );
        }
        export default Threechoco;