<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { experienceSummary } from '../../../../constants'
</script>

<SectionHeader title={'Experience Summary'} color="#23ABB3" />

<ul>
  {#each experienceSummary as experience}
    <li class="text-gray-800">{experience}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: square;
  }
</style>
