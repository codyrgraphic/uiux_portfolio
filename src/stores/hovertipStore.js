import { writable } from 'svelte/store';

export const hovertip = writable({
  message: '',
  visible: false,
  x: 0,
  y: 0,
});
