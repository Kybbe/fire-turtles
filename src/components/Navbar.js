import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='backgroundBlack'>
			<NavLink to="/menu">Meny</NavLink>
			<NavLink to="/about">Om oss</NavLink>
			<NavLink to="/status">Orderstatus</NavLink>
		</nav>
	)
}

export default Navbar;