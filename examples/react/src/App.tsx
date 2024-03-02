import reactLogo from './assets/react.svg'
import masterLogo from './assets/master.svg'
import { useThemeMode } from '@master/theme-mode.react'

function App() {
    const themeMode = useThemeMode()
    return (
        <div className="abs inset:0 margin:auto h:fit max-w:200x text:center">
            <div className='grid-cols:2 w:fit gap:12x mx:auto'>
                <a href="https://rc.css.master.co" target="_blank">
                    <img src={masterLogo} className="logo size:24x scale(2)" alt="Master logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={reactLogo} className="logo size:24x" alt="Vite logo" />
                </a>
            </div>
            <h1 className="font:56 fg:white@dark font:heavy my:8x">
                <span>Master CSS</span> <span className="fg:#42b883">Vue</span>
            </h1>
            <button className="px:5x r:2x font:18 h:48 bg:slate-10@light bg:gray-80@dark fg:strong rel">
                {themeMode.value === 'dark' ? '🌜' : '☀️'} {themeMode.preference}
                <select className="abs full inset:0 opacity:0"
                    value={themeMode.preference}
                    onChange={(event) => themeMode.preference = event.target.value}>
                    <option value="light">☀️ Light</option>
                    <option value="dark">🌜 Dark</option>
                    <option value="system">System</option>
                </select>
            </button>
        </div>
    )
}

export default App
