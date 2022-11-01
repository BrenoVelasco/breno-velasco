<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { professionalExperience } from '../../../../constants'
</script>

<SectionHeader title={'Professional Experience'} color="#197A80" />

{#each professionalExperience as experience}
  <div class="flex mb-10">
    <div class="basis-1/3">
      <p class="font-medium text-gray-800">
        {experience.started_at} - {experience.ended_at ?? 'Today'}
      </p>
      <p class="font-medium text-gray-800">{experience.location}</p>
    </div>

    <div class="basis-2/3">
      <h4 class="font-semibold text-gray-800">{experience.name}</h4>
      <h5 class="font-medium text-gray-800 mb-5">{experience.title}</h5>
      <p class="text-gray-800 text-justify">{experience.description}</p>

      <p class="font-medium text-gray-800">
        {experience.tech.join(', ')}
      </p>
    </div>
  </div>
{/each}
