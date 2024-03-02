<script setup lang="ts">
import { ref, inject } from 'vue'
const themeMode = inject<any>('theme-mode')
</script>

<template>
    <div class="abs inset:0 margin:auto h:fit max-w:200x text:center">
        <div class='grid-cols:2 w:fit gap:12x mx:auto'>
            <a href="https://rc.css.master.co" target="_blank">
                <img src="../assets/master.svg" class="logo size:24x scale(2)" alt="Master logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
                <img src="../assets/vue.svg" class="logo size:24x" alt="Vite logo" />
            </a>
        </div>
        <h1 class="font:56 fg:white@dark font:heavy my:8x">
            <span>Master CSS</span> <span class="fg:#42b883">Vue</span>
        </h1>
        <button class="px:5x r:2x font:18 h:48 bg:slate-10@light bg:gray-80@dark fg:strong rel">
            {{ themeMode.value === 'dark' ? '🌜' : '☀️' }} {{ themeMode.preference }}
            <select class="abs full inset:0 opacity:0" v-model="themeMode.preference">
                <option value="light">☀️ Light</option>
                <option value="dark">🌜 Dark</option>
                <option value="system">System</option>
            </select>
        </button>
    </div>
</template>

