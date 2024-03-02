export declare interface Options {
    preference?: ThemePreference
    store?: 'theme-preference' | string | false
}

export const options: Options = {
    store: 'theme-preference'
}

export default options

export declare type ThemePreference = 'dark' | 'light' | 'system' | string
export declare type ThemeValue = 'dark' | 'light' | string