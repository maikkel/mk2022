import "./Menu.scss";
import MenuItem from "./MenuItem.js";

export default function Menu({ menuData }) {
  const menuItems = menuData.map((item) => {
    return <MenuItem itemData={item} />;
  });

  return (
    <div className="menu">
      <ul>{menuItems}</ul>
    </div>
  );
}
