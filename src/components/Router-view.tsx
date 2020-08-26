import {Route, Switch} from "react-router-dom";
import React from "react";
import Charts from "../view/Charts/Charts";
import Users from "../view/Users/Users";
import NotMatch from "./NotMatch";
import Detail from "../view/Detail/Detail";

const RouterView = ()=> {
  return (
      <Switch>
        <Route path="/">
          <Charts/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
  );
}

export default RouterView

