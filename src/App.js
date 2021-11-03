import "./App.reset.scss";
import "./App.utils.scss";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Content from "./components/Content";
import menuData from "./data/menuData";

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
