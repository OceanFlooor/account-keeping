import React from "react";
import AddDetail from "./components/AddDetail";
import styled from "styled-components";
import Add from "../../components/Add";

const Wrapper = styled.div`
  height: 100%;
`

function Detail() {

  return (
      <Wrapper>
        detail
        <Add/>
        <AddDetail/>
      </Wrapper>
  )
}

export default Detail