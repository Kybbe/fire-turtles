import upArrow from '../assets/graphics/arrow-up.svg';
import downArrow from '../assets/graphics/arrow-down.svg';

function Cart() {
	return(
		<div className="cart">
			<h1>Din beställning</h1>

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

		</div>
	)
}

export default Cart;
