import './mock-match-media'
import getPreInitScript from '../src/get-pre-init-script'

it('checks if init script syncs via localStorage', () => {
    localStorage.setItem('theme', 'dark')
    eval(getPreInitScript())
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: dark;')
})