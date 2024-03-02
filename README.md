<br>
<div align="center">

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/33840671/205238939-3cf526f7-8d92-4fa0-8ca3-6c7e4c545f9c.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/33840671/205238945-3295c4f5-a88a-4b58-bca9-770fe7bf894e.svg">
        <img alt="Master" src="https://user-images.githubusercontent.com/33840671/205238945-3295c4f5-a88a-4b58-bca9-770fe7bf894e.svg" width="100%">
    </picture>
</p>
<p align="center">A lightweight utility for switching CSS theme modes</p>

<p align="center">
    <a aria-label="GitHub release (latest by date including pre-releases)" href="https://github.com/master-co/theme-mode/releases">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/v/release/master-co/theme-mode?include_prereleases&color=212022&label=&style=for-the-badge&logo=github&logoColor=fff">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/v/release/master-co/theme-mode?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github&logoColor=%23000">
            <img alt="NPM Version" src="https://img.shields.io/github/v/release/master-co/theme-mode?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github">
        </picture>
    </a>
    <a aria-label="NPM Package" href="https://www.npmjs.com/package/theme-mode">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/dm/theme-mode?color=212022&label=%20&logo=npm&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/npm/dm/theme-mode?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
            <img alt="NPM package ( download / month )" src="https://img.shields.io/npm/dm/theme-mode?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Discord Community" href="https://discord.gg/sZNKpAAAw6">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/discord/917780624314613760?color=212022&label=%20&logo=discord&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/discord/917780624314613760?color=f6f7f8&label=%20&logo=discord&style=for-the-badge">
            <img alt="Discord online" src="https://img.shields.io/discord/917780624314613760?color=f6f7f8&label=%20&logo=discord&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Follow @mastercorg" href="https://twitter.com/mastercorg">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=212022&logo=twitter&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
            <img alt="Follow @mastercorg" src="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Github Actions" href="https://github.com/master-co/theme-mode/actions/workflows/release.yml">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/master-co/theme-mode/release.yml?branch=rc&label=%20&message=twitter&color=212022&logo=githubactions&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/actions/workflow/status/master-co/theme-mode/release.yml?branch=rc&label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
            <img alt="Github release actions" src="https://img.shields.io/github/actions/workflow/status/master-co/theme-mode/release.yml?branch=rc&label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
        </picture>
    </a>
</p>

</div>

## Features
Vanilla, Next, React, Vue, and Master CSS are available:

* ⚡️ Ultra-lightweight **~1.2KB**
* 🌈 Switch between `light`, `dark`, and `system`
* 💖 Sync with system theme preferences
* 💾 Store the user's preference in `localStorage`
* 💫 Access theme preferences and modes through context
* 🧩 Built-in `"use client"` directive

## Why should I use this?
CSS's `prefers-color-scheme` feature query cannot force override to the specified color mode. Once you want to switch themes, you cannot use `@media (prefers-color-scheme: dark)`.

https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting

## How does this work?
This package automatically switches themes using `class=""` and `color-scheme:`; that's it.
```html
<html class="dark" style="color-scheme: dark">
    <body>
        <h1 class="bg:black@dark bg:white@light">Hello World</h1>
    </body>
</html>
```
To view the source code examples:

- React example: https://github.com/master-co/theme-mode/tree/main/examples/react
- Vue example: https://github.com/master-co/theme-mode/tree/main/examples/vue

## Getting Started
Install the package depending on your framework.

### Vanilla
```bash
npm install theme-mode
```
```js
import ThemeMode from 'theme-mode'

const themeMode = new ThemeMode().init()

// Set `preference` anywhere to switch theme modes.
themeMode.preference = 'dark'
```

### React
```bash
npm install @master/theme-mode.react
```
```tsx
import ThemeModeProvider from '@master/theme-mode.react'

export default function App({ children }) {
    return (
        <ThemeModeProvider preference='system'>
            {children}
        </ThemeModeProvider>
    )
}
```

### Vue
```bash
npm install @master/theme-mode.vue
```
```vue
<script setup lang="ts">
import ThemeModeProvider from '@master/theme-mode.vue'
</script>

<template>
    <ThemeModeProvider preference="system">
        <slot></slot>
    </ThemeModeProvider>
</template>
```

## Basic usage
### Default to light or dark mode
You can set the default theme mode when the user has not set a theme preference, such as common `light` or `dark` mode.
```tsx
<ThemeModeProvider preference="dark">...</ThemeModeProvider>
```
Rendered as:
```html
<html class="dark" style="color-scheme: dark">…</html>
```

### Default based on the system preference
Automatically switches modes based on the user's system preference.
```tsx
<ThemeModeProvider preference="system">...</ThemeModeProvider>
```
Rendered as:
```html
<html class="light" style="color-scheme: light">…</html>
<!-- or -->
<html class="dark" style="color-scheme: dark">…</html>
```
> Note: CSS only supports light and dark modes for system preferences.

### Sync the user's preference to `localStorage`
By default `options.store` is set to `'theme-preference'`, which uses this key to set local storage when the preference is changed.

