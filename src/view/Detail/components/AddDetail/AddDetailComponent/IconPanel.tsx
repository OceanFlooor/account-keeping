import styled from "styled-components";
import React, {useContext, useEffect, useState} from "react";
import {IconPanelContext} from "../../../../../Reducer/iconPanelStore";
import Icon from "../../../../../components/Icon";

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

type Item = {id: string, name: string}

const IconPanel = () => {
  const {state, dispatch} = useContext(IconPanelContext)
  const current = state.current
  const [selectedIdx, setSelectedIdx] = useState(NaN)

  const setSelected = (index: number, item: Item) => {
    setSelectedIdx(index)
    dispatch({type: 'setSelectedIcon', payload: {selectedIcon: {id: item.id, name: item.name}}})
  }
  useEffect(() => {
    setSelectedIdx(NaN)
    dispatch({type: 'setSelectedIcon', payload: {selectedIcon: {id: '', name: ''}}})
  }, [current])

  const iconList = (items: Item[], part: 'left' | 'right') => {
    return (
        <div className={part}>
          <div className="container">
            {
              items.map((item, index) => {
                return (
                    <div className="item" key={item.id}>
                      <div className={`icon-wrapper ${(current === part && selectedIdx === index) ? 'selected' : ''}`} onClick={() => setSelected(index, item)}>
                        <Icon id={item.id} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                )
              })
            }
          </div>
        </div>
    )
  }
  return (
      <IconPanelStyl>
        <div className={`wrapper ${current === 'left' ? '' : 'scroll-to-right'}`}>
          {iconList(state.spendItems, 'left')}
          {iconList(state.incomeItems, 'right')}
        </div>
      </IconPanelStyl>
  )
}

export default IconPanel