import {useEffect, useState} from "react";
import generateUID from "../lib/generateUID";
import useUpdate from "./useUpdate";

export type Item = {
  id: string,
  iconId: string,
  iconName: string,
  output: string,
  remark: string,
  type: 'spend' | 'income'
}

const useDetailItems = () => {
  const [items, setItems] = useState<Item[]>([])

  // initial items
  useEffect(() => {
    const localDetailItems = JSON.parse(localStorage.getItem('detailItems') || '[]')
    setItems(localDetailItems)
  }, [])

  useUpdate(()=> {
    localStorage.setItem('detailItems', JSON.stringify(items))
  }, items)

  // 增加明细账单
  const addItem = (item: Item) => {
    setItems([...items, {...item, id: generateUID()}])
  }

  const sum = () => {
    let [income, spend] = [0, 0]
    items.map(item => {
      let val = Math.abs(Number(item.output))
      item.type === 'spend' ? spend+= val : income += val
    })
    return {income, spend}
  }

  const findItem = (id: string): Promise<Item> => {
    return new Promise((resolve) => {
      resolve(items.filter(item => item.id === id)[0])
    })
  }

  const findIndex = (id: string) => {
    return items.findIndex(val => {
      return val.id === id
    })
  }

  const updateItem = (item: Item) => {
    items[findIndex(item.id)] = item
    setItems([...items])
  }

  const deleteItem = (id: string) => {
    items.splice(findIndex(id), 1)
    setItems([...items])
  }

  return {items, addItem, sum, findItem, updateItem, deleteItem}
}

export {useDetailItems}