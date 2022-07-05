import "../scss/Menu.scss";
import MenuItem from "./MenuItem.js";
import logo from "../images/logo.svg";
import { useState } from "react";

export default function Menu({ menuData, menuDataSocial }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndexSocial, setHoverIndexSocial] = useState(null);
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
  const menuItemsSocial = menuDataSocial.map((item, i) => {
    return (
      <MenuItem
        itemData={item}
        key={item.key}
        index={i}
        total={menuDataSocial.length}
        setHoverIndex={setHoverIndexSocial}
        social={true}
      />
    );
  });

  return (
    <div className="menu-container">
      <div className="menu">
        {menuItems}
        {menuItemsSocial}
        <div className="main">
          <img className="logo" src={logo} alt="Logo" />
          <div className={`description ${(hoverIndex != null || hoverIndexSocial != null) && "active"}`}>
            <span>
              {hoverIndex != null && menuData[hoverIndex].description}
              {hoverIndexSocial != null && menuDataSocial[hoverIndexSocial].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
