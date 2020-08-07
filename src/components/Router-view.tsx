import {Route, Switch} from "react-router-dom";
import React from "react";
import Purse from "../view/Purse/Purse";
import Users from "../view/Users/Users";
import NotMatch from "./NotMatch";
import Detail from "../view/Detail/Detail";

const RouterView = ()=> {
  return (
      <Switch>
        <Route path="/">
          <Purse/>
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

