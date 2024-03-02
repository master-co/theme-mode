import defaultOptions, { Options, ThemePreference, ThemeValue } from './options'

export default class ThemeMode {

    private _darkMQL?: MediaQueryList
    private _preference?: ThemePreference
    private _value?: ThemeValue

    constructor(
        public options?: Options,
        public host?: HTMLElement
    ) {
        this.options = options ? Object.assign(defaultOptions, options) : defaultOptions
    }

    init() {
        if (!this.host) this.host = document.documentElement
        this._darkMQL = matchMedia('(prefers-color-scheme:dark)')
        const storage = this.storage
        if (storage) {
            this.preference = storage
        } else if (this.options?.preference) {
            this.preference = this.options.preference
        }
        return this
    }

    get storage() {
        return this.options?.store && localStorage.getItem(this.options.store)
    }

    get systemValue(): ThemeValue {
        return this._darkMQL?.matches ? 'dark' : 'light'
    }

    set preference(preference: ThemePreference) {
        if (preference !== this._preference) {
            if (preference === 'system') {
                this._darkMQL?.addEventListener?.('change', this._onThemeChange)
                this.value = this.systemValue
            } else {
                this._removeDarkMQLListener()
                this.value = preference
            }
            if (this.options?.store && preference)
                localStorage.setItem(this.options.store || 'theme-preference', preference)
            this.host?.dispatchEvent(new CustomEvent('themePreferenceChange', { detail: this }))
            this._preference = preference
        }
    }

    get preference(): ThemeMode['_preference'] {
        return this._preference
    }

    set value(value: ThemeValue) {
        const previous = this._value
        this._value = value
        if (this.host && previous !== value) {
            if (previous)
                this.host.classList.remove(previous)
            if (value && !this.host.classList.contains(value)) {
                this.host.classList.add(value)
                if ((this.host as any).style) {
                    (this.host as any).style.colorScheme =
                        (value === 'dark' || value === 'light') ? value : null
                }
            }
            this.host?.dispatchEvent(new CustomEvent('themeModeChange', { detail: this }))
        }
    }

    get value(): ThemeMode['_value'] {
        return this._value
    }

    private _removeDarkMQLListener() {
        this._darkMQL?.removeEventListener('change', this._onThemeChange)
    }

    private _onThemeChange = (mediaQueryList: MediaQueryListEvent) => {
        this.value = mediaQueryList.matches ? 'dark' : 'light'
    }

    destroy() {
        this._removeDarkMQLListener()
        this._preference = undefined
        this._value = undefined
    }
}