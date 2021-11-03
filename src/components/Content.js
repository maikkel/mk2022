import "./Content.scss";
import { Route, Switch } from "react-router-dom";

export default function Content({ menuData }) {
  const routes = menuData.map((item) => {
    return (
      <Route exact path={item.route}>
        {item.name}
      </Route>
    );
  });

  return (
    <div className="content">
      <Switch>{routes}</Switch>
    </div>
  );
}
