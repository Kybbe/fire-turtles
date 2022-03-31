import add from '../assets/graphics/add.svg';

import MenuItem from '../components/MenuItem';
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
				<MenuItem />
			</ul>
			<img src={footer} alt="footer" className="footer"></img>
		</div>
	)
}

export default Menu;