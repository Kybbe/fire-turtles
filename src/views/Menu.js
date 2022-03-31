import add from '../assets/graphics/add.svg';

import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/menuActions";

function Menu() {
	
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	function addItem(item) {
		console.log("adding item to cart", item);
		dispatch( addToCart(item) );
	}
	console.log(cart)

	return (
		<div className="menuInfo backgroundBeige">
			<img src={header} alt="header" className="header"></img>
			<h1 style={{textAlign: "center"}}>MENU</h1>

			<ul className='menuList'>
				<li className='menuItem' onClick={() => addItem({name: "Kaffe Latte", price: "40"})}>
					<img src={add} alt="add" className='menuPlus'></img>
					<div className='menuItemText'>
						<h2 className="menuTitle"> Kaffe Latte </h2>
						<p className="menuDescription">description</p>
					</div>
					<h2 className="menuPrice">40 kr</h2>
				</li>
			</ul>
			<img src={footer} alt="footer" className="footer"></img>
		</div>
	)
}

export default Menu;