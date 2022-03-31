
import MenuItem from '../components/MenuItem';
import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';

import { useSelector } from "react-redux";

function Menu() {
	
	
	const cart = useSelector(state => state.cart);

	

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