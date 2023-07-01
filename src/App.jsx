import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const showFullItem = useSelector((state) => state.home.showFullItem);

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Items />
      {showFullItem && <ShowFullItem />}
      <Footer />
    </div>
  );
}

export default App;
