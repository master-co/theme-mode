/* eslint-disable semi */
// @ts-expect-error Cannot redeclare block-scoped variable
const preference = localStorage.getItem('theme-preference') || 'dark';
// @ts-expect-error Cannot redeclare block-scoped variable
const value = preference === 'system'
    ? matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
    : preference;

document.documentElement.classList.add(value);
if (['dark', 'light'].includes(value)) document.documentElement.style.colorScheme = value;