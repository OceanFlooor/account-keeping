import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const Nav = styled.div`
  background-color: #E8E8E8;
  > ul {
    display: flex;
    padding: 5px 0;
    > li {
      text-align: center;
      width: 33.333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > i {
        display: inline-block;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: aqua;
        margin-bottom: 5px;
      }
    }  
  }
`

function Navigator() {
  return (
      <Nav>
        <ul>
          <li>
            <i></i>
            <Link to="/purse">钱包</Link>
          </li>
          <li>
            <Link to="/detail">明细</Link>
          </li>
          <li>
            <Link to="/users">我的</Link>
          </li>
        </ul>
      </Nav>
  )
}

export default Navigator