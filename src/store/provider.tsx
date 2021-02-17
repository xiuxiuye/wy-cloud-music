import React, { useReducer } from 'react'
import { state as initState, reducer } from './init'

export const StoreContext = React.createContext({})

interface ProviderProps {
  children: any;
  [propName: string]: any;
}

export default function Provider (props: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initState)

  const store = {
    state,
    dispatch
  }

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}