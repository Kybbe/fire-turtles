import add from '../assets/graphics/add.svg';

import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/menuActions";

function Menu() {
	
	const dispatch = useDispatch();
	const menu = useSelector(state => state.menu);

	function addItem(item) {
		console.log("adding item to cart", item);
		dispatch( addToCart(item) );
	}

	return (
		<div className="menuInfo backgroundBeige">
			<img src={header} alt="header" className="header"></img>
			<h1 style={{textAlign: "center"}}>Meny</h1>

			<ul className='menuList'>
				{menu.map(item => (
					<li key={item.id} className='menuItem' onClick={() => addItem({name: item.title, price: item.price})}>
					<img src={add} alt="add" className='menuPlus'></img>
					<div className='menuItemText'>
						<h2 className="menuTitle">{item.title}</h2>
						<p className="menuDescription">{item.desc}</p>
					</div>
					<h2 className="menuPrice">{item.price} kr</h2>
				</li>	
				))}
			</ul>
			<img src={footer} alt="footer" className="footer"></img>
		</div>
	)
}

export default Menu;