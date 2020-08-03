import React from 'react'
import styled from "styled-components"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const  Main = styled.div`
  flex: 1;
`
const Nav = styled.div`
  background-color: #E8E8E8;
  > ul {
    display: flex;
    padding: 5px 0;
    > li {
      text-align: center;
      width: 33.333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > i {
        display: inline-block;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: aqua;
        margin-bottom: 5px;
      }
    }  
  }

`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
            <Switch>
              <Route path="/about">
                <Purse/>
              </Route>
              <Route path="/detail">
                <Detail/>
              </Route>
              <Route path="/users">
                <Users/>
              </Route>
              <Route path="*">
                <NoMatch/>
              </Route>
            </Switch>
          </Main>
          <Nav>
            <ul>
              <li>
                <i></i>
                <Link to="/purse">钱包</Link>
              </li>
              <li>
                <Link to="/detail">明细</Link>
              </li>
              <li>
                <Link to="/users">我的</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Router>
  );
}

function Users() {
  return <h2>Home</h2>
}

function Purse() {
  return <h2>About</h2>
}

function Detail() {
  return <h2>Users</h2>
}

function NoMatch() {
  let location = useLocation()

  return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
  )
}

export default App
