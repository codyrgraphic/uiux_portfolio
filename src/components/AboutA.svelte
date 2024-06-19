<script>
  import { showMore } from '../stores/aboutStore';
</script>

<div id="about-a" class="flex flex-col gap-xl w-full">
  <div class="flex flex-col gap-3xs">
    <h2 class="scroll-hidden" id="headline">
      {$showMore ? 'Cody Roberts' : "Hi, I'm Cody"}
    </h2>
    <p class="scroll-hidden text-sm text-b">
      A UI/UX designer with a passion for problem-solving through design.
    </p>
  </div>
  <div class="flex flex-col gap-sm">
    <p class="scroll-hidden">
      I am a visual specialist with an obsession for creative problem-solving. I
      have professional experience as a Photographer, a Graphic Designer and a
      3D artist.
    </p>
    <p class="scroll-hidden">
      I have since discovered the world of UI UX design, and now have 3+ years
      of experience in delivering comprehensive design solutions from concept to
      production for web & mobile.
    </p>
    <p class="scroll-hidden">
      Specialising in visual design, I’m passionate about crafting engaging,
      intuitive digital experiences that connect with users.
    </p>
  </div>
  {#if !$showMore}
    <button
      id="learn-more-btn"
      class="tertiary w-fit group animate-pulse"
      aria-label="Learn more about Cody Roberts"
      on:click={() => showMore.update((value) => !value)}
    >
      <span data-text="Learn More">Learn More</span>
      <span class="text-sm bg-right rotate-0 transition-transform ease-in"
        >►</span
      >
    </button>
  {/if}
</div>

<style>
</style>
