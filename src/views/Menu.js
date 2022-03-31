import add from '../assets/graphics/add.svg';

import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';

function Menu() {
	return (
		<div className="menuInfo backgroundBeige">
			<img src={header} alt="header" className="header"></img>
			<h1 style={{textAlign: "center"}}>MENU</h1>

			<ul className='menuList'>
				<li className='menuItem'>
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