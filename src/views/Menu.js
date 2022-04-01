
import MenuItem from '../components/MenuItem';
import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';
import Cart from '../components/Cart';

import { useSelector } from "react-redux";

function Menu() {
    
	
	//useSelector hämtar menyn från store/state och separerar ut den infon vi vill ha.
	const menu = useSelector(state => state.menu);
	
    //hämtar info från state 
    //rad 21 (ul): loopar igenom varje objekt/item i menyn. 
	return (
		<div className="menuInfo backgroundBeige ">
             <Cart />
			<img src={header} alt="header" className="header"></img>
			<h1 style={{textAlign: "center"}}>Meny</h1>

            <ul className='menuList'>
                { menu.map((item, index) => ( 
                    <MenuItem item={ item } key={ index } />
                )) }
				
			</ul>
			<img src={footer} alt="footer" className="footer"></img>
		</div>
	)
}

export default Menu;