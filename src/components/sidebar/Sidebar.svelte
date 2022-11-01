<script>
  import Avatar from './components/avatar/Avatar.svelte'
  import Info from './components/info/Info.svelte'
  import Hobbies from './components/hobbies/Hobbies.svelte'
  import Languages from './components/languages/Languages.svelte'
  import Skills from './components/skills/Skills.svelte'
</script>

<aside>
  <Avatar />
  <div class="pr-8">
    <Info />
    <Skills />
    <Languages />
    <Hobbies />
  </div>
</aside>

<style>
  aside {
    background-color: #00565b;
    max-width: 22.5%;
  }
</style>
