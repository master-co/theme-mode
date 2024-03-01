import './mock-match-media'
import ThemeMode from '../src'

const themeMode = new ThemeMode({ default: 'dark' }).init()

it('contains dark class and the dark color scheme', () => {
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: dark;')
})

it(`localStorage should be null after initThemeMode`, () => {
    expect(localStorage.getItem('theme')).toBeNull()
})

it('switches to the light theme', () => {
    themeMode.switch('light')
    expect(document.documentElement.classList.contains('light')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: light;')
    expect(themeMode.current).toBe('light')
    expect(themeMode.value).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
})

it('should not contain the dark class after switching', () => {
    expect(document.documentElement.classList.contains('dark')).toBeFalsy()
})

it('switches to the user\'s system preference', () => {
    themeMode.switch('system')
    // In the jest-dom mock environment, it's always the light theme.
    expect(document.documentElement.classList.contains('light')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: light;')
    expect(themeMode.current).toBe('light')
    expect(themeMode.value).toBe('system')
    expect(localStorage.getItem('theme')).toBe('system')
})

it('switches to a custom theme', () => {
    themeMode.switch('christmas')
    expect(document.documentElement.classList.contains('christmas')).toBeTruthy()
    expect(themeMode.current).toBe('christmas')
    expect(themeMode.value).toBe('christmas')
    expect(localStorage.getItem('theme')).toBe('christmas')
})

it('should not contain the color scheme style after switching', () => {
    expect(document.documentElement.getAttribute('style')).toBeFalsy()
})

it('destroys and restores', () => {
    themeMode.switch('dark')
    themeMode.destroy()
    expect(document.documentElement.className).toBeFalsy()
    expect(document.documentElement.getAttribute('style')).toBeFalsy()
    expect(localStorage.getItem('theme')).toBeNull()
})