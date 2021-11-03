import "./MenuItem.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ itemData }) {
  return (
    <li className="menu-item">
      <Link to={itemData.route}>{itemData.name}</Link>
    </li>
  );
}
