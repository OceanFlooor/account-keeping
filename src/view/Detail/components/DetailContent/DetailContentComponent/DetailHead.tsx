import styled from "styled-components";
import React from "react";
import {useDetailItems} from "hooks/useDetailItems";

const Wrapper = styled.div`
  background-color: #FFDA44;
  padding: 20px;
  .head-name{
    font-size: 26px;
    text-align: center;
  }
  .summary{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    > div {
      > .title{
        color: #9C831E;
        margin-bottom: 10px;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
  }
`

const DetailHead = () => {
  const {sum} = useDetailItems()
  const {income, spend} = sum()
  return (
      <Wrapper>
        <div className='head-name'>
          小新记账
        </div>
        <div className="summary">
          <div className="income">
            <span className='title'>收入</span>
            <span>{income.toFixed(2)}</span>
          </div>
          <div className="spend">
            <span className='title'>支出</span>
            <span>{spend.toFixed(2)}</span>
          </div>
        </div>
      </Wrapper>
  )
}

export default DetailHead