<script setup lang="ts">

import ThemeMode, { type Options, type ThemeValue } from 'theme-mode'
import { onMounted, onBeforeUnmount, ref, provide, readonly } from 'vue'

const props = defineProps<{
    host?: HTMLElement,
    options?: Options
}>()

const themeMode = ref<ThemeMode>()
const current = ref<ThemeMode['current']>()
const value = ref<ThemeMode['value']>()

const onThemeChange = () => {
    if (themeMode.value) {
        current.value = themeMode.value.current
        value.value = themeMode.value.value
    }
}

onMounted(() => {
    if (typeof window === 'undefined')
        return

    if (!themeMode.value) {
        themeMode.value = new ThemeMode(props.options, props.host)
        themeMode.value.init()
        current.value = themeMode.value.current
        value.value = themeMode.value.value
        themeMode.value.host?.addEventListener('themeChange', onThemeChange)
    }
})

onBeforeUnmount(() => {
    if (themeMode.value) {
        themeMode.value.host?.removeEventListener('themeChange', onThemeChange)
        themeMode.value.destroy(false)
    }
})

provide('theme-mode', {
    current: readonly(current),
    value: readonly(value),
    switch: readonly((
        _value: ThemeValue,
        // options?: { store?: boolean, emit?: boolean }
    ) => {
        if (themeMode.value) {
            themeMode.value.switch(_value)
            current.value = themeMode.value.current
            value.value = themeMode.value.value
        }
    })
})

</script>

<template>
    <slot></slot>
</template>