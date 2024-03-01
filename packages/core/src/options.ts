export declare interface Options {
    preference?: ThemePreference
    store?: string | false
}

export const options: Options = {
    store: 'theme-mode'
}

export default options

export declare type ThemePreference = 'dark' | 'light' | 'system' | string