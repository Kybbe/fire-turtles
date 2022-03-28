import { NavLink } from 'react-router-dom';

function Navbar() {
    return (

        <nav>
            <NavLink to="/">Test</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">menu</NavLink>

        </nav>

    )
}

export default Navbar;