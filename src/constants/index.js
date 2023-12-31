import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgreSQL,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  academlo,
  weather,
  eCommerce,
  fullStack
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
    title: "React Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node.js",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Academlo",
    icon: academlo,
    iconBg: "#383E56",
    date: "Certified",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Backend",
    company_name: "Academlo",
    icon: academlo,
    iconBg: "#E6DEDD",
    date: "Certified",
    points: [
      "Certified to build an application from the server-side using Node.js and Express, starting from scratch and deploying it on a server",
      "Proficient in developing RESTful APIs using a relational database, implementing user authentication, ensuring security against XSS and CSRF attacks, validating server-side data, and constructing custom middlewares using Express with Node.js.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Academlo",
    icon: academlo,
    iconBg: "#383E56",
    date: "Certified",
    points: [
      "Developing and maintaining web applications using HTML, CSS, and JavaScript, along with other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Academlo",
    icon: academlo,
    iconBg: "#E6DEDD",
    date: "Certified",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and Express, along with other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Weather App, your go-to source for accurate and up-to-date weather information! Check weather conditions for any location, near or far, user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weatherappmarvin.netlify.app/",
  },
  {
    name: "SocialDev",
    description:
      "A simple platform for developers to showcase their work, connect with peers, and collaborate. Join us and let's build together, you'll find a welcoming community!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: fullStack,
    source_code_link: "https://social-full-stack.vercel.app/",
  },
  {
    name: "E-commerce",
    description:
      "The ultimate convenience of online shopping with our user-friendly e-commerce platform. Browse through a collection of products across various categories.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://e-commerce-marvin-vanilla.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects};
