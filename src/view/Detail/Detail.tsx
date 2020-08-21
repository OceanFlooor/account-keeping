import React from "react";
import styled from "styled-components";
import Add from "../../components/Add";
import DetailContent from "./components/DetailContent/DetailContent";

const Wrapper = styled.div`
  height: 100%;
`

function Detail() {
  return (
      <Wrapper>
        <DetailContent/>
        <Add/>
      </Wrapper>
  )
}

export default Detail