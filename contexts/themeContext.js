const { createContext } = require("react");

export const ThemeContext = createContext({mode:"light", setMode:()=>{}})