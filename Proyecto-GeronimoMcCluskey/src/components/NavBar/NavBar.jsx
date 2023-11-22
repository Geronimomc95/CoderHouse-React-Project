import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../../../public/img/shopicon.png"; 

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" /> 
      </Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/category/ropa" className="nav-link">
          Ropa
        </Link>
        <Link to="/category/electrónica" className="nav-link">
          Electrónica 
        </Link>
        <Link to="/category/hogar" className="nav-link">
          Hogar 
        </Link>
      </div>
      <Link to="/cart" className="nav-link">
        <CartWidget />
      </Link>
    </nav>
  );
};
