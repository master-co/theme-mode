import './mock-match-media'
import '../src/pre-init.iife.min'

it('checks pre-init script', async () => {
    expect(document.documentElement.classList.contains('light')).toBeTruthy()
    expect(document.documentElement.getAttribute('style')).toEqual('color-scheme: light;')
})