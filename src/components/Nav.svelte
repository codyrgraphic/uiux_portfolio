<script>
  import { showToast } from '../stores/toastStore';
  import { isMenuOpen, toggleMenu } from '../stores/menuStore';
  import { onDestroy } from 'svelte';

  function showResumeToast() {
    showToast('Coming soon, download or preview my resumé', 'persistent');
    toggleMenu();
  }

  let isVisible = false;

  const unsubscribe = isMenuOpen.subscribe((value) => {
    isVisible = value;
  });

  onDestroy(() => {
    unsubscribe();
  });

  function handleClick(_event) {
    toggleMenu();
  }
</script>

{#if isVisible}
  <nav
    class="dropdown-menu fixed right-0 sm:w-auto sm:left-auto bg-d rounded-b-lg backdrop-blur-4 z-30 w-full left-0 top-6xl sm:pb-lg"
    aria-label="Main navigation"
  >
    <ul class="list-none m-0 p-0">
      <li class="flex w-full sm:w-auto">
        <a
          class="px-3xl py-md w-full hover:text-b text-center sm:text-start"
          href="#projects"
          on:click={handleClick}>Projects</a
        >
      </li>
      <li class="flex w-full sm:w-auto h-auto">
        <a
          class="px-3xl py-md w-full hover:text-b text-center sm:text-start"
          href="#about"
          on:click={handleClick}>About</a
        >
      </li>
      <li class="flex w-full sm:w-auto h-auto">
        <a
          class="px-3xl py-md w-full hover:text-b text-center sm:text-start"
          href="#contact"
          on:click={handleClick}>Contact</a
        >
      </li>
      <li class="flex w-full sm:w-auto h-auto">
        <a
          class="px-3xl py-md w-full hover:text-b text-center sm:text-start"
          href="none"
          on:click|preventDefault={showResumeToast}
        >
          Résumé
        </a>
      </li>
    </ul>
  </nav>
{/if}

<style>
</style>
