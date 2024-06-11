<script>
  import Tools from './Tools.svelte';
  import Skills from './Skills.svelte';
  import ExperienceCurio from './ExperienceCurio.svelte';
  import ExperienceSelfEmployed from './ExperienceSelfEmployed.svelte';
  import ExperienceShizuoka from './ExperienceShizuoka.svelte';
  import ExperienceUseverb from './ExperienceUseverb.svelte';
  import SkillTileCarousel from './SkillTileCarousel.svelte';

  export let toggleShowMore;
</script>

<div id="about-b" class="flex flex-col gap-xl px-sm">
  <div class="flex flex-col pt-lg gap-2xl">
    <SkillTileCarousel />
    <h3>Experience</h3>
    <div class="flex flex-col gap-xl">
      <ExperienceCurio />
      <ExperienceShizuoka />
      <ExperienceUseverb />
      <ExperienceSelfEmployed />
      <div class="flex flex-col sm:flex-row gap-xl">
        <Tools />
        <Skills />
      </div>
    </div>
    <div class="flex"></div>
    <button
      on:click={toggleShowMore}
      id="collapse-btn"
      class="tertiary w-fit"
      aria-label="Show less about Cody Roberts"
    >
      <span data-text="Show Less">Show Less</span>
      <span
        class="text-sm bg-right -rotate-90 group-hover:rotate-90 transition-transform ease-in"
        >►</span
      >
    </button>
  </div>
</div>

<style>
</style>
