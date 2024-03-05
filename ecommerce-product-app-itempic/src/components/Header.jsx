import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Profile from "../assets/images/image-avatar.png";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../context/CartContext";
import CartContainer from "./CartContainer";

const Header = () => {
  const [initvisible, setInitVisible] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);
  const [cart, setCart] = useState(false);
  const { unit } = useContext(CartContext);

  useEffect(() => {
    if (!navVisibility) {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }, [navVisibility]);

  const setMenu = () => {
    setNavVisibility(!navVisibility);
    setInitVisible(true);
  };

  const showCart = (e) => {
    setCart(!cart);
  };

  return (
    <>
      <div
        style={initvisible ? { display: "block" } : { display: "none" }}
        className={`overlay-${navVisibility ? "in" : "out"}`}
        onClick={setMenu}
      ></div>

      {/* prettier-ignore */}
      <nav 
       style={initvisible ? { display: "block" } : { display: "none" }}
       className={`nav-mobile ${navVisibility ? "nav-menu-open" : "nav-menu-close"}`}>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="wrapper">
        <div className="header">
          <input type="checkbox" checked={navVisibility ? true : false} className="mobile-toggle" onChange={setMenu} />

          <div className="logo">
            <a href="/" aria-label="sneakers">
              <img src={Logo} alt="sneakers logo" width={138} height={20} />
            </a>
          </div>

          <div className="nav">
            {/* prettier-ignore */}
            <nav className="nav-desktop">
              <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
          </div>

          <div className="nav-action">
            <div className="nav-cart">
              <div
                onClick={showCart}
                style={unit == 0 ? { display: "none" } : { display: "block" }}
                className="cart-order"
              >
                {unit}
              </div>

              <img onClick={showCart} className="cart-icon" src={Cart} alt="card" />
            </div>
            <div className="nav-profile">
              <img src={Profile} alt="profile" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div onClick={showCart} className={cart ? "cart-overlay" : "cart-overlay-none"}></div>
      <CartContainer cart={cart} />
    </>
  );
};

export default Header;
