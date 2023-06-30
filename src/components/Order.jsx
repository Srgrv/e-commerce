import React from "react";

const Order = (props) => {
  return (
    <div className="item">
      <img src={"./img/" + props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.price}$</p>
    </div>
  );
};

export default Order;
