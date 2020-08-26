import React from "react";
import styled from "styled-components";
import AboutHead from "./components/AboutHead";
import AboutPad from "./components/AboutPad";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  .pad-wrapper{
    transform: translateY(-75px);
  }
`

function Users() {
  return (
      <Wrapper className={'users'}>
        <AboutHead/>
        <div className="pad-wrapper">
          <AboutPad/>
        </div>
      </Wrapper>
  )
}

export default Users