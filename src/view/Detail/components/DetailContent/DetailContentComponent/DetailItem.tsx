import styled from "styled-components";
import React from "react";
import Icon from "../../../../../components/Icon";
import {Item} from "hooks/useDetailItems";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #343233;
  border-bottom: 1px solid #f7f7f7;
  padding: 5px;
  .icon {
    background-color: #FFDA44;
    border-radius: 50%;
    padding: 8px;
    margin-right: 10px;
    .icon-wrapper{
      box-sizing: content-box;
      width: 20px;
      height: 20px;
      > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .icon-name{
    flex: 1;
  }
  
`
type Props = {
  item: Item,
  onClick: (id: string) => void
}
const DetailItem: React.FunctionComponent<Props> = (props) => {
  const {item, onClick} = props

  return (
      <Wrapper onClick={() => onClick(item.id)}>
        <div className="icon">
          <div className="icon-wrapper">
            <Icon id={item.iconId}/>
          </div>
        </div>
        <div className="icon-name">{item.iconName}</div>
        <div className="output">{`${item.type === 'spend' ? '-' : '+'}${Math.abs(Number(item.output))}`}</div>
      </Wrapper>
  )
}

export default DetailItem