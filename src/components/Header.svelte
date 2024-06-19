<script>
  import { toggleMenu, isMenuOpen } from '../stores/menuStore';
  import { onDestroy } from 'svelte';

  let ariaExpanded = false;

  const unsubscribe = isMenuOpen.subscribe((value) => {
    ariaExpanded = value;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div
  class="z-20 fixed top-0 h-[2px] w-full bg-a shadow-grey-s300 shadow-[0_0px_34px_48px]"
></div>
<header
  class="flex justify-between items-center px-xl h-6xl fixed top-0 left-0 right-0 backdrop-blur-4 bg-d z-40"
>
  <a href="#intro">
    <h1 class="text-a text-3xl">codyr.co</h1>
  </a>
  <button
    class="focus:outline-none bg-none border-none cursor-pointer"
    aria-haspopup="true"
    aria-expanded="false"
    on:click={toggleMenu}
  >
    <span
      class="block w-2xl h-2xl bg-[url('../../public/assets/icons/bars-alt.svg')] bg-no-repeat bg-center bg-contain hover:scale-105 transition-all duration-200"
    ></span>
  </button>
</header>

<style>
</style>
