import "./MenuItem.scss";
import { Link } from "react-router-dom";
import itemTypes from "../data/itemTypes";

export default function MenuItem({ itemData, index, total }) {
  const totalAngle = 180;
  const rotation = index * (totalAngle / (total - 1)) - totalAngle / 2;
  const linkStyle = { transform: "rotate(" + rotation * -1 + "deg)" };

  let link;

  switch (itemData.type) {
    case itemTypes.COMPONENT:
      link = (
        <Link className="link" to={itemData.url} style={linkStyle}>
          {itemData.type} - {itemData.name}
        </Link>
      );
      break;
    case itemTypes.EXTERNAL:
    default:
      link = (
        <Link
          className="link"
          to={{ pathname: itemData.url }}
          target="_blank"
          style={linkStyle}
        >
          {itemData.type} - {itemData.name}
        </Link>
      );
      break;
  }

  return (
    <div
      className="menu-item"
      style={{ transform: "translate(-50%,-50%) rotate(" + rotation + "deg)" }}
    >
      {link}
    </div>
  );
}
