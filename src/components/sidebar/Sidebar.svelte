<script>
  import Avatar from '../avatar/Avatar.svelte'
  import Info from './components/info/Info.svelte'
  import Hobbies from './components/hobbies/Hobbies.svelte'
  import Languages from './components/languages/Languages.svelte'
  import Skills from './components/skills/Skills.svelte'
</script>

<aside class="hidden md:block">
  <Avatar />
  <div class="pr-5">
    <Info />
    <Skills />
    <Languages />
    <Hobbies />
  </div>
</aside>

<style>
  @media only screen and (max-width: 640px) {
    aside {
      border-left: 0;
      width: 100%;
    }
  }

  aside {
    border-left: 1em solid #00565b;
    background-color: #00565b;
    max-width: 35%;
  }

  @media only screen and (min-width: 1024px) {
    aside {
      border-left: 1em solid #00565b;
      width: 22.5% !important;
    }
  }
</style>
