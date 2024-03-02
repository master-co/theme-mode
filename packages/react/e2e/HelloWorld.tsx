import { useThemeMode } from '../src'

export default function HelloWorld() {
    const themeMode = useThemeMode()
    return (
        <>
            <span id="value">{themeMode.value}</span>
            <span id="preference">{themeMode.preference}</span>
            <select className="abs full inset:0 opacity:0"
                value={themeMode.preference}
                onChange={(event) => themeMode.preference = event.target.value}>
                <option value="light">☀️ Light</option>
                <option value="dark">🌜 Dark</option>
                <option value="system">System</option>
            </select>
        </>
    )
}