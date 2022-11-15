type ProfessionalExperience = {
  id: string
  name: string
  title: string
  description: string
  tasks: string[]
  tech: string[]
  isRemote: boolean
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

export const summaryStatement =
  'Software Engineer with postgraduate degree in Information Technology Management, degree in Analysis and Systems Development and 6+ years experience in programming, including US-based companies. Seeking to enrich my technical and leadership skills in a company that works with React, Ruby on Rails/Node.js and Agile.'

export const experienceSummary = [
  'React >16.8 advanced skills',
  'UI/UX design skills - designed up to a hundred wireframes and prototypes using Figma',
  'AWS and Ruby on Rails knowledge and familiarity',
  'Code testing with Jest, Cypress and React Testing Library.',
]

export const professionalExperience: ProfessionalExperience[] = [
  {
    id: 'sparck',
    name: 'SPARCK CO • HR COMPANY',
    title: 'Senior Front-end Engineer',
    description:
      'Sparck is a personalized employee recognition and engagement platform that helps companies create a thriving workplace.',
    tasks: [
      'Managed a 6-member tech team and, as a Front-end Engineer, was responsible for every technical decision of a platform with dozens of clients and tens of thousands active users',
      'Commenced as part-time working with Smarty PHP and Bootstrap 4. Decided to refactor the entire application using React and Material UI, as the previous implementation was not supporting our needs, and continued working full-time',
    ],
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
    isRemote: true,
    started_at: 'Apr/2020',
    ended_at: null,
    location: 'Sacramento - CA',
  },
  {
    id: 'pineapple',
    name: 'Pineapple Workshop',
    title: 'Front-end Engineer',
    description: 'Pineapple Workshop is a startup based in Denver.',
    tasks: [
      'Freelancer, responsible for the refactor of one legacy project and the creation of an online audio/video editor platform',
      'Interacted with employees from multiple countries like Costa Rica, Egypt and US',
      'Gathered software requirements from three different clients',
    ],
    tech: ['React', 'MUI', 'Websockets', 'Go'],
    isRemote: true,
    started_at: 'Jun/2020',
    ended_at: 'Sep/2020',
    location: 'Denver - CO',
  },
  {
    id: 'caregiverAsia',
    name: 'CaregiverAsia',
    title: 'Front-end Analyst',
    description:
      'CaregiverAsia is an online aggregator of health and caregiving services.',
    tasks: [
      'Worked as a Front-end developer in the migration from Bootstrap 3 to Bootstrap 4 in their main system, in production running for years, in Ruby on Rails',
      'Interacted with employees from Singapore, Australia and other countries to make the best decisions regarding the design and operation of pages and system modules',
      'Lead more than ten design improvements and alternatives that were implemented on the fly',
    ],
    tech: ['Bootstrap', 'Sass', 'Ruby on Rails'],
    isRemote: true,
    started_at: 'Apr/2019',
    ended_at: 'Nov/2019',
    location: 'Singapure - Singapure',
  },
  {
    id: 'rpc',
    name: 'RPC • GLOBO TV CHANNEL',
    title: 'Systems Analyst',
    description:
      'RPC is the Paraná branch of the biggest TV channel in Brazil, called Globo.',
    tasks: [
      'Engineered the front-end of a transactional system with more than twenty modules',
      'Developed (frontend and backend) management systems for the Você na RPC app (used by more than 500k users), with which the CRC team communicates with viewers and the content team defines the feed and news to be shown in the app, as well as sending pushes - back-end, front-end and integrations',
      'Directed flash project of listing photos received during the soap opera Amor de Mãe (pagination with more than 10k submitted pictures) - wireframes, front-end and integrations',
      'Maintained up to ten legacy systems, always in contact with related marketing, sales and CRC teams',
      'Participated in requirements elaboration meetings and had daily contact with teams from different areas of the company',
      'Prepared presentations for executives and directors on various topics: new technologies, tutorials and discussions on rules and business flows',
    ],
    tech: [
      'React',
      'Node.js',
      'Material Design',
      'AWS (EC2, ECS, S3, Lambda etc)',
      'MySQL',
      'Business Analytics',
    ],
    isRemote: false,
    started_at: 'Jan/2019',
    ended_at: 'Aug/2020',
    location: 'Curitiba - Brazil',
  },
  {
    id: 'assinaAi',
    name: 'ASSINA.AI WEBSITE',
    title: 'Junior Front-end Developer',
    description:
      'assina.ai was a startup with an on-demand subscription service solution.',
    tasks: [
      'Conceptualized screens and front-end engineering using React/Redux and Bootstrap 4 from wireframes designed by an UI designer',
      'Implemented migrations, models and logic in the API using Node.JS and Express',
      'Became a partner of the project creator and backend developer',
    ],
    tech: ['React', 'Node.js', 'Bootstrap 4'],
    isRemote: false,
    started_at: 'Jun/2018',
    ended_at: 'Dec/2018',
    location: 'São Paulo - Brazil',
  },
  {
    id: 'ottech',
    name: 'OTTECH - SERVICES AND TECHNOLOGY',
    title: 'Intern',
    description:
      'Ottech offers consulting, implementation and development for Sage ERP X3 solutions.',
    tasks: [
      'Engineered tables, screens, objects and system actions in Sage ERP X3',
      'Prepared more than ten modules and routines used by both consultants and customers and assisted them through calls and meetings',
    ],
    tech: ['Sage X3 ERP', 'Javascript'],
    isRemote: false,
    started_at: 'Jun/2017',
    ended_at: 'Dec/2017',
    location: 'São Paulo - Brazil',
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
    course: 'Analysis and Development of Systems',
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
    linkLabel: 'brenovelasco97@gmail.com',
    linkHref: 'mailto:brenovelasco97@gmail.com',
  },
  {
    name: 'Phone Number',
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
