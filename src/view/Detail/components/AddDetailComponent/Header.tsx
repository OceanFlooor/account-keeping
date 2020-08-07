import styled from "styled-components";
import React, {useContext, useState} from "react";
import {Context} from "../../../../Reducer/pageStore";

const HeaderStyl = styled.section`
  display: flex;
  justify-content: center;
  background-color: #ffda44;
  position: relative;
  div {
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    &.selected {
      border-bottom: 2px solid #333333;
    }
  }
  .cancel {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Header = (props: any) => {
  const [active, setActive] = useState('支出')
  const {dispatch} = useContext(Context)

  const headerOnclick = (e: React.MouseEvent) => {
    const val = (e.target as HTMLDivElement).textContent

    if(val === '支出') {
      setActive('支出')
    } else if(val === '收入') {
      setActive('收入')
    } else {
      dispatch({type: 'setIconShow', payload: false})
    }
  }

  return (
      <HeaderStyl onClick={headerOnclick}>
        <div className={active === '支出' ? 'selected' : ''}>支出</div>
        <div className={active === '收入' ? 'selected' : ''}>收入</div>
        <span className='cancel'>取消</span>
      </HeaderStyl>
  )
}

export default Header