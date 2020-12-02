import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./Containers/ProductList";
import Demo from "./demo/Demo";
import ErrorPage from './Components/ErrorPage'
function AppRouter(props) {
  return (
    <div>
        <Switch>
        <Route path={"/"} component={Demo} exact={true}/>
        <Route path={"/products"} component={ProductList} />
        <Route component={ErrorPage} />
        </Switch>
    </div>
  );
}
export default AppRouter;