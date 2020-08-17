import React, {useReducer} from "react";

type storeType = {
  iconShow: boolean
}

type actionType = {
  type: string,
  payload: boolean | any
}

const store: storeType = {
  iconShow: false
}

const reducer = (state: storeType, action: actionType) => {
  switch (action.type) {
    case 'setIconShow':
      return {...state, iconShow: action.payload}
    default:
      throw new Error()
  }
}

export const Context = React.createContext<{
  state: typeof store,
  dispatch: (action: actionType) => void
}>({
  state: store,
  dispatch: () => {}
});

export const PageContext = (props: any) => {
  const [state, dispatch] = useReducer(reducer, store)
  return (
      <Context.Provider value={{state, dispatch}}>
        {props.children}
      </Context.Provider>
  )
}
