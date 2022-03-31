import { NavLink } from 'react-router-dom';

import hamburger from '../assets/graphics/navicon.svg';
import close from '../assets/graphics/close.svg';

function Navbar() {

	function openNav() {
		document.querySelector('nav').classList.toggle('openNav');
		document.querySelector('.close').classList.toggle('hidden');
		document.querySelector('.hamburger').classList.toggle('hidden');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
		document.querySelector('.App').classList.toggle('noOverflowScroll');
	}

	return (
		<div style={{position: "relative"}}>
			<nav className='backgroundBlack'>
				<NavLink onClick={openNav} to="/menu">Meny</NavLink>
				<NavLink onClick={openNav} to="/about">Om oss</NavLink>
				<NavLink onClick={openNav} to="/status">Orderstatus</NavLink>
			</nav>
			<button className='navBtn hamburger' onClick={openNav}><img src={hamburger} alt="hamburger"></img></button>
			<button className='navBtn close hidden' onClick={openNav}><img src={close} alt="close" style={{height: "25px"}}></img></button>
		</div>
	)
}

export default Navbar;