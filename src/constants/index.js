import {
  FaLightbulb,
  FaCode,
  FaUserCheck,
  FaRocket,
  FaLaptopCode,
  FaRegCompass,
} from "react-icons/fa";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];



const abilities = [
  {
    Icon: FaLightbulb,
    title: "Creative Engineering",
    desc: "I blend logic and imagination to build unique, immersive digital experiences.",
  },
  {
    Icon: FaCode,
    title: "Performance-Driven Code",
    desc: "Fast, optimized, and clean code that scales — because quality isn’t optional.",
  },
  {
    Icon: FaUserCheck,
    title: "User-Centric Thinking",
    desc: "I prioritize intuitive UX and accessibility so every user feels at home.",
  },
  {
    Icon: FaRocket,
    title: "Rapid Development",
    desc: "I move fast without breaking things — delivering reliable results on time.",
  },
  {
    Icon: FaLaptopCode,
    title: "Full-Stack Capability",
    desc: "From frontend finesse to backend logic — I handle it all end-to-end.",
  },
  {
    Icon: FaRegCompass,
    title: "Constant Curiosity",
    desc: "I learn, adapt, and evolve — pushing boundaries with every project I build.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "AIML Developer",
    modelPath: "/models/robot.glb",
    scale: 8,
    rotation: [0, 0, 0],
  },
    {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I still remember the first lines of HTML I wrote — curious, messy, but full of fire. That spark started it all. From tinkering with basic elements to crafting my own music player — every step fueled the next.",
    imgPath: "/images/exp1.jpeg",
    logoPath: "/images/frontend.png",
    title: "Kickoff: HTML, CSS, JavaScript",
    date: "December 2023",
    responsibilities: [
      "Started learning the basics of web development: HTML, CSS, and JavaScript.",
      "Built 'VibexAura' — a custom music player born from a Spotify clone idea, packed with unique features.",
      "Experimented with UI design, responsiveness, and interactivity using just the vanilla stack.",
    ],
  },
  {
    review:
      "While others were figuring out loops, I was making a voice assistant using Python and TensorFlow. That project wasn’t just functional — it was fearless.",
    imgPath: "/images/exp2.jpeg",
    logoPath: "/images/logos/python.svg",
    title: "Diving Deep with Python & AI",
    date: "January 2024",
    responsibilities: [
      "Built a Mini Voice Assistant from scratch using Python and TensorFlow.",
      "Explored fundamentals of AI/ML — natural language processing, voice recognition, and automation.",
      "Realized the power of building real-world tools, even at the beginner stage.",
    ],
  },
  {
    review:
      "Flask became my battleground. Backend logic, MySQL integrations, dynamic pages — I found my groove. That was the phase I went from just building to *engineering*.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/python.svg",
    title: "Backend Awakening: Flask & MySQL",
    date: "February 2024",
    responsibilities: [
      "Started creating full-stack projects using Flask and MySQL.",
      "Connected backend databases with dynamic frontend templates.",
      "Got comfortable building real applications with login, forms, dashboards, and more.",
    ],
  },
  {
    review:
      "From wireframes to working prototypes — Figma became my sketchpad. Designing, refining, and then building — I realized creativity and code aren't separate worlds.",
    imgPath: "/images/exp4.jpeg",
    logoPath: "/images/figma.png",
    title: "Design Thinking with Figma",
    date: "May 2024",
    responsibilities: [
      "Designed web interfaces and UI mockups using Figma.",
      "Focused on layout structure, visual hierarchy, and intuitive user flows.",
      "Learned how good design decisions translate directly to cleaner code.",
    ],
  },
  {
    review:
      "React changed everything. It wasn't just a framework — it was a shift in mindset. With Vite, Tailwind, and Framer Motion, my projects started speaking for themselves.",
    imgPath: "/images/exp5.jpeg",
    logoPath: "/images/react.png",
    title: "Mastering the Modern Stack",
    date: "January 2025",
    responsibilities: [
      "Started building apps using React + Vite for blazing fast development.",
      "Styled with TailwindCSS and added beautiful interactions using Framer Motion.",
      "Brought designs to life as scalable, component-driven, animated UIs.",
    ],
  },
  {
    review:
      "This isn't just a timeline — it's momentum. From no-code to full-stack, from unsure to unstoppable. The journey continues, and the best is yet to come.",
    imgPath: "/images/github.jpeg",
    logoPath: "/images/github-icon.png",
    title: "The Journey So Far — and Beyond",
    date: "June 2025",
    responsibilities: [
      "Continuously building projects that blend AI, interactivity, and performance.",
      "Exploring new stacks, deploying full-stack applications, and staying hands-on.",
      "Crafting every project with curiosity, clarity, and care — one experience at a time.",
      "Explore my projects & code: https://github.com/sujal-1245",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
export const reviews = [
  {
    name: "Arbaaz Sheikh",
    username: "@arbaaz_uiux",
    body: "Sujal's attention to detail in UI animations is next-level. Everything feels alive and intuitive — exactly how users expect a modern interface to behave.",
    img: "https://robohash.org/arbaaz",
  },
  {
    name: "Sundaram Singh",
    username: "@sundaram_web",
    body: "Working with Sujal is always a masterclass in clean code and better architecture. The way he bridges design with logic is rare.",
    img: "https://robohash.org/sundaram",
  },
  {
    name: "Priyanshu Pandey",
    username: "@priyanshu_py",
    body: "From scalable APIs to sharp frontend flows, Sujal builds systems that actually feel joyful to use. It's refreshing.",
    img: "https://robohash.org/priyanshu",
  },
  {
    name: "Saunved Giri",
    username: "@saunved_cloud",
    body: "I’ve seen him deploy full cloud-backed apps with seamless CI/CD setups — and he still manages to make it look effortless.",
    img: "https://robohash.org/saunved",
  },
  {
    name: "Sushant Patil",
    username: "@sushant_cyber",
    body: "His security practices are solid. You can trust anything Sujal ships — it's clean, tested, and hardened.",
    img: "https://robohash.org/sushant",
  },
  {
    name: "Anuj Salvi",
    username: "@anuj_swift",
    body: "Every interface Sujal touches feels premium. It’s like Apple meets the web — smooth, minimal, powerful.",
    img: "https://robohash.org/anuj",
  },
  {
    name: "Ayush Bhagwat",
    username: "@ayush_fe",
    body: "His frontend work? Sleek, interactive, and responsive across the board. Sujal makes code feel like craft.",
    img: "https://robohash.org/ayush",
  },
  {
    name: "Aanya Kapoor",
    username: "@aanya_creative",
    body: "From ideation to final deploy, Sujal builds experiences that feel human. Not just good code — thoughtful code.",
    img: "https://robohash.org/aanya",
  },
  {
    name: "Rohan Mehta",
    username: "@rohan_dev",
    body: "You want 3D, motion, glassmorphism, scroll triggers? Sujal *lives* there. Easily one of the most creative developers I know.",
    img: "https://robohash.org/rohan",
  },
  {
    name: "Devika Sharma",
    username: "@devika_pm",
    body: "Sujal doesn’t just deliver on the brief — he elevates it. He finds that spark that makes a product stand out.",
    img: "https://robohash.org/devika",
  },
  {
    name: "Tanish Jain",
    username: "@tanish_js",
    body: "When you care about how your app feels *and* performs — you want Sujal on your team. Period.",
    img: "https://robohash.org/tanish",
  },
  {
    name: "Naina Desai",
    username: "@naina_ux",
    body: "His UX thinking is subtle but impactful. Every scroll, every animation, every tap — crafted with intent.",
    img: "https://robohash.org/naina",
  },
  {
    name: "Arbaaz Sheikh",
    username: "@arbaaz_uiux",
    body: "Sujal's attention to detail in UI animations is next-level. Everything feels alive and intuitive — exactly how users expect a modern interface to behave.",
    img: "https://robohash.org/arbaaz",
  },
  {
    name: "Sundaram Singh",
    username: "@sundaram_web",
    body: "Working with Sujal is always a masterclass in clean code and better architecture. The way he bridges design with logic is rare.",
    img: "https://robohash.org/sundaram",
  },
  {
    name: "Priyanshu Pandey",
    username: "@priyanshu_py",
    body: "From scalable APIs to sharp frontend flows, Sujal builds systems that actually feel joyful to use. It's refreshing.",
    img: "https://robohash.org/priyanshu",
  },
  {
    name: "Saunved Giri",
    username: "@saunved_cloud",
    body: "I’ve seen him deploy full cloud-backed apps with seamless CI/CD setups — and he still manages to make it look effortless.",
    img: "https://robohash.org/saunved",
  },
  {
    name: "Sushant Patil",
    username: "@sushant_cyber",
    body: "His security practices are solid. You can trust anything Sujal ships — it's clean, tested, and hardened.",
    img: "https://robohash.org/sushant",
  },
  {
    name: "Anuj Salvi",
    username: "@anuj_swift",
    body: "Every interface Sujal touches feels premium. It’s like Apple meets the web — smooth, minimal, powerful.",
    img: "https://robohash.org/anuj",
  },
  {
    name: "Ayush Bhagwat",
    username: "@ayush_fe",
    body: "His frontend work? Sleek, interactive, and responsive across the board. Sujal makes code feel like craft.",
    img: "https://robohash.org/ayush",
  },
  {
    name: "Aanya Kapoor",
    username: "@aanya_creative",
    body: "From ideation to final deploy, Sujal builds experiences that feel human. Not just good code — thoughtful code.",
    img: "https://robohash.org/aanya",
  },
  {
    name: "Rohan Mehta",
    username: "@rohan_dev",
    body: "You want 3D, motion, glassmorphism, scroll triggers? Sujal *lives* there. Easily one of the most creative developers I know.",
    img: "https://robohash.org/rohan",
  },
  {
    name: "Devika Sharma",
    username: "@devika_pm",
    body: "Sujal doesn’t just deliver on the brief — he elevates it. He finds that spark that makes a product stand out.",
    img: "https://robohash.org/devika",
  },
  {
    name: "Tanish Jain",
    username: "@tanish_js",
    body: "When you care about how your app feels *and* performs — you want Sujal on your team. Period.",
    img: "https://robohash.org/tanish",
  },
  {
    name: "Naina Desai",
    username: "@naina_ux",
    body: "His UX thinking is subtle but impactful. Every scroll, every animation, every tap — crafted with intent.",
    img: "https://robohash.org/naina",
  },

];
