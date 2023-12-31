import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

//components
import Order from "./Order";

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false);

  const orders = useSelector((state) => state.home.orders);

  const summa = orders.reduce((a, b) => a + Number(b.price), 0).toFixed(2);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>

        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>

        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <div>
                {orders.map((item) => (
                  <Order key={item.id} {...item} />
                ))}
                <p className="summa">Сумма: {summa}$</p>
              </div>
            ) : (
              <div className="empty">
                <h2>Товаров нет</h2>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
};

export default Header;
