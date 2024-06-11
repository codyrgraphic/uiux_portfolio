<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";

  let observer;
  let elements = [];
  let wrapper; // Declare the wrapper variable

  const observeElements = () => {
    elements = wrapper.querySelectorAll(".scroll-hidden");
    elements.forEach((el) => observer.observe(el));
  };

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-show");
        }
      });
    });

    observeElements();
  });

  afterUpdate(() => {
    // Re-observe elements if the DOM changes
    observer.disconnect(); // Disconnect to avoid duplicate observations
    observeElements();
  });

  onDestroy(() => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  });
</script>

<div bind:this={wrapper}>
  <slot></slot>
</div>

<style>
</style>
