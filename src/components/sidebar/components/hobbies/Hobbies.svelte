<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { hobbies } from '../../../../constants'
</script>

<SectionHeader title={'Hobbies'} color="#D2A228" textColor="#FFF" fromSidebar />

{#each hobbies as hobby}
  <p class="text-white font-medium mb-3">{hobby}</p>
{/each}
