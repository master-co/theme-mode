'use client'

import ThemeMode, { type Options, type ThemeValue } from 'theme-mode'
import { Context, createContext, DependencyList, EffectCallback, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'

const useIsomorphicEffect: (effect: EffectCallback, deps?: DependencyList) => void =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const ThemeModeContext: Context<ThemeMode | null> = createContext<ThemeMode | null>(null)

export function useThemeMode() {
    return useContext(ThemeModeContext)
}

export default function ThemeModeProvider({
    options,
    host,
    children
}: {
    host?: HTMLElement,
    options?: Options,
    children: JSX.Element,
}) {
    const themeMode = useMemo(() => new ThemeMode(options, host), [options, host])
    // Make React hook theme members
    const [current, setCurrent] = useState<ThemeMode['current']>(themeMode.current)
    const [value, setValue] = useState<ThemeMode['value']>(themeMode.value)

    const switchValue = useCallback((value: ThemeValue, options?: {
        store?: boolean;
        emit?: boolean;
    }) => {
        themeMode.switch(value)
        setCurrent(themeMode.current)
        setValue(themeMode.value)
    }, [themeMode])

    const onThemeChange = useCallback(() => {
        setCurrent(themeMode.current)
        setValue(themeMode.value)
    }, [themeMode])

    useIsomorphicEffect(() => {
        themeMode.init()
        setCurrent(themeMode.current)
        setValue(themeMode.value)
        themeMode.host?.addEventListener('themeChange', onThemeChange)
        return () => {
            themeMode.host?.removeEventListener('themeChange', onThemeChange)
            themeMode.destroy(false)
        }
    }, [onThemeChange, themeMode])

    return <ThemeModeContext.Provider value={{ ...themeMode, value, current, switch: switchValue } as ThemeMode}>{children}</ThemeModeContext.Provider>
}