In this way, the theme preference set last time will be applied when the user visits or refreshes the website again.

To disable local storage, set it to `false`.
```tsx
<ThemeModeProvider store={false}>...</ThemeModeProvider>
```

## Apply styles based on theme modes
You can now create selector-driven CSS themes using tools like [Master CSS](https://rc.css.master.co/docs/variables-and-modes).
```html
<html class="light" style="color-scheme: light">
    <body>
        <div class="block@dark" hidden>Dark</div>
        <div class="block@light" hidden>Light</div>
        <div class="block@christmas" hidden>Christmas</div>
    </body>
</html>
```

## Create a theme-switching select
### React
```tsx
import { useThemeMode } from '@master/theme-mode.react'

export default function ThemeModeSelect() {
    const themeMode = useThemeMode()
    return (
        <button>
            {themeMode.value === 'dark' ? '🌜' : '☀️'} {themeMode.preference}
            <select className="abs full inset:0 opacity:0"
                value={themeMode.preference}
                onChange={(event) => themeMode.preference = event.target.value}>
                <option value="light">☀️ Light</option>
                <option value="dark">🌜 Dark</option>
                <option value="system">System</option>
            </select>
        </button>
    )
}
```

### Vue
```vue
<script setup lang="ts">
import { inject } from 'vue'
const themeMode = inject<any>('theme-mode')
</script>

<template>
    <button class="px:5x r:2x font:18 h:48 bg:slate-10@light bg:gray-80@dark fg:strong rel">
        {{ themeMode.value === 'dark' ? '🌜' : '☀️' }} {{ themeMode.preference }}
        <select class="abs full inset:0 opacity:0" v-model="themeMode.preference">
            <option value="light">☀️ Light</option>
            <option value="dark">🌜 Dark</option>
            <option value="system">System</option>
        </select>
    </button>
</template>
```

## Avoid FOUC
If you've pre-rendered your CSS styles to the page to improve the page loading and first-render experience, it's crucial to initialize the theme mode in advance.

By default, three modules of minified advanced initial scripts for different default themes are exported:

- `theme-mode/pre-init`: https://github.com/master-co/theme-mode/tree/main/packages/core/src/pre-init.min.ts
- `theme-mode/pre-init-light`: https://github.com/master-co/theme-mode/tree/main/packages/core/src/pre-init-light.min.ts
- `theme-mode/pre-init-dark`: https://github.com/master-co/theme-mode/tree/main/packages/core/src/pre-init-dark.min.ts

You have to use the build tool to inject these original scripts into HTML `<head>`, taking Next.js as an example:
```tsx
import PRE_INIT_THEME_MODE_SCRIPT from '!!raw-loader!theme-mode/pre-init';

export default async function RootLayout({ children }: {
    children: JSX.Element
}) {
    return (
        <html suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: PRE_INIT_THEME_MODE_SCRIPT }}></script>
                ...
            </head>
            ...
        </html>
    )
}
```

Or copy them directly:
```js
const preference = localStorage.getItem('theme-preference') || 'system';
const value = preference === 'system'
    ? matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
    : preference;

document.documentElement.classList.add(value);
if (['dark', 'light'].includes(value)) document.documentElement.style.colorScheme = value;
```

Those JS resources cannot be loaded from external because this is a critical script for the first painting of the page.

## Options
### `.preference`
Specify the default theme preference.
- Default: `undefined`
- Value: `'dark'` | `'light'` | `'system'` | `string`

### `.store`
Enable local storage and specify the key for `localStorage`.
- Default: `'theme-preference'`
- Value: `'theme-preference'` | `string` | `false`

## Properties
### `themeMode.preference`
Set or get the current theme preference.
- Default: `undefined`
- Value: `'dark'` | `'light'` | `'system'` | `string`

### `themeMode.value`
Set or get the current theme mode.
- Default: `undefined`
- Value: `'dark'` | `'light'` | `string`

### `themeMode.storage`
Get the currently stored theme preference.
- Default: `undefined`
- Value: `'dark'` | `'light'` | `string`

### `themeMode.systemPreference`
Get the theme mode of the current system
- Default: `undefined`
- Value: `'dark'` | `'light'` | `string`

## Methods
### `themeMode.init()`
Initialize the default theme mode. This is usually performed after the DOM has been initialized.

### `themeMode.destroy()`
Destroy the theme mode, including removing media query listeners.

## Community
The Master community can be found here:

- [Discuss on GitHub](https://github.com/master-co/theme-mode/discussions) - Ask questions, voice ideas, and do any other discussion
- [Join our Discord Server](https://discord.com/invite/sZNKpAAAw6) - Casually chat with other people using the language <sup><sub>✓ 中文</sub></sup>

<sub>Our [《 Code of Conduct 》](https://github.com/master-co/theme-mode/blob/main/.github/CODE_OF_CONDUCT.md) applies to all Master community channels.</sub>

## Contributing
Please see our [CONTRIBUTING](https://github.com/master-co/theme-mode/blob/main/.github/CONTRIBUTING.md) for workflow.
