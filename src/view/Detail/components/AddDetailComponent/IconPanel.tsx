import styled from "styled-components";
import React, {useContext, useState} from "react";
import {IconPanelContext} from "../../../../Reducer/iconPanelStore";
import Icon from "../../../../components/Icon";

const IconPanelStyl = styled.section`
  flex: 1;
  width: 100vw;
  overflow: hidden;
  .wrapper{
    height: 100%;
    width: 200%;
    display: flex;
    flex-direction: row;
    transition: all 0.5s;
    > div{
      width: 100vw;
      height: 100%;
      flex-shrink: 0;
      padding: 20px;
      > .container{
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 25%;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 20px;
          font-size: 14px;
          color: #656565;
          .icon-wrapper{
            box-sizing: content-box;
            width: 30px;
            height: 30px;
            padding: 10px;
            border-radius: 50%;
            background-color: #F5F5F5;
            margin-bottom: 5px;
            svg {
              width: 100%;
              height: 100%;
              fill: #535353;
            }
          }
          .selected{
            background-color: #FFDA44 !important;
          }
        }      
      }
    }
  }
  .scroll-to-right{
    transform: translateX(-50%);
  }
`

const IconPanel = () => {
  const {state} = useContext(IconPanelContext)
  const current = state.current
  const [selectedSpendIdx, setSelectedSpendIdx] = useState(NaN)
  const [selectedIncomeIdx, setSelectedIncomeIdx] = useState(NaN)

  const setSelected = (type: string, index: number) => {
    switch (type) {
      case 'spend':
        setSelectedSpendIdx(index); break
      case 'income':
        setSelectedIncomeIdx(index); break
      default:
        throw new Error()
    }
  }

  return (
      <IconPanelStyl>
        <div className={`wrapper ${current === 'left' ? '' : 'scroll-to-right'}`}>
          <div className="left">
            <div className="container">
              {state.spendItems.map((item, index) => {
                return (
                    <div className="item" key={item.id}>
                      <div className={`icon-wrapper ${selectedSpendIdx === index ? 'selected' : ''}`} onClick={() => setSelected('spend', index)}>
                        <Icon id={item.id} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                )
              })}
            </div>
          </div>

          <div className="right">
            <div className="container">
              {state.incomeItems.map((item, index) => {
                return (
                    <div className="item" key={item.id}>
                      <div className={`icon-wrapper ${selectedIncomeIdx === index ? 'selected' : ''}`} onClick={() => setSelected('income', index)}>
                        <Icon id={item.id}/>
                      </div>
                      <span>{item.name}</span>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      </IconPanelStyl>
  )
}

export default IconPanel