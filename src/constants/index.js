import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  college,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  outlier,
  microverse,
  Arthur,
  McKenzie,
  Raza,
  David,
  Appala,
  Mallie,
  tensorflow,
  mongodb,
  next,
  internet,
  java,
  python,
  room,
  job,
  aiSubtitles,
  expense,
  card,
  leaf,
  Jed
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'skill',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'CyberSecuirty Engineer',
    icon: internet,
  },
  {
    title: 'AI/ML Engineer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java
  }
];

const experiences = [
  {
    title: 'Software Developer Engineer [intern]',
    company_name: 'Springworks | Remote',
    icon: leaf,
    iconBg: '#333333',
    date: 'Jul 2023 - Apr 2024',
  },
  {
    title: 'Frontend  Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2024 - Jan 2025',
  },
  {
    title: 'Full Stack Dev',
    company_name: 'Outlier ai',
    icon: outlier,
    iconBg: '#333333',
    date: 'Feb 2025 - Present',
  }
];

const educations = [
  {
    title: 'RGM College of Engineering and Technology',
    company_name: "Degree Computer Seience",
    icon: college,
    iconBg: '#333333',
    date: 'Feb 2020 - Jun 2024',
  }
]

const projects = [
  {
    id: 'project-1',
    name: 'Expense Tracker',
    description: 'A modern, responsive web application for tracking personal expenses with interactive visualizations and comprehensive reporting features.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: expense,
    demo: 'https://expense-tracker-kohl-one-59.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Nomad Stay',
    description:
      'Website showing through the comprehensive listings of property, from cozy apartments to luxurious estates.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: room,
    demo: 'https://roombnb.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Job Board',
    description: 'This project simulates a real-world job listing portal built with the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, and post job opportunities. Job seekers can browse, filter, and view job details.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: job,
    demo: 'https://job-board-eta-nine.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'AI subtitle Generator',
    description: `A smart subtitle generator built with React and AssemblyAI. Users can upload audio files, and the app returns transcribed subtitles, which can be copied or saved.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: aiSubtitles,
    demo: 'https://ai-subtitle-generator-mvpa.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Credit Card checker',
    description:
      'Credit card checker uses card number and checks through the data for authenticity of the card and indicate through color.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: card,
    demo: 'https://crediter.netlify.app/',
  },
];

const review = [
  {
    username: "Arthur J",
    role: "CEO Co-Founder",
    img: Arthur,
    content: "Williams has proven to be a great full-stack developer. Thanks to his excellent communication, we were able to quickly and efficiently get him involved in the project and move forward with great speed and productivity. During this short period of cooperation, he was able to solve all the tasks that we had problems with. He is good at both front-end and back-end. I have only positive impressions about this developer. I can definitely recommend working with Williams. I will gladly work with him in the future if I have the opportunity!"
  },
  {
    username: "David",
    role: "Project Manager",
    img: David,
    content: "Williams really deserves to be highly praised as a full-stack developer. His professionalism and in-depth knowledge of web development were key in solving numerous technical challenges we faced. Thanks to his analytical skills and ability to quickly find solutions, he was able to effectively resolve complex bugs and refactor our code, significantly improving its readability and efficiency. His contribution to our project cannot be overestimated. I recommend Williams as a highly skilled professional who can make a significant contribution to any software development project."
  },
  {
    username: "McKenzie",
    role: "CEO Co-Founder",
    img: McKenzie,
    content: "Williams is an exceptional backend developer who demonstrates a deep understanding of system architecture and database management. He consistently delivers robust, efficient, and scalable solutions that exceed expectations. His ability to tackle complex problems with innovative approaches is truly commendable. I highly recommend Williams for any backend development needs."
  },
  {
    username: "Raza K",
    role: "CTO Co-Founter Team",
    img: Raza,
    content: "Williams is a true master of his craft as a Full Stack Mobile Developer with a focus on React Native. He demonstrates not only a high level of technical knowledge, but also the ability to adapt to different tasks, working effectively with both front-end and back-end. Many thanks to him for his great work!"
  },
  {
    username: "Appala M",
    role: "Blockchain Development Team CTO",
    img: Appala,
    content: "Good Work!!! Williams is an exceptional blockchain developer with a deep understanding of decentralized technologies and smart contract development. His expertise in building secure, efficient, and scalable blockchain solutions has been instrumental in the success of our project. He consistently deliver high-quality work on time, demonstrate excellent problem-solving skills, and communicate effectively. I highly recommend him for any blockchain-related projects!"
  },
  {
    username: "Jed B",
    role: "Backend Developer",
    img: Jed,
    content: "Williams is a great front-end developer with a keen eye for design and user experience. His ability to transform complex requirements into visually stunning and responsive interfaces is truly impressive. He is detail-oriented, proactive, and consistently delivers high-quality work on deadline. I have been very impressed with him for a long time. I highly recommend him for any front-end development project!"
  },
  {
    username: "McKenzie",
    role: "CEO Co-Founder",
    img: McKenzie,
    content: "Great Job! Williams is an exceptional backend developer who demonstrates a deep understanding of system architecture and database management. He consistently delivers robust, efficient, and scalable solutions that exceed expectations. His ability to tackle complex problems with innovative approaches is truly commendable. I highly recommend Williams for any backend development needs."
  },
  {
    username: "Mallie",
    role: "Co-Founder",
    img: Mallie,
    content: "I wanted to express my appreciation for the excellent work you did on the Full Stack project. Your attention to detail and willingness to accommodate multiple revisions made a huge difference in the final outcome. You handled every request with professionalism and delivered a high-quality project that exceeded expectations. Your commitment to improving the work at every step really stood out, and I'm very impressed with both your skill and your collaborative approach. Thank you for your dedication and hard work!"
  }
]

export { services, technologies, experiences, projects, educations, review };
