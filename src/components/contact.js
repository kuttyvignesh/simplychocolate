import React from 'react';
import Top from '../components/tophead';
import Navbar  from './navbar';
import Menu from '../components/menu';
const Contact = ()=>{
  
        return(
            <div className='contact'>
    
                 
  
                <p className='simply'>SIMPLY<sup className='sup'>®</sup></p>
                <div>
                    <p className='contact-details'>Amager Landevej 123</p>
                   <p className='contact-details'> 2770 Kastrup</p>
                   <p className='contact-details'> CVR: 32761844</p>
                   <p className='contact-details'> +45 3634 0070</p>
                </div>
                <div>
                    <p className='location'><a href="https://maps.app.goo.gl/Ncbk6FPZYFyqqrCC7" target='blank'>Location of Our factory</a></p>
                </div>
                <div>
                    <h1 className='details'>Webshop kundeservice</h1>
                    <p className='details'>digital@simplychocolate.dk</p>
                    <h1 className='details'>Generelle henvendelser</h1>
                    <p className='details'>info@simplychocolate.dk</p>
                    <h1 className='details'>Salg</h1>
                    <p className='details'>sales@simplychocolate.dk</p>
                    <h1 className='details'>Presse</h1>
                    <p className='details'>marketing@simplychocolate.dk</p>
                    <h1 className='details'>Jobansøgninger</h1>
                    <p className='details'>hr@simplychocolate.dk</p>
                    <h1 className='details'>Økonomi</h1>
                    <p className='details'>finance@simplychocolate.dk</p>
                    <h1 className='details'>Contact us directly</h1>
                </div>
            </div>
       );
     }
    
export default Contact;