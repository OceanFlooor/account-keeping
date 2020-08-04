import React from 'react'
import styled from "styled-components"
import Navigator from "./components/Nav";

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
          <Navigator></Navigator>
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
