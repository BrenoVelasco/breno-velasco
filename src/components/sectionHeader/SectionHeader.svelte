<script>
  export let title,
    color,
    textColor = '#333',
    fromSidebar = false
</script>

{#if fromSidebar}
  <h4
    class="section-header text-gray-800"
    style="border-left: 0.5em solid {color}; color: {textColor}"
  >
    {title}
  </h4>
{:else}
  <h3
    class="section-header text-gray-800"
    style="border-left: 0.5em solid {color}; color: {textColor}"
  >
    {title}
  </h3>
{/if}

<div
  class="section-header-line"
  style="background-color: {fromSidebar ? '#FFF' : '#C2C2C2'}"
>
  <div class="section-header-line-colored" style="background-color: {color}" />
</div>

<style>
  .section-header {
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 0.75em;
    margin-top: 1.5em;
  }

  .section-header-line {
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;
    height: 0.15rem;
  }

  .section-header-line-colored {
    margin-top: 1em;
    width: 1.75em;
    height: 0.15rem;
  }
</style>
