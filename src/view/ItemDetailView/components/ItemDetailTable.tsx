import styled from "styled-components";
import React from "react";
import {Item} from "hooks/useDetailItems";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .row{
    display: flex;
    padding: 15px 0;
    margin: 0 15px;
    border-bottom: 1px solid #f1f1f1;
    color: #969696;
    > .value {
      flex: 1;
      margin-left: 10px;
      color: #333333;
    }
  }
`

const hashMap: { [key: string]: string } = {
  type: '类型',
  output: '金额',
  remark: '备注'
}

type Props = {
  item: Item & { [key: string]: string }
}

const ItemDetailTable: React.FC<Props> = (props) => {
  const item = props.item

  return (
      <Wrapper>
        {Object.keys(hashMap).map(key => {
          return (
              <div className='row' key={key}>
                <span>{hashMap[key]}</span>
                <span className='value'>{
                  key !== 'type' ? item[key]
                      : item[key] === 'spend' ? '支出'
                      : '收入'
                }</span>
              </div>
          )
        })}
      </Wrapper>
  )
}

export default ItemDetailTable