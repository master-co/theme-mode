<script lang="ts">
    import ThemeModeProvider from "../lib/ThemeModeProvider.svelte";
    import HelloWorld from "./HelloWorld.svelte";
</script>

<ThemeModeProvider preference="system">
    <HelloWorld />
</ThemeModeProvider>
