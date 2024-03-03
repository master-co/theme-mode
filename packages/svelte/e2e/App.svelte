<script lang="ts">
    import ThemeModeProvider from "../src/lib";
    import HelloWorld from "./HelloWorld.svelte";
</script>

<ThemeModeProvider options={{ preference: "system" }}>
    <HelloWorld />
</ThemeModeProvider>
