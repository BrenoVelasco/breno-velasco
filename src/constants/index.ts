type ProfessionalExperience = {
  id: string
  name: string
  title: string
  description: string
  tech: string[]
  started_at: string
  ended_at?: string | null
  location: string
}

type Education = {
  id: string
  name: string
  course?: string
  started_at: string
  ended_at?: string | null
  location: string
}

export const experienceSummary = [
  '6+ years of experience in analysis and development of systems',
  'Front-end expertise working with different types of systems. Always looking for performance and scalability using React with Hooks',
  'Experiences with API integrations (REST, GraphQL)',
  'UI/UX design skills with wireframes and Figma',
  'Knowledge in Amazon Web Services (AWS): EC2, ECS, S3, Lambda, Route53 etc',
  'Some experience with Ruby on Rails: MVC, migrations, ORM and database queries',
  'Code testing with Jest and Cypress',
]

export const professionalExperience: ProfessionalExperience[] = [
  {
    id: 'sparck',
    name: 'SPARCK CO • HR COMPANY',
    title: 'Senior Front-end Engineer',
    description:
      'Commenced as part-time working with Smarty PHP and Bootstrap 4. Decided to refactor entire application using React and Material UI and continued working full-time. The team grew and I was responsible (alongside the CTO and the Senior Back-end developer) for leading a team of four other developers.',
    tech: [
      'React',
      'Typescript',
      'MUI',
      'Jest',
      'Cypress',
      'Ruby on Rails',
      'Docker',
      'AWS',
      'Figma',
    ],
    started_at: 'Apr/2020',
    ended_at: null,
    location: 'Sacramento - CA',
  },
  {
    id: 'rpc',
    name: 'RPC • GLOBO TV CHANNEL',
    title: 'Systems Analyst',
    description:
      'Worked on defining requirements, development and maintenance of several systems in the Curitiba branch of the biggest Brazilian TV company.',
    tech: [
      'React',
      'Node.js',
      'Material Design',
      'AWS (EC2, ECS, S3, Lambda etc)',
      'MySQL',
      'Business Analytics',
    ],
    started_at: 'Jan/2019',
    ended_at: 'Aug/2020',
    location: 'Curitiba - PR',
  },
  {
    id: 'assina-ai',
    name: 'ASSINA.AI WEBSITE',
    title: 'Frontend Developer',
    description:
      'Developed the frontend of assina.ai - a startup company with a multi-subscriptions service. I was the responsible for the frontend working alongside the creator of the project, who was the responsible for the backend.',
    tech: ['React', 'Node.js', 'Bootstrap 4'],
    started_at: 'Jun/2018',
    ended_at: 'Dec/2018',
    location: 'Jundiaí - SP',
  },
  {
    id: 'ottech',
    name: 'OTTECH - SERVICES AND TECHNOLOGY',
    title: 'Intern',
    description:
      'Created modules, tables and system objects from the Sage ERP X3 platform and gave support and training to consultants.',
    tech: ['Sage X3 ERP', 'Javascript'],
    started_at: 'Jun/2017',
    ended_at: 'Dec/2017',
    location: 'Jundiaí - SP',
  },
]

export const educationItems: Education[] = [
  {
    id: 'uninter',
    name: 'POST-GRADUATION - UNINTER',
    course: 'Information Technology Management',
    started_at: 'Jan/2020',
    ended_at: 'Dec/2020',
    location: 'Curitiba - PR',
  },
  {
    id: 'fatec-jundiai',
    name: 'GRADUATION - FATEC JUNDIAÍ',
    course: 'Information Technology Management',
    started_at: '2016',
    ended_at: '2018',
    location: 'Jundiaí - SP',
  },
  {
    id: 'trevo',
    name: 'HIGH SCHOOL - TREVO SCHOOL',
    started_at: '2011',
    ended_at: '2013',
    location: 'Itupeva - SP',
  },
]

export const personalInfo = [
  {
    name: 'Email',
    linkLabel: '+55 41 999-674-105',
    linkHref: 'tel:+55 41 999-674-105',
  },
  {
    name: 'Github',
    linkLabel: 'github.com/BrenoVelasco',
    linkHref: 'https://www.github.com/BrenoVelasco',
  },
  {
    name: 'LinkedIn',
    linkLabel: 'in/breno-velasco-a653ab127',
    linkHref: 'https://www.linkedin.com/in/breno-velasco-a653ab127/',
  },
  {
    name: 'Dribbble',
    linkLabel: 'dribbble.com/brenovelasco97',
    linkHref: 'https://www.dribbble.com/brenovelasco97',
  },
]

export const skills = [
  {
    label: 'React',
    score: 95,
  },
  {
    label: 'Typescript',
    score: 85,
  },
  {
    label: 'HTML/CSS',
    score: 80,
  },
  {
    label: 'UI/UX',
    score: 80,
  },
  {
    label: 'Git/Github',
    score: 70,
  },
  {
    label: 'React Native',
    score: 60,
  },
  {
    label: 'Node.js',
    score: 45,
  },
  {
    label: 'Ruby on Rails',
    score: 35,
  },
  {
    label: 'SQL',
    score: 30,
  },
  {
    label: 'AWS',
    score: 20,
  },
  {
    label: 'Docker',
    score: 20,
  },
]

export const languages = [
  {
    label: 'Portuguese',
    score: 100,
  },
  {
    label: 'English (C2)',
    score: 100,
  },
  {
    label: 'Spanish',
    score: 50,
  },
  {
    label: 'French',
    score: 15,
  },
  {
    label: 'German',
    score: 10,
  },
]

export const hobbies = [
  'Classical Guitar',
  'Violin',
  'Piano',
  'Muay Thai',
  'Videogames',
  'Traveling',
]
