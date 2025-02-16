import React from 'react';
import Navimg from '../images/nav-bar-img.webp'

const Navbar = () => {

        return(
            <div >
                <div className='nav-img'>
                <img className='nav-img' src={Navimg}  alt="chocolate image" classNam='img-responsive'></img>
                </div>
               
            </div>
        );
    }
  
export default Navbar;