import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    python,
    django,
    jobit,
    tripguide,
    threejs,
    aptech,
    study,
    translator,
    WeatherApp,
    middlesex,
    fnhc,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
    title: "Advanced Diploma in Software Engineering",
company_name: "Aptech Computer Education",
icon: aptech,
iconBg: "#E6DEDD",
date: "Feb 2022 - July 2024",
points: [
  "Studying advanced concepts in software engineering, web development, and database systems.",
  "Gaining hands-on experience with modern frameworks and tools including Django, React, and REST APIs.",
  "Building real-world projects to strengthen skills in full-stack development.",
  "Focusing on software design, data structures, algorithms, and system architecture."
],

    },
    {     
 title: "Full-Stack Developer",
company_name: "@FNHC",
icon: fnhc,
iconBg: "#E6DEDD",
date: "Jan 2025 - April 2025",
points: [
  "Develop and maintain web applications using Django, React, Tailwind CSS, and PostgreSQL.",
  "Design and integrate RESTful APIs to ensure scalable, secure, and efficient backend operations.",
  "Build responsive and user-friendly interfaces with React and Tailwind CSS.",
  "Implement and optimize relational database models, queries, and migrations using PostgreSQL.",
  "Collaborate with team members to deliver full-stack solutions aligned with business goals.",
  "Follow best practices in version control (Git), testing, and deployment for smooth project delivery.",
  "Contribute to innovative digital solutions that support First Nation Horizon Contracting’s mission."
],

    },
    {
    title: "BSc (Hons) Information Technology and Business Information Systems",
company_name: "Middlesex University",
icon: middlesex,
iconBg: "#E6DEDD",
date: "Sep 2025 - Present",
points: [
  "Pursuing a top-up degree in Information Technology and Business Information Systems.",
  "Studying modules including Strategic Information Systems, Business Intelligence, Technology Innovation Management & Entrepreneurship (TIME), and Interaction Design & User Experience.",
  "Developing advanced knowledge in IT strategy, data analytics, and user-centered system design.",
  "Enhancing skills to bridge the gap between technology and business decision-making."
],

    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Goke proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Goke does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Goke optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Translator App",
      description:
        "A text and voice based translator app. That translates from one language to another",
      tags: [
        {
          name: "Streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "Pyhton",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: translator,
      source_code_link: "https://github.com/Olamigoke10/TranslateApp.git",
    },
    {
      name: "Study App",
      description:
        "Web application that enables students to connect together and study on their Subject or Topic of Choice",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Pyhton",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: study,
      source_code_link: "https://github.com/Olamigoke10/Study-Bud.git",
    },
    {
      name: "Weather Forecast",
      description:
        "An app that helps to forecast weather for a period of days",
      tags: [
        {
          name: "Pyhton",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: WeatherApp,
      source_code_link: "https://github.com/Olamigoke10/WeatherForeacstWebApp.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  