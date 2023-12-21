import './NavBar.css';
import CartWidget from '../CartWidget/Cartwidget';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/shopicon.png"; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="logo" />
            </Link>

            <div className='navbar-links'>
                <NavLink to={'/category/electronica'} className="nav-link">Electrónica</NavLink>
                <NavLink to={'/category/ropa'} className="nav-link">Ropa</NavLink>
                <NavLink to={'/category/hogar'} className="nav-link">Hogar</NavLink>
                <NavLink to={'/cart'} className="cart-link">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
