import React, {useReducer} from "react";

type actionType = {
    type: string,
    payload: {
        current: 'left' | 'right'
    }
}

type itemsType = {
    current: 'left' | 'right',
    spendItems: {
        id: string;
        name: string;
    }[],
    incomeItems: {
        id: string;
        name: string;
    }[]
}

const spendItems = [
    {id: 'meal', name:'餐饮'},
    {id: 'shopping', name:'购物'},
    {id: 'commodity', name:'日用'},
    {id: 'traffic', name:'交通'},
    {id: 'vegetables', name:'蔬菜'}
]

const incomeItems = [
    {id: 'wage', name:'工资'},
    {id: 'stocks', name:'理财'},
]

const items: itemsType = {current: 'left', spendItems, incomeItems}

const reducer = (state: itemsType, action: actionType) => {
    switch (action.type) {
        case 'setCurrent':
            return {...state, current: action.payload.current}
        default:
            throw new Error()
    }
}

export const IconPanelContext = React.createContext<{
    state: typeof items,
    dispatch: (action: actionType) => void
}>({
    state: items,
    dispatch: () => {}
})

export const IconPanelStore = (props:any)=> {
    const [state, dispatch] = useReducer(reducer, items)
    return (
        <IconPanelContext.Provider value={{state, dispatch}}>
            {props.children}
        </IconPanelContext.Provider>
    )
}