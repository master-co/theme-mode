<script setup lang="ts">

import ThemeMode, { type Options } from 'theme-mode'
import { onMounted, provide, shallowReactive, onUnmounted } from 'vue'

const props = defineProps<{ host?: HTMLElement, options?: Options }>()
const themeMode = shallowReactive<ThemeMode>(new ThemeMode(props.options, props.host))

onMounted(() => themeMode.init())
onUnmounted(() => themeMode.destroy())
provide('theme-mode', themeMode)

</script>

<template>
    <slot></slot>
</template>