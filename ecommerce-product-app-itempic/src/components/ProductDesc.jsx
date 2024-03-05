import { useContext, useState } from "react";
import "../assets/styles/productdesc.css";
import CartContext from "../context/CartContext";

const ProductDesc = () => {
  const [count, setCount] = useState(0);
  const { setCart } = useContext(CartContext);

  const decrement = () => {
    setCount((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const addCart = () => {
    setCart((prev) => {
      return prev + count;
    });
  };

  return (
    <>
      <div className="card">
        <p className="card-subtitle">Sneaker company</p>
        <h1 className="card-title">Fall Limited Edition Sneakers</h1>
        <p className="card-desc">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they’ll withstand everything the weather can offer.
        </p>

        <div className="card-price">
          <p className="current-price">
            $125.00 <span className="discount">50%</span>
          </p>
          <p className="original-price">$250.00</p>
        </div>

        <div className="card-action">
          {/* prettier-ignore */}
          <div className="amount">
            <button className="decrement" onClick={decrement}> - </button>
            <button className="count">{count}</button>
            <button className="increment" onClick={increment}> + </button>
          </div>
          {/* prettier-ignore */}
          <div className="atc">
            <button className="btn-cart" onClick={addCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDesc;
