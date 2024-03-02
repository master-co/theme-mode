<script setup lang="ts">

import ThemeMode, { type Options, options as defaultOptions } from 'theme-mode'
import { onMounted, provide, shallowReactive, onUnmounted } from 'vue'

const { host, ...options } = withDefaults(defineProps<Options & { host?: HTMLElement }>(), defaultOptions)
const themeMode = shallowReactive<ThemeMode>(new ThemeMode(options, host))
// Trigger reactivity when the theme mode changes
const onThemeModeChange = () => themeMode.value = themeMode.value

onMounted(() => {
    themeMode.init()
    themeMode.host?.addEventListener('themeModeChange', onThemeModeChange, { passive: true })
})
onUnmounted(() => {
    themeMode.destroy()
    themeMode.host?.removeEventListener('themeModeChange', onThemeModeChange)
})

provide('theme-mode', themeMode)

</script>

<template>
    <slot></slot>
</template>