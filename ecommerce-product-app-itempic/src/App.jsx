import { useEffect, useState } from "react";
import "./assets/styles/app.css";
import Header from "./components/Header";
import ProductDesc from "./components/ProductDesc";
import ProductImg from "./components/ProductImg";
import CartContext from "./context/CartContext";

function App() {
  const [cart, setCart] = useState(+window.localStorage.getItem("cart") ?? 0);

  // store cart info in browser
  useEffect(() => {
    window.localStorage.setItem("cart", cart);
  }, [cart]);

  const cartContains = {
    img: "",
    name: "",
    price: 125.0,
    unit: cart,
    setCart: setCart,
  };

  return (
    <>
      <CartContext.Provider value={cartContains}>
        {/* when image will be clicked */}
        <div data-desktopoverlay={false} id="img-overlay"></div>

        <header>
          <Header />
        </header>
        <main>
          <div className="wrapper-d product">
            <div className="product-img">
              <ProductImg />
            </div>
            <div className="product-desc">
              <ProductDesc />
            </div>
          </div>
        </main>
      </CartContext.Provider>
    </>
  );
}

export default App;
