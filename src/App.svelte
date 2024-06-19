<script>
  import './styles/main.scss';
  import About from './components/About.svelte';
  import Header from './components/Header.svelte';
  import Intro from './components/Intro.svelte';
  import ObserverWrapper from './components/ObserverWrapper.svelte';
  import Projects from './components/Projects.svelte';
  import Toast from './components/Toast.svelte';
  import Nav from './components/Nav.svelte';
  import Contact from './components/Contact.svelte';
  import GridPattern from './components/GridPattern.svelte';
  import { showMore } from './stores/aboutStore';
</script>

<main class="flex flex-col items-center pb-6xl pt-6xl sm:pt-0">
  <GridPattern />
  <ObserverWrapper>
    <Header />
    <Nav />
    <Intro />
    <About />
    <Projects />
    <Toast />
    <Contact />
  </ObserverWrapper>
</main>

<style>
</style>
