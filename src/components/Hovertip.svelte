<script>
  import { hovertip } from '../stores/hovertipStore';
  import { onMount } from 'svelte';

  let message = '';
  let visible = false;
  let x = 0;
  let y = 0;

  const unsubscribe = hovertip.subscribe((value) => {
    message = value.message;
    visible = value.visible;
    x = value.x;
    y = value.y;
  });

  onMount(() => {
    return () => {
      unsubscribe();
    };
  });
</script>

<div
  class="hovertip {visible ? 'visible' : ''}"
  style="top: {y}px; left: {x}px;"
>
  {message}
</div>

<style>
  .hovertip {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    z-index: 10;
    transform: translate(-50%, -100%);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .hovertip.visible {
    opacity: 1;
  }
</style>
