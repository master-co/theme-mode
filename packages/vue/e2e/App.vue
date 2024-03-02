<script setup lang="ts">
import ThemeModeProvider from '../src'
import HelloWorld from './HelloWorld.vue';
</script>

<template>
    <ThemeModeProvider preference="system">
        <HelloWorld />
    </ThemeModeProvider>
</template>