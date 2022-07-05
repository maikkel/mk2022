import { Link } from "react-router-dom";
import itemTypes from "../data/itemTypes";

export default function MenuItem({ itemData, index, total, setHoverIndex, social = false }) {
  const totalAngle = social ? 65 : 190;
  const rotation = social ? index * (totalAngle / (total - 1)) - totalAngle / 2 -180 : index * (totalAngle / (total - 1)) - totalAngle / 2;
  const linkStyle = {
    transform: "rotate(" + rotation * -1 + "deg)",
    backgroundImage: `url(/icons/${itemData.key}-off.png)`,
  };

  let link;

  switch (itemData.type) {
    case itemTypes.COMPONENT:
      link = (
        <div
          className="link"
          style={linkStyle}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img
            className="on"
            src={`/icons/${itemData.key}-on.png`}
            alt={itemData.name}
          />
          <Link to={itemData.url} style={linkStyle} />
        </div>
      );
      break;
    case itemTypes.EXTERNAL:
    default:
      link = (
        <div
          className="link"
          style={linkStyle}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img
            className="on"
            src={`/icons/${itemData.key}-on.png`}
            alt={itemData.name}
          />
          <Link to={{ pathname: itemData.url }} target="_blank" />
        </div>
      );
      break;
  }

  return (
    <div
      className={`menu-item ${social ? 'social' : ''}`}
      style={{ transform: "translate(-50%,-50%) rotate(" + rotation + "deg)" }}
    >
      {link}
    </div>
  );
}
