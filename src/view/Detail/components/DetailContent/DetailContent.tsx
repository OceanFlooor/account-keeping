import styled from "styled-components";
import React from "react";
import DetailItem from "./DetailContentComponent/DetailItem";
import {useDetailItems} from "hooks/useDetailItems";
import DetailHead from "./DetailContentComponent/DetailHead";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .item-wrapper{
    padding: 10px;
    flex: 1;
    overflow-y: auto;
  }
`

const DetailContent = () => {
  const {items} = useDetailItems()
  const history = useHistory()
  const handleClick = (id: string) => {
    history.push(`/itemDetailView/${id}`)
  }

  return (
      <Wrapper>
        <DetailHead/>
        <div className="item-wrapper">
          {items.map(item => {
            return <DetailItem item={item} key={item.id} onClick={handleClick} />
          })}
        </div>
      </Wrapper>
  )
}

export default DetailContent
