<script lang="ts">
    import { getThemeMode } from "../lib";
    const themeMode = getThemeMode();
</script>

<span id="value">{$themeMode.value}</span>
<span id="preference">{$themeMode.preference}</span>
<select class="abs full inset:0 opacity:0" bind:value={$themeMode.preference}>
    <option value="light">☀️ Light</option>
    <option value="dark">🌜 Dark</option>
    <option value="system">System</option>
</select>
