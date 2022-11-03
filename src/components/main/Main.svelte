<script>
  import Avatar from '../avatar/Avatar.svelte'
  import Info from '../sidebar/components/info/Info.svelte'
  import Skills from '../sidebar/components/skills/Skills.svelte'
  import Languages from '../sidebar/components/languages/Languages.svelte'
  import Hobbies from '../sidebar/components/hobbies/Hobbies.svelte'
  import TopLine from '../topLine/TopLine.svelte'
  import Education from './components/education/Education.svelte'
  import ExperienceSummary from './components/experienceSummary/ExperienceSummary.svelte'
  import SummaryStatement from './components/summaryStatement/SummaryStatement.svelte'
  import Header from './components/header/Header.svelte'
  import ProfessionalExperience from './components/professionalExperience/ProfessionalExperience.svelte'
</script>

<div id="wrapper">
  <TopLine />

  <div class="flex md:hidden">
    <Avatar />
  </div>

  <section>
    <Header />
  </section>

  <section class="mobile-responsive-section block md:hidden py-3 mt-5">
    <Info />
  </section>

  <section>
    <SummaryStatement />
    <ExperienceSummary />
    <ProfessionalExperience />
  </section>

  <section class="mobile-responsive-section block md:hidden py-3">
    <Skills />
    <Languages />
    <Hobbies />
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

  section,
  .mobile-responsive-section {
    padding-left: 5%;
    padding-right: 5%;
  }

  .mobile-responsive-section {
    background: #00565b;
  }

  #education-section {
    background: #2e2e2e;
  }
</style>
