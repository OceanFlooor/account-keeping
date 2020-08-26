import styled from "styled-components";
import {HashRouter as Router, NavLink, Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

import Charts from "../view/Charts/Charts";
import Detail from "../view/Detail/Detail";
import Users from "../view/Users/Users";
import NotMatch from "./NotMatch";
import AddDetail from "../view/Detail/components/AddDetail/AddDetail";
import ItemDetailView from "../view/ItemDetailView/ItemDetailView";
import {IconPanelStore} from "../Reducer/iconPanelStore";

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
  overflow: hidden;
`

const navs = [{
  id: 'purse',
  path: '/charts',
  name: '图表'
}, {
  id: 'detail',
  path: '/detail',
  name: '明细'
}, {
  id: 'mine',
  path: '/users',
  name: '关于'
}]

const AddDetailWithContext = () => {
  return (
      <IconPanelStore>
        <AddDetail/>
      </IconPanelStore>
  )
}

function Navigator () {

  return (
      <Wrapper>
        <Router>
          <Main>
            <Switch>
              <Route path="/charts" component={Charts} />
              <Route path="/detail" component={Detail} />
              <Route path="/users" component={Users} />
              <Route path={["/edit/:id", "/edit"]} component={AddDetailWithContext} />
              <Route path="/itemDetailView/:id" component={ItemDetailView} />
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