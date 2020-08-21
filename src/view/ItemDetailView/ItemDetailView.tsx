import styled from "styled-components";
import React, {useState} from "react";
import CommonHead from "components/CommonHead";
import Icon from "components/Icon";
import {useParams} from "react-router-dom";
import {Item, useDetailItems} from "hooks/useDetailItems";
import ItemDetailTable from "./components/ItemDetailTable";
import Operator from "./components/Operator";

const Wrapper = styled.div`
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: white;
  .icon-wrapper{
    display: flex;
    overflow: hidden;
    margin: 10px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      width: 40px;
      height: 40px;
    }
    .name {
      margin-top: 10px;
    }
  }
`

const ItemDetailView = () => {
  const {id} = useParams()
  const {findItem} = useDetailItems()
  const [item, setItem] = useState<Item | undefined>(undefined)
  findItem(id).then(res => {
    setItem(res)
  })

  const head = (item: Item) => {
    return (
        <>
          <CommonHead>
            <div className="icon-wrapper">
              <Icon id={item.iconId}/>
              <div className="name">{item.iconName}</div>
            </div>
          </CommonHead>
          <ItemDetailTable item={item}/>
          <Operator item={item}/>
        </>
    )
  }
  return (
      <Wrapper>
        {item ? head(item) : ''}
      </Wrapper>
  )
}

export default ItemDetailView
