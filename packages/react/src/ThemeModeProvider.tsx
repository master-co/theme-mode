'use client'

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import ThemeMode, { type ThemePreference, type ThemeValue, type Options } from 'theme-mode'

const Context = createContext<ThemeModeContext>(null)

export declare type ThemeModeContext = {
    setPreference: React.Dispatch<ThemePreference>
    setValue: React.Dispatch<ThemeValue>
} & ThemeMode | null

declare type Props = Options & {
    children: ReactNode
    host?: HTMLElement
}

export default function ThemeModeProvider({ children, host, ...options }: Props) {
    const [themeMode] = useState(new ThemeMode(options, host))
    const [preference, setPreference] = useState<ThemePreference>(themeMode.preference)
    const [value, setValue] = useState<ThemeValue>(themeMode.value)

    useEffect(() => {
        themeMode.preference = preference
        setValue(themeMode.value)
    }, [preference, themeMode])

    useEffect(() => {
        themeMode.value = value
    }, [value, themeMode])

    useEffect(() => {
        console.log(localStorage.getItem('theme-preference'))
        themeMode.init()
        setPreference(themeMode.preference)
        setValue(themeMode.value)
        return () => themeMode.destroy()
    }, [themeMode])

    return (
        <Context.Provider value={{ ...themeMode, setPreference, setValue, preference, value } as ThemeModeContext}>{children}</Context.Provider>
    )
}

export const useThemeMode = () => {
    const themeMode = useContext(Context)
    if (!themeMode) {
        throw new Error('useThemeMode must be used within a ThemeModeProvider')
    }
    return themeMode
}