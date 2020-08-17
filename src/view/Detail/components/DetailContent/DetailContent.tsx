import styled from "styled-components";
import React from "react";
import DetailItem from "./DetailContentComponent/DetailItem";
import {useDetailItems} from "../../../../hooks/useDetailItems";
import DetailHead from "./DetailContentComponent/DetailHead";

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

  return (
      <Wrapper>
        <DetailHead/>
        <div className="item-wrapper">
          {items.map(item => {
            return <DetailItem item={item} key={item.id}/>
          })}
        </div>
      </Wrapper>
  )
}

export default DetailContent
