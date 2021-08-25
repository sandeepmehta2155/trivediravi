import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

export { RouteComponents } from "./Route-Components/route-components";
export { Header } from "./Home/header";
export { SliderImg } from "./Home/sliderimg";
export { ProductImg } from "./Home/products";
export { Footer } from "./Home/footer";
export { About } from "./Home/about";
export { Gurantee } from "./Home/gurantees";
export { FlowerSvg } from "./Home/flowersvg";
export { Home } from "./Home/home";
export { Hero } from "./Home/hero";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </Router>,
  rootElement
);
