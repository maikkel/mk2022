import "./Content.scss";
import { Route, Switch } from "react-router-dom";
import itemTypes from "../data/itemTypes";

export default function Content({ menuData }) {
  const routes = menuData.map((item) => {
    if (item.type === itemTypes.COMPONENT) {
      return (
        <Route exact path={item.url} key={item.key}>
          {item.key} - {item.name}
        </Route>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="content">
      <Switch>{routes}</Switch>
    </div>
  );
}
