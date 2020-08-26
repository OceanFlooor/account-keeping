import React, {useState} from "react";
import styled from "styled-components";
import PieChart from "./components/PieChart";
import Rank from "./components/Rank";
import {Item, useDetailItems} from "hooks/useDetailItems";

const Wrapper = styled.div`

`

export type Data = {
  color: string,
  title: string,
  percentage: string,
  num: number
}[]

const customColor = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']

const getIncomeSpend = (items: Item[]) => {
  let income: Data = [], spend: Data = [], incomeSum = 0, spendSum = 0
  const calcPercentage = (num: number, sum: number): string => {
    return `${(num/sum*100).toFixed(2)}%`
  }

  items.map(item => {
    let val = Number(item.output)
    item.type === 'income' ? incomeSum+=val : spendSum+=val
  })

  let idx1 = 0, idx2 = 0
  items.map((item,index) => {
    let val = {title: item.iconName, num: Number(item.output)}

    if(item.type === 'income') {
      income.push({...val, color:customColor[idx1++], percentage: calcPercentage(val.num, incomeSum)})
    } else {
      spend.push({...val, color:customColor[idx2++], percentage: calcPercentage(val.num, spendSum)})
    }
  })

  return {income, spend, incomeSum, spendSum}
}

function Charts() {
  const [type, setType] = useState(true)  // true -> income; false -> spend
  const switchType = () => {
    setType(type => !type)
  }

  const {items} = useDetailItems()
  const {income, spend, incomeSum, spendSum} = getIncomeSpend(items)
  const propData = type ? {data: income, sum: incomeSum} : {data: spend, sum: spendSum}
  return (
      <Wrapper>
        <PieChart type={type} switchType={switchType} propData={propData}/>
        <Rank type={type} propData={propData}/>
      </Wrapper>
  )
}

export default Charts