import React from 'react'
import styled from "styled-components"
import Navigator from "./components/Nav";
import RouterView from "./components/Router-view";

import {
  HashRouter as Router,
} from "react-router-dom"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
            <RouterView/>
          </Main>
          <Navigator/>
        </Wrapper>
      </Router>
  );
}

export default App
