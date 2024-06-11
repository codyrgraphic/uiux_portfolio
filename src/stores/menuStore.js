import { writable } from "svelte/store";

export const isMenuOpen = writable(false);

export function toggleMenu() {
  console.log("Toggling menu");
  isMenuOpen.update((state) => !state);
}
