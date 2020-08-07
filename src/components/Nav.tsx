import styled from "styled-components";
import {HashRouter as Router, NavLink, Route, Switch, Redirect} from "react-router-dom";
import React, {useContext} from "react";
import Icon from "./Icon";

import Purse from "../view/Purse/Purse";
import Detail from "../view/Detail/Detail";
import Users from "../view/Users/Users";
import NotMatch from "./NotMatch";
import {Context} from "../Reducer/pageStore";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  background-color: #f6f6f6;
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.333%;
      > a{
        color: #696969;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 0;
        &.selected {      
          color: #FFDA44;
          svg {
            fill: #FFDA44;
          }
        }
        > svg{
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-bottom: 5px;
          fill: #9F9F9F;
        }
      }
    }  
  }
`

const Main = styled.div`
  flex: 1;
`

function Navigator () {
  const navs = [{
    id: 'purse',
    path: '/purse',
    name: '钱包'
  }, {
    id: 'detail',
    path: '/detail',
    name: '明细'
  }, {
    id: 'mine',
    path: '/users',
    name: '我的'
  }]

  return (
      <Wrapper>
        <Router>
          <Main>
            <Switch>
              <Route path="/purse" component={Purse} />
              <Route path="/detail" component={Detail} />
              <Route path="/users" component={Users} />
              <Redirect exact from="/" to="/detail" />
              <Route path="*">
                <NotMatch/>
              </Route>
            </Switch>
          </Main>
          <Nav>
            <ul>
              { navs.map(item =>
                <li key={item.id}>
                  <NavLink exact={true} to={item.path} activeClassName="selected">
                    <Icon id={item.id} />
                    {item.name}
                  </NavLink>
                </li>
              )}
            </ul>
          </Nav>
        </Router>
      </Wrapper>
  )
}

export default Navigator