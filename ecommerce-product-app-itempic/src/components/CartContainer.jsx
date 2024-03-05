import "../assets/styles/cartcontainer.css";
import Item from "../assets/images/image-product-1-thumbnail.jpg";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartContainer = ({ cart }) => {
  const { price, unit, setCart } = useContext(CartContext);

  const deleteCart = () => {
    window.localStorage.removeItem("cart");
    setCart(0);
  };

  const checkedout = (e) => {
    e.preventDefault();
    alert("Thank you for shopping!!");
    setCart(0);
  };
  return (
    <>
      <div className={cart ? "cart-container" : "cart-container-none"}>
        <p className="cart-con">Cart</p>
        <div className="cart-line"></div>
        <div className={unit == 0 ? "cart-empty" : "cart-empty-none"}>
          <p>Your cart is empty.</p>
        </div>
        <div className={unit == 0 ? "cart-item-none" : "cart-item"}>
          <div className="cart-img">
            <img src={Item} alt="show" />
          </div>
          <div className="cart-desc">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              {price.toFixed(2)} x {unit} = <span>{(price * unit).toFixed(2)}</span>
            </p>
          </div>
          <div onClick={deleteCart} className="cart-delete"></div>
        </div>
        <button onClick={checkedout} className={unit == 0 ? "btn-checkout-none" : "btn-checkout"}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartContainer;
