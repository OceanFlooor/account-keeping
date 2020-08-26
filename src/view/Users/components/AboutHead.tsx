import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #ffda44, 82%, #ffffff);
  height: 150px;
  > .title{
    text-align: center;
    padding: 30px 0;
    font-size: 30px;
  }
`

function AboutHead() {
  return (
      <Wrapper>
        <div className='title'>关于种种</div>
      </Wrapper>
  )
}

export default AboutHead