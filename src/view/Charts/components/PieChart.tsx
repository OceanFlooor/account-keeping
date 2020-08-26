import EchartsForReact from "components/EchartsForReact";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Data} from "../Charts";

const Wrapper = styled.div`
  position: relative;
  .chart{
    height: 300px;
  }
  .title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      font-size: 20px;
    }
    .sum{
      color: #ffda44;
    }
    .switch{
      color: #c0c0c0;
      font-size: 14px;
      border: 1px solid #c0c0c0;
      margin-top: 5px;
      padding: 0 5px;
      border-radius: 8px;
    }
  }
`

const getOptions = (propData: PropData) => ({
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '50%'],
      hoverAnimation: false,
      labelLine: {
        show: true
      },
      data: propData.data.map(item => (
          {
            name: item.title,
            value: item.num,
            itemStyle:{color: item.color}
          }
      )),
    }
  ]
})

type PropData = {
  data: Data,
  sum: number
}

type Props = {
  type: boolean,
  switchType: () => void,
  propData: PropData
}

const PieChart: React.FC<Props> = ({type, switchType, propData}) => {
  const [option, setOption] = useState(()=>getOptions(propData))

  useEffect(() => {
    setOption(getOptions(propData))
  }, [propData])

  return (
      <Wrapper>
        <EchartsForReact options={option} className={'chart'}/>
        <div className="title">
          <span>{type ? '收入' : '支出'}</span>
          <span className='sum'>{propData.sum.toFixed(2)}</span>
          <span className='switch' onClick={switchType}>切换</span>
        </div>
      </Wrapper>
  )
}

export default PieChart