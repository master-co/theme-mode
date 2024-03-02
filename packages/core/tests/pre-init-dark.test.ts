import './mock-match-media'
import '../src/pre-init-dark.iife.min'

it('checks pre-init script', async () => {
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: dark;')
})