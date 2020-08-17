import styled from "styled-components";
import React, {useContext} from "react";
import {Context} from "../../../../../Reducer/pageStore";
import {IconPanelContext} from "../../../../../Reducer/iconPanelStore";

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

const Header = () => {
  const iconPanelStore = useContext(IconPanelContext)
  const current = iconPanelStore.state.current
  const pageStore = useContext(Context)

  const headerOnclick = (e: React.MouseEvent) => {
    const val = (e.target as HTMLDivElement).textContent

    if(val === '支出') {
      iconPanelStore.dispatch({type: 'setCurrent', payload: {current: 'left'}})
    } else if(val === '收入') {
      iconPanelStore.dispatch({type: 'setCurrent', payload: {current: 'right'}})
    } else {
      pageStore.dispatch({type: 'setIconShow', payload: false})
    }
  }

  return (
      <HeaderStyl onClick={headerOnclick}>
        <div className={current === 'left' ? 'selected' : ''}>支出</div>
        <div className={current === 'right' ? 'selected' : ''}>收入</div>
        <span className='cancel'>取消</span>
      </HeaderStyl>
  )
}

export default Header