import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'
export function useTheme() {
    const [isDark,setisDark] = useContext(ThemeContext)

    return [isDark,setisDark]
}
