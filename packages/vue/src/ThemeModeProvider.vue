<script setup lang="ts">

import ThemeMode, { type Options, options as defaultOptions } from 'theme-mode'
import { onMounted, provide, shallowReactive, onUnmounted } from 'vue'

const { host, ...options } = withDefaults(defineProps<Options & { host?: HTMLElement }>(), defaultOptions)
const themeMode = shallowReactive<ThemeMode>(new ThemeMode(options, host))

onMounted(() => themeMode.init())
onUnmounted(() => themeMode.destroy())
provide('theme-mode', themeMode)

</script>

<template>
    <slot></slot>
</template>