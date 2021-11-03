import "./MenuItem.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ itemData, index }) {
    const rotation = index * 72;
  return (
      <div className="menu-item" style={{transform: "translate(-50%,-50%) rotate("+ rotation +"deg)"}}>
        <Link className="link" to={itemData.route} style={{transform: "rotate(-"+ rotation +"deg)"}}>{itemData.name}</Link>
      </div>
  );
}
