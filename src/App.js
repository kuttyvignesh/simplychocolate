import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/routes';
import Navbar from './components/navbar';
import Menu  from './components/menu';
import data from './components/data/data';
import Footer from './pages/footer';
import { BrowserRouter as Router} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(); 



const App = () => {
	const {productItems}=data;
	const [cartItems,setCartItems]=useState([]);

	const handleAddProduct = (product) =>{
		const ProductExist= cartItems.find((item) => item.id === product.id);
		if(ProductExist){
		  setCartItems(
			cartItems.map((item) =>
			   item.id === product.id
			 ? {...ProductExist,quantity: ProductExist.quantity + 1}
			  : item
			)
		  );
		  }else{
			setCartItems([...cartItems, {...product,quantity: 1}]);
		  }
		
	  };
	  const handleRemoveProduct =(product) =>{
		const ProductExist=cartItems.find((item) => item.id === product.id);
		if(ProductExist.quantity === 1){
		  setCartItems(cartItems.filter((item) => item.id !== product.id));
		}else{
		  setCartItems(
		  cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1} : item)
		  )
		}
	  }
	  const handleCartClearance = () =>{
		setCartItems([]);
	  }
	

return (
	<div>


	<Router>
		<Navbar/>
		<Menu />
		<Routes
		productItems={productItems}
		cartItems={cartItems}
		handleAddProduct={handleAddProduct}
		handleRemoveProduct={handleRemoveProduct}
		handleCartClearance={handleCartClearance}
		/>
		<Footer/>
	</Router>



  
	</div>
)
}



export default App;

