import styled from "styled-components";
import React, {useContext} from "react";

import Header from "./AddDetailComponent/Header";
import IconPanel from "./AddDetailComponent/IconPanel";
import {IconPanelStore} from "Reducer/iconPanelStore";
import NumberPad from "./AddDetailComponent/NumberPad";
import {Context} from "Reducer/pageStore";

const Wrapper = styled.div`
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  &.hide {
    transform: translateY(100%);
  }
`

function AddDetail() {
  const {state} = useContext(Context)

  return (
      <Wrapper className={state.iconShow ? '' : 'hide'}>
        <IconPanelStore>
          <Header/>
          <IconPanel/>
          <NumberPad/>
        </IconPanelStore>
      </Wrapper>
  )
}

export default AddDetail