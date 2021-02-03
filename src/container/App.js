import React from "react";
import "antd/dist/antd.css";
import "../sass/main.scss";
import 'react-responsive-carousel/lib/styles/carousel.css';
import {Row} from "antd";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductDetails from "../components/ProductDetails/ProductDetails";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <HeroSlider />
      <div className="container">
        <Row gutter={16}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </div> */}
      <ProductDetails />
    </div>
  );
}

export default App;
