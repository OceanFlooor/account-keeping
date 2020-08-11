import React, {useState} from "react";
import styled from "styled-components";
import Icon from "../../../../components/Icon";
import calcInputNumber, {getDecimal, includesOperator, separate} from "./handler/calcInputNumber";

const NumberPadStyl = styled.section`
  background-color: #F2F3F5;
  font-size: 14px;
  .wrapper{
    border-left: 1px solid #CFCFD1;
    border-top: 1px solid #CFCFD1;
    .head{
      border-bottom: 1px solid #CFCFD1;
      border-right: 1px solid #CFCFD1;
      padding: 10px;
      display: flex;
      align-items: center;
      color: #343233;
      > span {
        flex-shrink: 0;
      }
      > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: #535353;
      }
      > input {
        flex: 1;
        background-color: transparent;
      }
      .num{
        margin: 0 10px;
        font-size: 18px;
      }
    }
    .button-pad{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      > button {
        width: 25%;
        padding: 13px;
        border: none;
        border-right: 1px solid #CFCFD1;
        border-bottom: 1px solid #CFCFD1;
        background-color: transparent;
        font-size: 16px;
        &:active{
          background-color: #e5e6e8;
        }
        &.bold{
          font-weight: bold;
        }
        &.finish{
          background-color: #FFDA44;
        }
        &.finish:active{
          background-color: #edcb42;
        }
      }
    }
  }
`

const NumberPad = ()=> {
  const [input, setInput] = useState('')
  const [number, setNumber] = useState('0.00')

  const inputChange = (e: React.ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value
    if(val.length <= 20) {
      setInput(val)
    }
  }

  const numberPadHandle = (e: React.MouseEvent) => {
    const val = (e.target as HTMLButtonElement).textContent || ''

    if('0123456789.+-'.split('').concat('删除','清空').includes(val)){
      let separatePart
      if(includesOperator(number).res) {
        separatePart = separate(number)
      } else {
        separatePart = {left: number, right: '0.00001'}
      }

      if(getDecimal(separatePart.left).length <= 2 || getDecimal(separatePart.right).length <= 2 || ['+','-','删除','清空'].includes(val)) {
        setNumber(calcInputNumber(number, val))
      } else {
        return
      }
    }
  }

  return (
      <NumberPadStyl>
        <div className="wrapper">
          <div className="head">
            <Icon id={`remarks`}/>
            <span>备注：</span>
            <input placeholder={`写点备注...`} onChange={inputChange} value={input}/>
            <span className="num">{number}</span>
          </div>
          <div className={`button-pad`} onClick={numberPadHandle}>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>清空</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className='bold add'>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className='bold sub'>-</button>
            <button className='bold'>.</button>
            <button>0</button>
            <button>删除</button>
            <button className={`finish`}>完成</button>
          </div>
        </div>
      </NumberPadStyl>
  )
}

export default NumberPad