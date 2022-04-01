import upArrow from '../assets/graphics/arrow-up.svg';
import downArrow from '../assets/graphics/arrow-down.svg';

import bag from '../assets/graphics/bag.svg';

import { useSelector, useDispatch } from "react-redux";
import { deleteCart, removeFromCart, addToCart } from "../store/menuActions";
import { navigate } from "react-redux";

function Cart() {

	const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
	
	function openCart() {
		document.querySelector('.cart').classList.toggle('openCart');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
		document.querySelector('.App').classList.toggle('noOverflowScroll');
	}
	
	function order() {
	  openCart();
		console.log("ORDER");
		navigate('/status')
		//set cart to nothing since we ordered
		dispatch( deleteCart() );
		navigate('/status')
	}
	
	function removeItem(item) {
		console.log("REMOVE ITEM", item);
		dispatch( removeFromCart(item) );
	}
	
	function addItem(item) {
		console.log("adding item to cart", item);
		dispatch( addToCart(item) );
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
				{cart.map(item => (			
				<li className='cartItem' key={item.name?item.name:""}>
					<div className='itemText'>
						<h3 className='cartTitle'>{item.name?item.name:""}</h3>
						<p className='cartPrice'>{item.price?item.price:""} kr</p>
					</div>
					<div className="quantity">
						<button className='arrow up' onClick={() => addItem({name: item.name, price: item.price})}><img src={upArrow} alt="Up arrow"></img></button>
						<p className='cartQuantity'>{item.quantity?item.quantity:""}</p>
						<button className='arrow down' onClick={() => removeItem(item.name)}><img src={downArrow} alt="Down arrow"></img></button>
					</div>
				</li>
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
