import "./scss/App.reset.scss";
import "./scss/App.utils.scss";
import "./scss/App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Content from "./components/Content";

export default function App() {
  const [menuData, setMenuData] = useState(null);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    console.log("ue");
    fetch("https://api.maikkellerhals.com/menu-items")
      .then((res) => res.json())
      .then(
        (result) => {
          setMenuData(result);
          console.info("menuData loaded");
          console.log(result);
        },
        (error) => {
          setLoadingText("LOADING ERROR!");
          console.error("ERROR while loading menuData -", error);
        }
      );
  }, []);

  if (menuData) {
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
  } else {
    return <div className="container center loadingText">{loadingText}</div>;
  }
}
