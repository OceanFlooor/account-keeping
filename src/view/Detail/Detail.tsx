import React, {useContext} from "react";
import AddDetail from "./components/AddDetail/AddDetail";
import styled from "styled-components";
import Add from "../../components/Add";
import DetailContent from "./components/DetailContent/DetailContent";
import {Context} from "../../Reducer/pageStore";
import generateUID from "../../lib/generateUID";

const Wrapper = styled.div`
  height: 100%;
`

function Detail() {
  const {state} = useContext(Context)
  return (
      <Wrapper>
        <DetailContent key={generateUID()}/>
        <Add/>
        <AddDetail/>
      </Wrapper>
  )
}

export default Detail