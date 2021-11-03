import "./Menu.scss";
import MenuItem from "./MenuItem.js";

export default function Menu({ menuData }) {
  const menuItems = menuData.map((item, i) => {
    return <MenuItem itemData={item} key={item.key} index={i}/>;
  });

  return (
    <div className="menu">
      {menuItems}
      <div className="description">[DESCRIPTION]</div>
    </div>
  );
}
