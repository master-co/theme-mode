'use client'

import React, { useState, useEffect, createContext, useContext, ReactNode, useCallback, useLayoutEffect, EffectCallback, DependencyList } from 'react'
import ThemeMode, { type Options } from 'theme-mode'

const Context = createContext<ThemeMode | null>(null)
const useIsomorphicEffect: (effect: EffectCallback, deps?: DependencyList) => void =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

declare type Props = Options & {
    children: ReactNode
    host?: HTMLElement
}

export default function ThemeModeProvider({ children, host, ...options }: Props) {
    const [themeMode] = useState(new ThemeMode(options, host))
    const createProxy = useCallback(() => new Proxy(themeMode, {
        set: (target, prop, value) => {
            setProxyThemeMode(createProxy())
            return Reflect.set(target, prop, value)
        }
    }), [themeMode])
    const [proxyThemeMode, setProxyThemeMode] = useState(createProxy())

    const onThemeModeChange = useCallback(() => {
        setProxyThemeMode(createProxy())
    }, [createProxy])

    useIsomorphicEffect(() => {
        proxyThemeMode.init()
        proxyThemeMode.host?.addEventListener('themeModeChange', onThemeModeChange, { passive: true })
        return () => {
            proxyThemeMode.destroy()
            proxyThemeMode.host?.removeEventListener('themeModeChange', onThemeModeChange)
        }
    }, [createProxy])

    return (
        <Context.Provider value={proxyThemeMode}>{children}</Context.Provider>
    )
}

export const useThemeMode = () => {
    const themeMode = useContext(Context)
    if (!themeMode) {
        throw new Error('useThemeMode must be used within a ThemeModeProvider')
    }
    return themeMode
}