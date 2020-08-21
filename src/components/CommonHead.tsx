import styled from "styled-components";
import React from "react";
import Icon from "./Icon";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFDA44;
  > div{
    width: 50px;
    text-align: center;
  }
  .slot{
    flex: 1;
  }
  .back{
    align-self: flex-start;
    margin-top: 10px;
    svg {
      width: 20px;
      height: 30px;
    }
  }
`

const CommonHead = (props: any) => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
      <Wrapper>
        <div className="back">
          <div onClick={goBack}>
            <Icon id={`back`}/>
          </div>
        </div>
        <div className="slot">
          {props.children}
        </div>
        {/*holder -- right part*/}
        <div className="right" />
      </Wrapper>
  )
}

export default CommonHead