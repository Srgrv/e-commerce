import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { chooseCategories } from "../store/slices/HomeSlice";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = [
    { key: "all", name: "Всё" },
    { key: "chairs", name: "Стулья" },
    { key: "tables", name: "Столы" },
    { key: "sofa", name: "Диваны" },
    { key: "light", name: "Свет" },
  ];

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => dispatch(chooseCategories(el.key))}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
