import React from 'react';
import Choco from '../images/chocolate.webp'
import ChocoBar from '../images/choco-bar.webp'
import Addtocart from '../components/addtocart'

import ProductItems from './data/data';
import{
    Container,
    Col,
    Row
   }  from 'reactstrap';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

function Threechoco (
    productItems,
    handleAddProduct,
    handleRemoveProduct
){
    return(
        <>
            <div className='three-img'>
                <p className='text'>Summer bestsellers</p>
                <h2 className='text'>Natural protein bars</h2>
                     <div className='rowimg' >
                        {ProductItems.map((productItem)=>(
                            <div className=''>
                            <img className="innerimage" src={productItem.Img} alt='1'></img>
                            <p>{productItem.Text}</p>
                            <button className='btn-inner' onClick={()=>handleAddProduct(productItem)}>addtocart</button>   
                           </div>   
                        ))}
                     </div><br></br><br></br><br></br>
            </div>
            
            
            <script src="bower_components/aos/dist/aos.js"></script> 
            <script>
                AOS.init();
            </script>
            
            
            
        </>
    );
}
export default Threechoco;