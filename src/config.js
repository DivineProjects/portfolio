// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "DivineProjects";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I'm a Software Engineer with a deep curiosity for how things work, a mindset that honed me through my degrees in Software Engineering and Physics. I've always been fascinated by building systems that not only run efficiently but also make a tangible difference in people's lives. Over the year, I've developed and deployed scalable backend services using Node.js, C#, and Python, while also building rich, interactive frontends with React, Next.js, and TypeScript. I enjoy designing APIs, managing data in MongoDB and Postgres, and ensuring everything runs smoothly inside Dockerized environments. My focus is always on writing clean, maintainable code and delivering solutions that last. Beyond engineering, I teach courses like Introduction to Programming, Information Systems, and Software Engineering Fundamentals. Teaching keeps me grounded — it reminds me how powerful clear communication and curiosity are in solving complex problems. It also shaped how I collaborate in remote teams: through clear documentation, empathy, and consistent feedback.\n What drives me most is impact. I want to use my technical skills to solve real problems, not just build features, but build tools that matter. Clipboard Health's mission to connect healthcare professionals and facilities resonates deeply with me. It's the kind of work that aligns with my values: scaling technology with purpose. When I'm not coding or teaching, I'm probably exploring new frameworks, diving into system design problems, or reading about how physics concepts can inspire better algorithms. I'm excited to bring my blend of technical depth, communication, and first-principles thinking to a team that values ownership, creativity, and real-world impact."
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  // 🧩 BACKEND (Highest Importance)
  {
    id: 1,
    category: "Backend",
    skill: <Icon icon="mdi:nodejs" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 2,
    category: "Backend",
    skill: <Icon icon="simple-icons:nestjs" className="display-4" />,
    name: "NestJS",
  },
  {
    id: 3,
    category: "Backend",
    skill: <Icon icon="mdi:language-csharp" className="display-4" />,
    name: "C#",
  },
  {
    id: 4,
    category: "Backend",
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python",
  },

  // 🗄️ DATABASES
  {
    id: 5,
    category: "Database",
    skill: <Icon icon="simple-icons:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 6,
    category: "Database",
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 7,
    category: "Database",
    skill: <Icon icon="simple-icons:redis" className="display-4" />,
    name: "Redis",
  },

  // ☁️ DEVOPS / INFRASTRUCTURE
  {
    id: 8,
    category: "DevOps",
    skill: <Icon icon="simple-icons:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 9,
    category: "DevOps",
    skill: <Icon icon="mdi:aws" className="display-4" />,
    name: "AWS",
  },

  // ⚛️ FRONTEND
  {
    id: 10,
    category: "Frontend",
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 11,
    category: "Frontend",
    skill: <Icon icon="mdi:nextjs" className="display-4" />,
    name: "Next.js",
  },
  {
    id: 12,
    category: "Frontend",
    skill: <Icon icon="file-icons:typescript-official" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 13,
    category: "Frontend",
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 14,
    category: "Frontend",
    skill: <Icon icon="mdi:redux" className="display-4" />,
    name: "Redux",
  },
  {
    id: 15,
    category: "Frontend",
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 16,
    category: "Frontend",
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },

  // 🧰 TOOLS / VERSION CONTROL
  {
    id: 17,
    category: "Tools",
    skill: <Icon icon="mdi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 18,
    category: "Tools",
    skill: <Icon icon="mdi:github" className="display-4" />,
    name: "GitHub",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["market-forge", "NJSCarSales", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/manpzenw";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
