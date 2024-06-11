import { writable } from "svelte/store";

export const toastStore = writable({
  message: "",
  visible: false,
});

export function showToast(message, duration = 3000) {
  toastStore.set({ message, visible: true });
  if (duration !== "persistent") {
    setTimeout(() => hideToast(), duration);
  }
}

export function hideToast() {
  toastStore.set({ message: "", visible: false });
}
