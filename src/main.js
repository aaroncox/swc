import App from './App.svelte';
import Button from './Button.svelte';
import { writable } from 'svelte/store'

const app = new App({
	target: document.body,
});

export default app;