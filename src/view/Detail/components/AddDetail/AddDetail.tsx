import styled from "styled-components";
import React, {useContext, useEffect, useState} from "react";
import Header from "./AddDetailComponent/Header";
import IconPanel from "./AddDetailComponent/IconPanel";
import {IconPanelContext} from "Reducer/iconPanelStore";
import NumberPad from "./AddDetailComponent/NumberPad";
import {useParams} from "react-router-dom";
import {Item, useDetailItems} from "hooks/useDetailItems";

const Wrapper = styled.div`
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

const AddDetail = ()=> {
  const {dispatch} = useContext(IconPanelContext)
  const {id} = useParams()
  const {findItem} = useDetailItems()
  const [item, setItem] = useState<Item | undefined>(undefined)

  if(!item) {
    findItem(id).then((res) => {
      setItem(res)
    })
  }

  useEffect(() => {
    if(item) {
      const current = item.type === 'spend' ? 'left' : 'right'
      dispatch({type: "setCurrent", payload: {current}})
      dispatch({type: "setSelectedIcon", payload: {selectedIcon: {id: item.iconId, name: item.iconName}}})
    }
  }, [item])

  return (
      <Wrapper>
        <Header/>
        <IconPanel/>
        <NumberPad item={item}/>
      </Wrapper>
  )
}

export default AddDetail