import React, { createContext } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {

  const values = {
    count: 0
  }

  return <CounterContext.Provider value={values}>{ children }</CounterContext.Provider>
}