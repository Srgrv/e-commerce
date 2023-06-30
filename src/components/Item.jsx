import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <img src={"./img/" + props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <b>{props.price}$</b>
      <div className="add-to-cart">+</div>
    </div>
  );
};

export default Item;
