<script>
  import Score from '../../../score/Score.svelte'
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { skills } from '../../../../constants'
</script>

<SectionHeader title={'Skills'} color="#D2A228" textColor="#FFF" fromSidebar />

{#each skills as skill}
  <Score label={skill.label} score={skill.score} />
{/each}
