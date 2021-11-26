import "../scss/Menu.scss";
import MenuItem from "./MenuItem.js";
import logo from "../images/logo.svg";
import { useState } from "react";

export default function Menu({ menuData }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const menuItems = menuData.map((item, i) => {
    return (
      <MenuItem
        itemData={item}
        key={item.key}
        index={i}
        total={menuData.length}
        setHoverIndex={setHoverIndex}
      />
    );
  });

  return (
    <div className="menu-container">
      <div className="menu">
        {menuItems}
        <div className="main">
          <img className="logo" src={logo} alt="Logo" />
          <div className={`description ${hoverIndex != null && "active"}`}>
            <span>
              {hoverIndex != null && menuData[hoverIndex].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
