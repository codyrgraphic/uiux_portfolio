<script>
  import Toast from './Toast.svelte';
  import { showToast } from '../stores/toastStore';
</script>

<main>
  <section id="projects" class="section">
    <div class="flex flex-col gap-3xs">
      <h2 class="scroll-hidden">Projects</h2>
      <p class="scroll-hidden text-sm text-b">See what I've built.</p>
    </div>
    <div class="flex flex-col md:flex-row md:gap-lg gap-xl sm:gap-2xl">
      <div class="flex flex-col gap-md">
        <h4 class="scroll-hidden">UseVerb</h4>
        <div
          class="flex flex-col scroll-hidden rounded-md overflow-hidden"
          role="button"
          tabindex="0"
          on:click={() =>
            showToast(
              'UseVerb, a recruitment platform. Full Project coming soon.',
              3000
            )}
          on:keydown={() =>
            showToast(
              'UseVerb, a recruitment platform. Full Project coming soon.',
              3000
            )}
        >
          <div id="project-2"></div>
        </div>
      </div>
      <div class="flex flex-col gap-md">
        <h4 class="scroll-hidden">
          Narai <span class="text-b text-sm">ならい</span>
        </h4>
        <div
          class="scroll-hidden rounded-md overflow-hidden"
          role="button"
          tabindex="0"
          on:click={() =>
            showToast(
              'Narai, an app that uses spaced repetition to supercharge learning Japanese. Designed and built by myself. Using both React Native and Flutter frameworks. Full Project coming soon.',
              3000
            )}
          on:keydown={() =>
            showToast(
              'Narai, an app that uses spaced repetition to supercharge learning Japanese. Designed and built by myself. Using both React Native and Flutter frameworks. Full Project coming soon.',
              5000
            )}
        >
          <div id="project-1"></div>
        </div>
      </div>
    </div>
  </section>
</main>

<style></style>
