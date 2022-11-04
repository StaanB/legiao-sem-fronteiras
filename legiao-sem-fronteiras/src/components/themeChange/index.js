// Import Utilities
import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    function toggleThemeMode() {
        if (
            document.querySelector('html').classList.contains('light')
        ) {
            document.querySelector('html').classList.remove('light')
            document.querySelector('html').classList.add('dark')
            setTheme('dark')
        } else {
            document.querySelector('html').classList.add('light')
            document.querySelector('html').classList.remove('dark')
            setTheme('light')
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider