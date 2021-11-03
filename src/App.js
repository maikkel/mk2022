import "./App.reset.scss";
import "./App.utils.scss";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Content from "./components/Content";

const menuData = [
  {
    name: "Item 1",
    description: `Description for Item 1`,
    image: "none.png",
    route: "/item1"
  },
  {
    name: "Item 2",
    description: `Description for Item 2`,
    image: "none.png",
    route: "/item2"
  },
  {
    name: "Item 3",
    description: `Description for Item 3`,
    image: "none.png",
    route: "/item3"
  },
  {
    name: "Item 4",
    description: `Description for Item 4`,
    image: "none.png",
    route: "/item4"
  },
  {
    name: "Item 5",
    description: `Description for Item 5`,
    image: "none.png",
    route: "/item5"
  }
];

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="container center">
          <Menu menuData={menuData} />
          <Content menuData={menuData} />
        </div>
      </div>
    </Router>
  );
}
