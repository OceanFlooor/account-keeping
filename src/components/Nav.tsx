import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const Nav = styled.div`
  background-color: #f6f6f6;
  > ul {
    display: flex;
    padding: 5px 0;
    > li {
      text-align: center;
      width: 33.333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > svg{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }
      > a{
        color: #696969;
      }
    }  
  }
`

function Navigator() {
  const navs = [{
    id: 'purse',
    route: '/purse',
    name: '钱包'
  }, {
    id: 'detail',
    route: '/detail',
    name: '明细'
  }, {
    id: 'mine',
    route: '/users',
    name: '我的'
  }]

  return (
      <Nav>
        <ul>
          { navs.map((item, index) =>
            <li key={index}>
              <Icon fill="9F9F9F" id={item.id} />
              <Link to={item.route}>{item.name}</Link>
            </li>
          )}
        </ul>
      </Nav>
  )
}

export default Navigator