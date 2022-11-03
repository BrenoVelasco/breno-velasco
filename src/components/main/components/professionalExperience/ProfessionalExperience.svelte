<script>
  import SectionHeader from '../../../sectionHeader/SectionHeader.svelte'
  import { professionalExperience } from '../../../../constants'
</script>

<SectionHeader title={'Professional Experience'} color="#197A80" />

{#each professionalExperience as experience}
  <div class="md:flex mb-8 md:mb-10">
    <div class="hidden md:block basis-1/3">
      <p class="font-medium text-gray-800">
        {experience.started_at} - {experience.ended_at ?? 'Today'}
      </p>
      <p class="font-medium text-gray-800">{experience.location}</p>
    </div>

    <div class="md:basis-2/3">
      <h4 class="font-semibold uppercase text-gray-800">{experience.name}</h4>
      <h5 class="font-medium text-gray-800 mb-3 md:md-5">{experience.title}</h5>
      <p class="text-gray-800 text-justify mb-3">{experience.description}</p>

      <ul>
        {#each experience.tasks as task}
          <li class="mb-1 text-justify">{task}</li>
        {/each}
      </ul>

      <p class="font-medium text-gray-800 mt-3">
        {experience.tech.join(', ')}
      </p>
    </div>
  </div>
{/each}
