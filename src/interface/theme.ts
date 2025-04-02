type Theme = "dark" | "light"

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