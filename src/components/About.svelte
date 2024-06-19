<script>
  import AboutA from './AboutA.svelte';
  import AboutB from './AboutB.svelte';
  import { showMore } from '../stores/aboutStore';
</script>

<section id="about" class="section">
  <div class="flex w-full flex-col gap-xl sm:flex-row">
    <div class="scroll-hidden flex size-fit relative">
      <div
        class="flex items-start justify-start animate-spin-slow size-5 absolute bottom-[-1px] right-[-1px] rounded-full sm:size-md ring-[8px] sm:ring-4 ring-[--color-grey-s300] bg-[--color-green-s200]"
      >
        <div
          class="absolute inset-x-0 top-0 animate-pulse-strong m-[10%] size-[70%] rounded-full bg-[--color-green-s100] bg-blend-color blur-8"
        ></div>
        <div
          class="absolute inset-x-0 top-0 animate-pulse-strong m-[10%] size-[40%] rounded-full bg-[--color-white-s200] bg-blend-luminosity blur-1"
        ></div>
      </div>
      <div id="cody-roberts-ui-ux-designer-photo"></div>
    </div>
    <div id="about-content" class="w-[100%] flex flex-col gap-lg">
      <AboutA />
      {#if $showMore}
        <AboutB />
      {/if}
    </div>
  </div>
</section>

<style>
</style>
