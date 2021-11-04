import "./Menu.scss";
import MenuItem from "./MenuItem.js";
import logo from "../images/logo.svg";

export default function Menu({ menuData }) {
  const menuItems = menuData.map((item, i) => {
    return (
      <MenuItem
        itemData={item}
        key={item.key}
        index={i}
        total={menuData.length}
      />
    );
  });

  return (
    <div className="menu-container">
      <div className="menu">
        {menuItems}
        <div className="main">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
