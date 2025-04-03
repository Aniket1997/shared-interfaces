// constants.ts

// Enum for available themes
export enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark"
}
  
  // Default theme to use when none is provided or retrieved
export const DEFAULT_THEME: ThemeEnum = ThemeEnum.LIGHT; // or ThemeEnum.DARK, based on your design
  
  // Storage key for saving the theme in localStorage/localForage
export const STORAGE_KEY = "vite-ui-theme";
  