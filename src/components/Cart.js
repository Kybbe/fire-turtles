

import bag from '../assets/graphics/bag.svg';

import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteCart} from "../store/menuActions";
import { useNavigate } from "react-router-dom";

function Cart() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
	
	function openCart() {
		document.querySelector('.cart').classList.toggle('openCart');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
		document.querySelector('.App').classList.toggle('noOverflowScroll');
	}
	
	function order() {
	  openCart();
		console.log("ORDER");
		//set cart to nothing since we ordered
		dispatch( deleteCart() );
		navigate('/status')
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
			<p className='cartTotal'>{totalQuantity}</p>
		</div>
		</div>
	)
}

export default Cart;
