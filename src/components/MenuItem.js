import "./MenuItem.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ itemData, index, total }) {
  const totalAngle = 180;
  const rotation = index * (totalAngle / (total - 1)) - totalAngle / 2;
  return (
    <div
      className="menu-item"
      style={{ transform: "translate(-50%,-50%) rotate(" + rotation + "deg)" }}
    >
      <Link
        className="link"
        to={itemData.route}
        style={{ transform: "rotate(" + rotation * -1 + "deg)" }}
      >
        {itemData.name}
      </Link>
    </div>
  );
}
