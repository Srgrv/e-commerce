import React from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
