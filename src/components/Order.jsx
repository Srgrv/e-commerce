import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

//reducers
import { deleteFromOrder } from "../store/slices/HomeSlice";

const Order = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <img src={"./img/" + props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.price}$</p>
      <FaTrash
        className="delete-icon"
        onClick={() => dispatch(deleteFromOrder({ props }))}
      />
    </div>
  );
};

export default Order;
