import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 15px;
  .content{
    background-color: white;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-radius: 10px;
    padding: 20px 10px;
    margin-top: 20px;
    .title{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .point{
      margin-bottom: 15px;
      .name{
        margin-right: 10px;
        font-weight: bold;
      }
    }
  }
`

interface Article {
  [key: string]: {
    title: string,
    array: {name: string, description: string, type?: string}[]
  }
}

const article: Article = {
  aboutApp: {
    title: '小新记账',
    array: [
      {name: '描述', description: '一个功能简单的记账app，具备基本的增删改查的记账功能，并且还有占比饼图'},
      {name: '技术', description: '主要采用react全家桶，包括：react、react-router、hooks，构建采用create-react-app脚手架，语言采用typescript'},
      {name: '亮点', description: '项目组件全部都是函数组件，灵活利用hook实现所有功能。useContext+useReducer代替Redux状态管理，' +
            '自定义hooks实现代码复用和状态共享，useState、useEffect、useMemo、useRef等原生hook的应用'},
      {name: '情况', description: 'React零基础开始开发React App，开发过程中逐步学习并巩固知识，并多次浏览React文档以及查阅官方文档推荐的博客，' +
            '遇到不会处理的情况查阅Stackoverflow，在开发过程中不断对比React与Vue，体会React的编程风格特点'},
      {name: '体会', description: '刚开始上手时百般不适，因为不同于Vue手把手给你提供API，React只给你提供一个项目开发框架和大体思路，' +
            '中间的所有处理问题都得由自己发挥，逐渐熟悉后：艾玛，真香！尤其是hook，真的是给React注入灵魂'}
    ]
  },
  aboutMe: {
    title: '关于我',
    array: [
      {name: '简述', description: '一个野路子出来的前端小白'},
      {name: '教育', description: '南方医科大学 -- 生物医学工程 -- 本科'},
      {name: '介绍', description: '一个热爱前端，并想转行入前端坑的工科男'},
      {name: '技能', description: 'Vue, React, Jquery, typescript'},
      {name: 'github', description: '请猛戳这里', type: 'link'}
    ]
  }
}

function AboutPad() {

  return (
      <Wrapper>
        {Object.keys(article).map(val => {
          return (
              <div className='content' key={val}>
                <div className="title">{article[val].title}</div>
                {article[val].array.map((item: { name: string, description: string, type?: string}) => (
                    <div className='point' key={item.name}>
                      <span className="name">
                        {`${item.name}:`}
                      </span>
                        <span className="description">
                          {item.type === 'link' ? <a href={'https://github.com/OceanFlooor'}>{item.description}</a>
                          : `${item.description}`}
                      </span>
                    </div>
                ))}
              </div>
          )
        })}
      </Wrapper>
  )
}

export default AboutPad