<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { showMore } from '../stores/aboutStore';

  let scrollHeight = 0;
  let container;
  let resizeObserver;

  function adjustGridHeight() {
    if (container) {
      scrollHeight = $showMore
        ? Math.max(document.documentElement.scrollHeight, window.innerHeight)
        : container.parentElement.clientHeight;
    }
  }

  onMount(() => {
    adjustGridHeight();
    window.addEventListener('resize', adjustGridHeight);
    resizeObserver = new ResizeObserver(adjustGridHeight);
    resizeObserver.observe(document.documentElement);
  });

  afterUpdate(() => {
    adjustGridHeight();
  });

  showMore.subscribe(() => {
    adjustGridHeight();
  });

  onDestroy(() => {
    window.removeEventListener('resize', adjustGridHeight);
    if (resizeObserver) resizeObserver.disconnect();
  });
</script>

<div
  class="grid-pattern absolute top-0 left-0 w-full pointer-events-none bg-[length:36px_36px] opacity-20"
  style="height: {$showMore ? scrollHeight + 'px' : scrollHeight + 'px'}"
  bind:this={container}
></div>

<div
  class="fixed top-10 bottom-0 w-full -skew-y-[5deg] bg-gradient-black-100 opacity-[90%]"
></div>

<style>
  .grid-pattern {
    background-image: radial-gradient(
        circle at 35px 35px,
        var(--color-white-s100) 1px,
        transparent 0
      ),
      radial-gradient(
        circle at 18px 18px,
        var(--color-white-t100) 1px,
        transparent 0
      );
  }
</style>
