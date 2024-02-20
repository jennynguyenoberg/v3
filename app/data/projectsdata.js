const projectsData = [
  {
    id: "about-consulting",
    images: [
      {
        url: "/images/about-consulting.jpg",
        alt: "Screenshot of About Consulting website",
      },
      // {
      //   url: "/images/the-workshop.jpg",
      //   alt: "Image 2 Alt Text",
      // }
    ],
    heading: "Heading 1",
    subheading: "Subheading 1",
    role: "Designer & Developer",
    year: "2024",
    location: "Stockholm",
    deliverables: "Design & Development",
    client: "About Consulting",
    specs: "GSAP, Framer Motion",
    site: "https://aboutconsulting.se/",
    github: "https://github.com/jennynguyenoberg/about-consulting",
    brief:
      "This is my Master Thesis where I explore Typescript, Tailwind CSS and a variety of animation techniques, such as Framer Motion, GSAP and Locomotive Scroll.",
  },
  {
    id: "ideaspire",
    images: [
      {
        url: "/images/ideaspire.png",
        alt: "Laptop mockup of The Ideaspire website",
      },
      // {
      //   url: "/images/the-workshop.jpg",
      //   alt: "Image 2 Alt Text",
      // }
    ],
    heading: "Heading 1",
    subheading: "Subheading 1",
    role: "Designer & Developer",
    year: "2024",
    location: "Stockholm",
    deliverables: "Design & Development",
    client: "Ideaspire",
    specs: "CSS",
    site: "https://creative-brief-generator.vercel.app/",
    github: "https://github.com/jennynguyenoberg/creative-brief-generator",
    brief:
      "The Creative Ideas Generator is a simple web application that allows you to choose an industry and category, and it will provide you with a random idea related to that combination. It's designed to help professionals, creators, and coders find unique concepts for their up coming projects or assignments.",
  },
  {
    id: "color-contrast-checker",
    images: [
      {
        url: "/images/color-contrast-checker.jpg",
        alt: "Screenshot of Color Contrast Checker website",
      },
      // {
      //   url: "/images/the-workshop.jpg",
      //   alt: "Image 2 Alt Text",
      // }
    ],
    heading: "Heading 1",
    subheading: "Subheading 1",
    role: "Designer & Developer",
    year: "2024",
    location: "Stockholm",
    deliverables: "Design & Development",
    client: "Color Contrast Checker",
    specs: "Tailwind CSS",
    site: "https://color-checker-tdd.vercel.app/",
    github: "https://github.com/jennynguyenoberg/color-checker-TDD",
    brief:
      "This Color Contrast Checker is a web application designed to evaluate the color contrast between two chosen colors. It aims to provide users with feedback on whether the contrast ratio meets accessibility standards (a grade based on WCAG standards), making it easy for users with visual impairments to perceive content.",
  },
  {
    id: "the-workshop",
    images: [
      // {
      //   url: "/images/the-workshop-mockup.jpg",
      //   alt: "Screenshot of The Workshop website",
      // },
      {
        url: "/images/the-workshop.jpg",
        alt: "Image 2 Alt Text",
      }
    ],
    heading: "Heading 1",
    subheading: "Subheading 1",
    role: "Designer & Developer",
    year: "2023",
    location: "Stockholm",
    deliverables: "Design & Development",
    client: "The Workshop",
    specs: "Styled Components",
    site: "https://the-workshop-rho.vercel.app/",
    github: "https://github.com/jennynguyenoberg/the-workshop",
    brief:
      "This project is a simple web application built with TypeScript, Styled Components, and React Hooks (useState and useEffect). It serves as a template for creating a (non-functional) e-commerce website with these technologies.",
  },
  {
    id: "stockholm-restaurant-finder",
    images: [
      {
        url: "/images/stockholm-restaurant-finder.jpg",
        alt: "Screenshot of Stockholm Restaurant Finder website",
      },
    ],
    heading: "Heading 2",
    subheading: "Subheading 2",
    role: "Developer",
    year: "2023",
    location: "Stockholm",
    deliverables: "Design & Development",
    client: "Stockholm Restaurant Finder",
    specs: "External API, Sass",
    site: "https://stockholm-restaurant-finder.vercel.app/",
    github: "https://github.com/jennynguyenoberg/stockholm-restaurant-finder",
    brief:
      "A web application utilizing an external API (Worldwide Restaurants API), the useSWR hook, and Sass for styling. This dynamic application seamlessly fetches and displays real-time data from the API, providing users with up-to-the-minute information in an engaging and visually appealing interface. The use of useSWR ensures efficient data fetching and management, while Sass enables a sleek and customized design that enhances the user experience.",
  },
  {
    id: "pomodoro-timer",
    images: [
      {
        url: "/images/pomodoro.jpg",
        alt: "Screenshot of Pomodoro Timer website",
      },
    ],
    heading: "Heading 3",
    subheading: "Subheading 3",
    role: "Developer",
    year: "2023",
    location: "Stockholm",
    deliverables: "Development",
    client: "Pomodoro Timer",
    specs: "Vite",
    site: "https://assignment3-javascript-frameworks.vercel.app/",
    github: "https://github.com/jennynguyenoberg/assignment3-javascript-frameworks",
    brief:
      "My idea for this project was to create a simple pomodoro timer, using React with hooks such as useState and useEffect.",
  },
  {
    id: "harry-potter-api",
    images: [
      {
        url: "/images/harry-p-api.jpg",
        alt: "Screenshot of Harry Potter API website",
      },
    ],
    heading: "Heading 4",
    subheading: "Subheading 4",
    role: "Developer",
    year: "2023",
    location: "Stockholm",
    deliverables: "Development",
    client: "Harry Potter API",
    specs: "RESTful API",
    site: "https://assignment4-javascript-frameworks.vercel.app/",
    github: "https://github.com/jennynguyenoberg/assignment4-javascript-frameworks",
    brief:
      "In this project I used the Fetch API to pull data from a RESTful API. I incorporated this data into a already available design, creating a user-friendly interface. The Fetch API ensured real-time data updates, while the design made the information visually appealing and informative. This project showcased the synergy of technical skills and design in web development, emphasizing the importance of both functionality and aesthetics.",
  },
];

export default projectsData;
