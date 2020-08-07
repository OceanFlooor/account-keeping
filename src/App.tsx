import React from 'react'
import styled from "styled-components"
import Navigator from "./components/Nav";
import {PageContext} from 'Reducer/pageStore';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Wrapper>
      <PageContext>
        <Navigator/>
      </PageContext>
    </Wrapper>
  );
}

export default App
