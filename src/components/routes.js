import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Contact from '../components/contact';
import Homepage from '../pages/homepage';
import LogIn from '../components/login';
const Rout=({
    productItems,
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance,
})=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
                <Route path='/Contact/' element={<Contact/>}/>
                <Route path='/LogIn/' element={<LogIn/>}/>

            </Routes>
        </div>
    )
}
export default Rout;
