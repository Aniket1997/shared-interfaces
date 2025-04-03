import {ThemeEnum} from '../constants/themeConstant'
export type Theme = ThemeEnum;

export interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}
  
// Define the ThemeProviderState interface
export interface ThemeProviderState {
    theme: Theme
    setTheme: (theme: Theme) => void
}