<script>
  import Education from './components/education/Education.svelte'
  import ExperienceSummary from './components/experienceSummary/ExperienceSummary.svelte'
  import Goals from './components/goals/Goals.svelte'
  import Header from './components/header/Header.svelte'
  import ProfessionalExperience from './components/professionalExperience/ProfessionalExperience.svelte'
  import TopLine from '../topLine/TopLine.svelte'
</script>

<div id="wrapper">
  <TopLine />

  <section>
    <Header />
    <Goals />
    <ExperienceSummary />
    <ProfessionalExperience />
  </section>

  <section id="education-section" class="py-3">
    <Education />
  </section>
</div>

<style>
  #wrapper {
    width: 100%;
    background-color: #eef7f5;
  }

  section {
    padding-left: 5%;
    padding-right: 5%;
  }

  #education-section {
    background: #2e2e2e;
  }
</style>
