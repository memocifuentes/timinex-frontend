"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface AppContextType {
  exampleValue: string
  setExampleValue: (val: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [exampleValue, setExampleValue] = useState("Hola desde AppContext")

  return (
    <AppContext.Provider value={{ exampleValue, setExampleValue }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error("useAppContext must be used within AppProvider")
  return context
}
