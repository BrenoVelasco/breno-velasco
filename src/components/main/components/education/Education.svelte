<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { educationItems } from '../../../../constants'
</script>

<SectionHeader title={'Education'} color="#FFF" textColor="#FFF" />

{#each educationItems as educationItem}
  <div class="flex mb-10">
    <div class="basis-1/3">
      <p class="text-white">
        {educationItem.started_at} - {educationItem.ended_at ?? 'Today'}
      </p>
      <p class="text-white">{educationItem.location}</p>
    </div>

    <div class="basis-2/3">
      <h4 class="font-semibold text-white">{educationItem.name}</h4>
      {#if educationItem.course}
        <h5 class="font-medium text-white mb-3">{educationItem.course}</h5>
      {/if}
    </div>
  </div>
{/each}

<blockquote id="quote" class="text-gray-200 text-xl mb-5">
  "But I say, not in sleep but in the overwakefulness of noontide, that the wind
  speaks not more sweetly to the giant oaks than to the least of all the blades
  of grass;<br />And he alone is great who turns the voice of the wind into a
  song made sweeter by his own loving."
</blockquote>

<p class="text-white text-xl mb-10">— Khalil Gibran <i>The Prophet</i></p>

<style>
  #quote {
    line-height: 175%;
    margin-top: 4rem;
  }
</style>
