import { createContext } from "react"

export interface RuntimeContext {
  menuCollapsed: boolean
  setMenuCollapsed: (collapsed: boolean) => void
}

export const RuntimeContext = createContext<RuntimeContext>({
  menuCollapsed: false,
  setMenuCollapsed: () => {},
})
