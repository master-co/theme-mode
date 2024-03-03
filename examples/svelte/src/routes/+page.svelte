<script>
    import Counter from "./Counter.svelte";
    import welcome from "$lib/images/svelte-welcome.webp";
    import welcome_fallback from "$lib/images/svelte-welcome.png";
    import { getThemeMode } from "@master/theme-mode.svelte";

    const themeMode = getThemeMode();
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>
        <span class="welcome">
            <picture>
                <source srcset={welcome} type="image/webp" />
                <img src={welcome_fallback} alt="Welcome" />
            </picture>
        </span>
    </h1>

    <button
        class="px:5x r:2x font:18 h:48 bg:white@light bg:gray-80@dark fg:strong rel b:0"
    >
        {$themeMode.value === "dark" ? "🌜" : "☀️"}
        {$themeMode.preference}
        <select
            class="abs full inset:0 opacity:0"
            bind:value={$themeMode.preference}
        >
            <option value="light">☀️ Light</option>
            <option value="dark">🌜 Dark</option>
            <option value="system">System</option>
        </select>
    </button>

    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>

    <Counter />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>
