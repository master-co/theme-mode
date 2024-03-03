import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'
import type ThemeMode from 'theme-mode'

export function getThemeMode() {
    return getContext<Writable<ThemeMode>>('theme-mode')
}