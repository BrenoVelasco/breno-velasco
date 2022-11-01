<script>
  import Score from '../../../score/Score.svelte'
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { languages } from '../../../../constants'
</script>

<SectionHeader title={'Languages'} color="#D2A228" textColor="#FFF" />

{#each languages as language}
  <Score label={language.label} score={language.score} />
{/each}
