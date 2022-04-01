

import bag from '../assets/graphics/bag.svg';

import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { addCart} from "../store/menuActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Cart() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
	
	function openCart() {
		document.querySelector('.cart').classList.toggle('openCart');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
		document.querySelector('.App').classList.toggle('noOverflowScroll');
	}
	
	async function order() {
	  openCart();
		console.log("ORDER");

		navigate("/status");
	}

	//go through all items in cart and calculate total price from item.price
	var totalPrice = 0;
	for (let i = 0; i < cart.length; i++) {
		totalPrice += Number(cart[i].price * cart[i].quantity);
	}

	// go through all items in cart and calculate total quantity from item.quantity
	var totalQuantity = 0;
	for (let i = 0; i < cart.length; i++) {
		totalQuantity += Number(cart[i].quantity);
	}

	//NEDAN GÖR VI LOCALSTORAGE TILL CARTEN SÅ DET SPARAS NÄR VI UPPDATERAR SIDAN. 
    
	 //useEffect - varjegång något uppdateras gör vi en funktion. Kommer senare användas i localstorage / callback.
	 useEffect(() => {
		function loadFromLocalStorage() {
		  let cartFromStorage = JSON.parse(localStorage.getItem("cart")) //localstorage del 2: hämtar datan du skickat/sparat in på webben och sätter vårat state till datan/skickar tillbaka infon. 
		  if(cartFromStorage !== null && cartFromStorage.length > 0) {
			dispatch(addCart(cartFromStorage))
		  }
		}
		loadFromLocalStorage()
	  }, [])
	
	  // localStorage del 1; sparar vår info i localstorage/webbläsaren. 
	  useEffect(() => {
		function saveToLocalStorage() {
		  localStorage.setItem("cart", JSON.stringify(cart))
		}
		function makeButtonBigAnimation() {
			document.querySelector('.cartTotal').classList.add('orderButtonAnimation');
			setTimeout(() => {
				document.querySelector('.cartTotal').classList.remove('orderButtonAnimation');
			}, 300);
		}		
		makeButtonBigAnimation();
		saveToLocalStorage()
	  }, [cart])
	
	return(
		<div>
			<div className="cart">
			<h1 style={{textAlign: "center"}}>Din beställning</h1>

			{cart.length !== 0 ? <ul className='cartList'>
				{cart.map((item, index) => (			
				<CartItem item={item} key={index} />
				))}
			</ul>: <h3 style={{textAlign: "center"}}>Inget i din kundvagn😢</h3>}

			<div className='cartBottom'>
				<div className='cartBottomText'>
					<h2>Total</h2>
					<p>Inkl moms + drönarleverans</p>
				</div>
				<div className='cartBottomPrice'>
					<h2>{totalPrice} kr</h2>
				</div>
			</div>
			<button className='cartOrder' onClick={order}>Take my money!</button>

		</div>
		<div style={{position: "relative"}}>
			<button className='cartBtn' onClick={openCart}><img src={bag} alt="bag"></img></button>
			<p className='cartTotal' onClick={openCart}>{totalQuantity}</p>
		</div>
		</div>
	)
}




export default Cart;
