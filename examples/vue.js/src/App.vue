<script setup lang="ts">
import { CSSRuntimeProvider } from '@master/css.vue'
import ThemeModeProvider from '@master/theme-mode.vue'
import config from '../master.css'
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <CSSRuntimeProvider :config="config">
        <ThemeModeProvider preference="system">
            <HelloWorld />
        </ThemeModeProvider>
    </CSSRuntimeProvider>
</template>