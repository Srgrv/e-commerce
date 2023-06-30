import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { addToOrder } from "../store/slices/HomeSlice";

const Item = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <img src={"./img/" + props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <b>{props.price}$</b>
      <div
        className="add-to-cart"
        onClick={() => dispatch(addToOrder({ props }))}
      >
        +
      </div>
    </div>
  );
};

export default Item;
