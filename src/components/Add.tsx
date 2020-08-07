import styled from "styled-components";
import React, {useContext} from "react";
import Icon from "./Icon";
import {Context} from "../Reducer/pageStore";


const AddStyl = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f6f6f6;
  width: 60px;
  height: 30px;
  .outter{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: #ffda44;
    border-radius: 50%;
    .wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      svg {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }
  }

`

const Add = () => {
  const {dispatch} = useContext(Context)
  const handleClick = (e:React.MouseEvent) => {
    dispatch({type: 'setIconShow', payload: true})
  }
  return (
      <AddStyl>
        <div className="outter" onClick={handleClick}>
          <div className='wrapper'>
            <Icon id='add'></Icon>
          </div>
        </div>
      </AddStyl>
  )
}

export default Add