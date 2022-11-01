<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { personalInfo } from '../../../../constants'
</script>

<SectionHeader
  title={'Personal Info'}
  color="#D2A228"
  textColor="#FFF"
  fromSidebar
/>

{#each personalInfo as infoItem}
  <p class="text-white font-semibold">
    {infoItem.name}
  </p>

  <p class="text-gray-200 mb-3 hover:underline">
    <a href={infoItem.linkHref} target="_blank" rel="noopener noreferrer"
      >{infoItem.linkLabel}</a
    >
  </p>
{/each}
