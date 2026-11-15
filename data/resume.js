const resume = {
  name: 'Matheus Silva',
  title: 'Staff Software Engineer',
  location: 'Brazil · Remote',
  summary:
    'Software engineer with 15+ years building backend and frontend systems: distributed architectures, high-performance serverless platforms on AWS, and product work across logistics, IoT, fintech and blockchain marketplaces. I pair technical depth with a strong sense of what users need, and ship products that move business metrics.',
  skills: [
    'TypeScript',
    'Node.js',
    'Go',
    'Elixir / Phoenix',
    'React',
    'Next.js',
    'AWS (Lambda, SNS, SQS, Kinesis, IoT Core, CDK)',
    'Serverless',
    'GraphQL',
    'PostgreSQL / TimescaleDB',
    'OpenTelemetry',
    'CI/CD',
    'Blockchain',
    'Technical leadership',
  ],
  experience: [
    {
      role: 'Tech Lead — Labor Management System',
      company: 'Stord (via X-Team)',
      period: 'Mar 2026 – Present',
      intro:
        'Lead technical design and delivery for the LMS, connecting warehouse activity, employee time, productivity and billing through Elixir/Phoenix services and React/TypeScript interfaces.',
      points: [
        'Event-driven labor tracking turning warehouse and Packstation activity into employee task timelines, quantities, and productive, idle and gap time.',
        'Task-detail views, observation reports, performance summaries and CSV exports giving operations visibility into actual vs. earned time.',
        'Hardened Workday integration for employee sync and clock-punch processing: identity reconciliation, cross-facility activity, duplicate events, failure recovery.',
        'Special-project and kitting workflows: assignments, shift-level tracking, value-added services and billing integration with duplicate-billing safeguards.',
        'Drove the productivity-rate configuration redesign across backend and frontend via staged migrations and feature-flagged releases.',
      ],
    },
    {
      role: 'Staff Engineer — Warehouse Management System',
      company: 'Stord (via X-Team)',
      period: 'Mar 2025 – Mar 2026',
      intro:
        'Warehouse execution and inventory workflows across Elixir/Phoenix services and React/TypeScript apps.',
      points: [
        'Redesigned cycle counting around multi-location count projects: task assignment, scanner counting and recounting, exception review, progress tracking.',
        'Reworked replenishment planning using SKU velocity, days on hand and forward-pick availability.',
        'Scanner-driven decanting with case quantities, multiple units of measure and license plate tracking.',
        'Improved Packstation packing/unpacking, label and packing-slip generation, and print management integration.',
      ],
    },
    {
      role: 'Staff Engineer',
      company: 'Ikon Technologies (via X-Team)',
      period: 'Mar 2024 – Mar 2025',
      intro: 'IoT vehicle tracking and inventory management for automotive dealers.',
      points: [
        'Real-time visibility into vehicle locations, statuses and key availability, with inventory UIs in Next.js, React and TypeScript.',
        'High-frequency telemetry pipeline on AWS IoT Core, Kinesis and Lambda; integrated GPS devices and third-party key-management systems.',
        'Optimized telemetry storage in TimescaleDB and built GraphQL APIs for frontend apps.',
        'Automated infrastructure and environments with AWS CDK.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Magic Eden',
      period: 'Jun 2022 – May 2024',
      points: [
        'Built the Polygon marketplace for NFT trading.',
        'Backend architecture for blockchain integrations with Node.js, Python and AWS.',
        'Improved UX and performance of the Solana NFT marketplace.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'iFood',
      period: 'Mar 2021 – Jun 2022',
      points: [
        'Main website checkout and payment flows.',
        'Scaled a codebase shared by many teams: tooling, DX, security updates and continuous deployment.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'JetBridge AI (Akido Labs)',
      period: 'Jan 2020 – Feb 2021',
      points: [
        'Architected AWS infrastructure on the Well-Architected Framework; Go microservices for infrastructure management.',
        'Automated AWS provisioning across environments with infrastructure-as-code tooling in Go.',
        'CI/CD pipelines for Go services with automated testing and static analysis.',
        'Observability tooling with OpenTelemetry, custom metric exporters and distributed tracing.',
      ],
    },
    {
      role: 'Tech Lead',
      company: 'RealAdvisor',
      period: 'Feb 2018 – Dec 2019',
      points: [
        'Led the team building a scalable real estate marketplace, expanding to the USA, Germany, Italy and France.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Daitan Group',
      period: '2016 – Jan 2018',
      points: [
        'Anti-money laundering and self-service systems for British Telecom and Guardian Analytics.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Gr Studio',
      period: 'Jan 2009 – Jan 2016',
      points: ['SaaS and custom software for small businesses, optimizing their processes.'],
    },
  ],
  talks: [{ title: 'Webpack and the state of bundlers', event: 'React Conf BR' }],
  education: [
    {
      school: 'Universidade Estadual de Campinas (Unicamp)',
      degree: 'B.Sc. Information Systems',
      year: '2013 – 2017',
    },
  ],
}

export default resume
