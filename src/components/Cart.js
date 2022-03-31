import upArrow from '../assets/graphics/arrow-up.svg';
import downArrow from '../assets/graphics/arrow-down.svg';

import bag from '../assets/graphics/bag.svg';

function Cart() {

	function openCart() {
		document.querySelector('.cart').classList.toggle('openCart');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
	}

	function order() {
		document.querySelector('.cart').classList.toggle('openCart');
		console.log("ORDER");
	}

	return(
		<div>
			<div className="cart">
			<h1 style={{textAlign: "center"}}>Din beställning</h1>

			<ul className='cartList'>
				<li className='cartItem'>
					<div className='itemText'>
						<h3 className='cartTitle'>Titel</h3>
						<p className='cartPrice'>123 kr</p>
					</div>
					<div className="quantity">
						<button className='arrow up'><img src={upArrow} alt="Up arrow"></img></button>
						<p className='cartQuantity'>1</p>
						<button className='arrow down'><img src={downArrow} alt="Down arrow"></img></button>
					</div>
				</li>
			</ul>

			<div className='cartBottom'>
				<div className='cartBottomText'>
					<h2>Total</h2>
					<p>Inkl moms + drönarleverans</p>
				</div>
				<div className='cartBottomPrice'>
					<h2>123 kr</h2>
				</div>
			</div>
			<button className='cartOrder' onClick={order}>Take my money!</button>

		</div>
		<div style={{position: "relative"}}>
			<button className='cartBtn' onClick={openCart}><img src={bag} alt="bag"></img></button>
			<p className='cartTotal'>0</p>
		</div>
		</div>
	)
}

export default Cart;
