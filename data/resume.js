const resume = {
  name: 'Matheus Silva',
  title: 'Software Engineer',
  location: 'Brazil · Remote',
  summary:
    'Open-source oriented software engineer focused on frontend platforms, build tooling and developer experience. I help products scale across many teams: shared tooling, CI/CD, performance and security.',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Webpack / bundlers',
    'React Native',
    'Solidity / web3',
    'Docker',
    'CI/CD',
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'iFood',
      points: [
        'Main website, checkout and payment flows.',
        'Scaled a codebase shared by many teams: tooling, DX, security updates.',
        'Owned end-to-end deploys from staging to production and improved continuous deployment.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Daitan',
      points: [
        'Frontend development as primary focus.',
        'DevOps work: Docker deploys and Jenkins pipelines.',
        'Debugged Java services (Spring Boot, Apache Camel).',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Daitan',
      points: ['First hands-on exposure to the production stack used across client projects.'],
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      points: [
        'Built sites and apps for multiple clients with PHP, MySQL, Postgres, MongoDB and jQuery.',
        'Owned estimates, scheduling and client communication.',
      ],
    },
  ],
  talks: [{ title: 'Webpack and the state of bundlers', event: 'React Conf BR' }],
  education: [
    { school: 'State University of Campinas', degree: 'B.Sc. Information Systems', year: '2013' },
  ],
}

export default resume
