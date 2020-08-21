import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";
import {Item} from "hooks/useDetailItems";

const baseGreyTheme = '#D9D9D9'

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${props => props.theme};
  > span {
    border-left: 1px solid ${props => props.theme};
  }
  > div {
    flex: 1;
    text-align: center;
  }
`

type Props = {
  item: Item
}

const Operator: React.FC<Props> = (props) => {
  const history = useHistory()
  const handleEdit = () => {
    history.push(`/edit/${props.item.id}`)
  }

  return (
      <Wrapper theme={baseGreyTheme}>
        <div onClick={handleEdit}>编辑</div>
        <span/>
        <div>删除</div>
      </Wrapper>
  )
}

export default Operator
