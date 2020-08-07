import React from "react";
import {createContext, Reducer, useReducer} from "react";

type reducerState = {
  path: string
}

type reducerAction = {
  type: string,
  path: string
}

const initialState: reducerState = {path: '/'}

export const RouterContext = createContext<{
  state: typeof initialState;
  dispatch: (action: reducerAction) => void;
}>({
  state: initialState,
  dispatch: () => {}
})

const reducer: Reducer<reducerState, reducerAction> = (state, action) => {
  switch (action.type) {
    case 'change':
      return {path: action.path}
    default:
      throw new Error()
  }
}

const RouteRedu = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <RouterContext.Provider value={{state, dispatch}}>
        {props.children}
      </RouterContext.Provider>
  )
}

export default RouteRedu