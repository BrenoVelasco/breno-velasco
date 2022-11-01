<script>
  export let label, score
</script>

<div class="flex items-center mb-3">
  <div class="basis-1/2">
    <p class="text-white font-medium">{label}</p>
  </div>

  <div class="basis-1/2">
    <div class="score">
      <div class="score-fill" style="width: {score}%" />
    </div>
  </div>
</div>

<style>
  .score {
    width: 100%;
    height: 0.5em;
    background-color: #fff;
  }

  .score-fill {
    height: 0.5em;
    background-color: #deb754;
  }
</style>
