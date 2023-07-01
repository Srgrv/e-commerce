import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

//reducers
import { chooseCategories } from "../store/slices/HomeSlice";

//components
import Item from "./Item";

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.home.items);
  const currentItems = useSelector((state) => state.home.currentItems);

  useEffect(() => {
    dispatch(chooseCategories());
    //eslint-disable-next-line
  }, [items]);

  return (
    <main>
      {currentItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </main>
  );
};

export default Items;
