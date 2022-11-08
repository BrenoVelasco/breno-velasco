<script>
  import { inject } from '@vercel/analytics'

  import Main from './components/main/Main.svelte'
  import Sidebar from './components/sidebar/Sidebar.svelte'

  inject()
</script>

<main class="flex justify-center">
  <div id="content" class="flex">
    <Sidebar />

    <Main />
  </div>
</main>

<style>
  main {
    background: #333;
    background: linear-gradient(
      270deg,
      rgba(238, 247, 245, 1) 50%,
      rgba(0, 86, 91, 1) 50%
    );
  }

  #content {
    max-width: 1440px;
    width: 100%;
  }
</style>
