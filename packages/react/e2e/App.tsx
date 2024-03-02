import React from 'react'
import ThemeModeProvider from '../src/ThemeModeProvider'
import HelloWorld from './HelloWorld'

function App() {
    return (
        <React.StrictMode>
            <ThemeModeProvider preference='system'>
                <HelloWorld />
            </ThemeModeProvider>
        </React.StrictMode>
    )
}

export default App
