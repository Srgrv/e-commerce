import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//reducers
import { onShowItem } from "../store/slices/HomeSlice";
import { addToOrder } from "../store/slices/HomeSlice";

const ShowFullItem = () => {
  const dispatch = useDispatch();
  const fullItem = useSelector((state) => state.home.fullItem);

  return (
    <div className="full-item">
      <div>
        <img
          src={"./img/" + fullItem.img}
          alt=""
          onClick={() => dispatch(onShowItem(fullItem))}
        />
        <h2>{fullItem.title}</h2>
        <p>{fullItem.desc}</p>
        <b>{fullItem.price}$</b>
        <div
          className="add-to-cart"
          onClick={() => dispatch(addToOrder(fullItem))}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
