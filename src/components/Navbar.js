import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<NavLink to="/menu">Meny</NavLink>
			<NavLink to="/about">Om oss</NavLink>
			<NavLink to="/status">Orderstatus</NavLink>
			<NavLink to="/">Test</NavLink>
		</nav>
	)
}

export default Navbar;