<script lang="ts">
    import { onMount, onDestroy, setContext } from "svelte";
    import { writable } from "svelte/store";
    import ThemeMode, { type Options, options } from "theme-mode";

    export let preference: Options["preference"] = options.preference;
    export let store: Options["store"] = options.store;
    export let host: HTMLElement | undefined = undefined;

    const themeMode = writable(new ThemeMode({ preference, store }, host));
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
