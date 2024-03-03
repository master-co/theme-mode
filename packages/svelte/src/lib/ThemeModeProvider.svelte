<script lang="ts">
    import { onMount, onDestroy, setContext } from "svelte";
    import { writable } from "svelte/store";
    import ThemeMode, { type Options } from "theme-mode";

    export let options: Options | undefined = undefined;
    export let host: HTMLElement | undefined = undefined;

    const themeMode = writable(new ThemeMode(options, host));
    const onThemeModeChange = () => themeMode.set($themeMode);

    onMount(() => {
        $themeMode.init();
        themeMode.update(() => $themeMode);
        $themeMode.host?.addEventListener(
            "themeModeChange",
            onThemeModeChange,
            { passive: true },
        );
    });

    onDestroy(() => {
        $themeMode.destroy();
        $themeMode.host?.removeEventListener(
            "themeModeChange",
            onThemeModeChange,
        );
    });

    setContext("theme-mode", themeMode);
</script>

<slot />
