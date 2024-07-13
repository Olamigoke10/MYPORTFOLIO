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
      title: "Student",
      company_name: "@Aptech",
      icon: aptech,
      iconBg: "#383E56",
      date: "Jan 2022 - Feb 2024",
      points: [
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
      ],
    },
    {     
    title: "Student",
    company_name: "@Aptech",
      icon: aptech,
      iconBg: "#E6DEDD",
      date: "Jan 2022- Feb 2024",
      points: [
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
      ],
    },
    {
      title: "Student",
      company_name: "@Aptech",
      icon: aptech,
      iconBg: "#383E56",
      date: "Jan 2022 - Feb 2024",
      points: [
       "Currently Studying at Aptech.",
       "Currently Studying at Aptech.",
       "Currently Studying at Aptech.",
       "Currently Studying at Aptech."
      ],
    },
    {
      title: "Student",
      company_name: "@Aptech",
      icon: aptech,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2024",
      points: [
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
        "Currently Studying at Aptech.",
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
  