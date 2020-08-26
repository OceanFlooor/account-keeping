import styled from "styled-components";
import React from "react";
import {Data} from "../Charts";

const Wrapper = styled.div`
  .rank-container{
    display: flex;
    flex-direction: column;
  }
`

const Row = styled.div.attrs(props=> ({}))`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 25px;
  .color{
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
  }
  .title{
    margin-left: 20px;
  }
  .percentage{
    flex: 3;
  }
  .num{
    flex: 1;
    text-align: right;
  }
`

type PropData = {
  data: Data,
  sum: number
}

type Props = {
  type: boolean,
  propData: PropData
}

const Rank: React.FC<Props> = ({type, propData}) => {

  return (
      <Wrapper>
        <div className="rank-container">
          {propData.data.map(item => {
            return (
                <Row color={item.color} key={item.color}>
                  <span className='color'/>
                  <span className='title'>{item.title}</span>
                  <span className='percentage'>{item.percentage}</span>
                  <span className='num'>{item.num.toFixed(2)}</span>
                </Row>
            )
          })}
        </div>
      </Wrapper>
  )
}

export default Rank