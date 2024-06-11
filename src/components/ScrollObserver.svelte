<script>
  import { onMount, onDestroy } from "svelte";

  let elements = [];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-show");
      }
    });
  });

  onMount(() => {
    elements = document.querySelectorAll(".scroll-hidden");
    elements.forEach((el) => observer.observe(el));
  });

  onDestroy(() => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  });
</script>

<div class="scroll-hidden">Content to observe</div>

<!-- Add more elements as needed -->

<style>
  

</style>
