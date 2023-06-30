import React from "react";
import { useSelector } from "react-redux";

//components
import Item from "./Item";

const Items = () => {
  const items = useSelector((state) => state.home.items);

  return (
    <main>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </main>
  );
};

export default Items;
