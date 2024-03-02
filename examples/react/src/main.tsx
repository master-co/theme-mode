import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@master/normal.css'
import { CSSRuntimeProvider } from '@master/css.react'
import ThemeModeProvider from '@master/theme-mode.react'
import config from '../master.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeModeProvider preference='system'>
            <CSSRuntimeProvider config={config}>
                <App />
            </CSSRuntimeProvider>
        </ThemeModeProvider>
    </React.StrictMode>,
)
