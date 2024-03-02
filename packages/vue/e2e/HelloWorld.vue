<script setup lang="ts">
import { inject } from 'vue';

const themeMode = inject<any>('theme-mode')
</script>

<template>
    <span id="value">{{ themeMode.value }}</span>
    <span id="preference">{{ themeMode.preference }}</span>
    <select class="abs full inset:0 opacity:0" v-model="themeMode.preference">
        <option value="light">☀️ Light</option>
        <option value="dark">🌜 Dark</option>
        <option value="system">System</option>
    </select>
</template>