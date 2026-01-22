import { FaGithub, FaReact, FaNodeJs, FaCode, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiBootstrap, SiReact, SiHtml5 } from 'react-icons/si';

export const navbar = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export const About = [
  {
    name: 'About',
    description: 'I am a Front-End Developer with a focus on building functional, responsive, and user-friendly web applications. Coming from an educational background, I bring a unique perspective to software development—prioritizing clarity, structured thinking, and effective communication.My technical toolkit includes React, JavaScript, and Tailwind CSS. I specialize in developing clean, component-based architectures and implementing Mobile- First designs that work seamlessly across all devices. I am passionate about writing maintainable code and ensuring a smooth user experience, from performance optimization to thoughtful UI details like Dark Mode and interactive elements. I am currently looking for a professional environment where I can contribute my technical skills and continue to grow as part of a collaborative team. Let’s connect if you are looking for a dedicated developer who values quality and precision.',
    skills: [
      // 1. Core Front-End Technologies
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },

      // 3. Back-End & Database
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },

      // 4. Tools & Workflow
      { name: 'Git & GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },

      // 5. Soft Skills
      { name: 'Problem-Solving', icon: <FaCode className="text-gray-400" /> },
      { name: 'Communication', icon: <FaCode className="text-gray-400" /> },
    ],
  },
];

export const projects = [
  {
    title: "Frontend Mentor Solutions Hub",
    tech: ["HTML5", "CSS3", "JavaScript", "Flexbox/Grid", "Responsive Design"],
    description: "A professional collection of 13+ frontend challenges focused on perfecting UI/UX craftsmanship. This hub showcases a wide range of web components—from interactive e-commerce carts and financial calculators to complex landing pages. Each project is built with a mobile-first approach, ensuring high performance, clean code architecture, and pixel-perfect responsiveness across all screen sizes.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/vipuser12/frontend-mentor",
    liveLink: "https://vipuser12.github.io/frontend-mentor",
    category: "Frontend Collection",
    icon: <FaHtml5 size={24} className="text-indigo-600" />
  },
  {
    title: "Experience Egypt - Tourism Platform",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
    description: "A dynamic tourism landing page featuring a comprehensive multi-language translation interface. Implemented a responsive UI with Bootstrap's grid system, interactive modals for user authentication, and multi-functional components like carousels and accordions. Developed custom JavaScript logic for clipboard operations and event handling to enhance user interactivity.",
    date: "June 2025",
    githubLink: "https://github.com/vipuser12/egypt-tourism-bootstrap",
    liveLink: "https://vipuser12.github.io/bootstrap-egypt/",
    category: "Landing Page",
    icon: <SiBootstrap size={24} className="text-purple-600" />
  },
  {
    title: "Majestic - Shopping Cart E-commerce App",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage API"],
    description: "A functional E-commerce platform with a built-in shopping cart and authentication logic. Features include real-time product filtering by name/category, a persistent cart system using LocalStorage, and dynamic UI updates for user greetings and wishlist management. Developed complex state handling for quantity adjustments and synchronized data across the application without external frameworks.",
    date: "July 2025",
    githubLink: "https://github.com/vipuser12/shopping-cart",
    liveLink: "https://vipuser12.github.io/shopping-cart/",
    category: "E-Commerce",
    icon: <SiJavascript size={24} className="text-yellow-500" />
  },
  {
    title: "Luxury Fragrance - Creative Agency Landing Page",
    tech: ["HTML5", "CSS3", "FontAwesome", "UI/UX Design"],
    description: "A professional, multi-section landing page for a high-end fragrance brand. It features a modern hero section, interactive portfolio with hover overlays, pricing tables, a team showcase, and a dynamic blog layout. The project demonstrates advanced CSS positioning, dropdown navigation logic, and a clean, luxury-focused aesthetic.",
    date: "August 2025",
    githubLink: "https://github.com/vipuser12/perfume-store",
    liveLink: "https://vipuser12.github.io/perfume-store/",
    category: "Landing Page",
    icon: <SiHtml5 size={24} className="text-orange-500" />
  },
  {
    title: "Capital Shop - Modern E-commerce UI",
    tech: ["HTML5", "CSS3", "Iconify", "FontAwesome", "Responsive Design"],
    description: "A comprehensive multi-page clothing store interface. This project highlights advanced CSS techniques like image flipping on hover, sophisticated navigation with multi-column dropdowns (Mega Menu style), and a seamless responsive grid for product categories. Focused on high conversion UI elements like promo banners, testimonials, and trust badges.",
    date: "September 2025",
    githubLink: "https://github.com/vipuser12/Fashion-Store",
    liveLink: "https://vipuser12.github.io/Fashion-Store/",
    category: "E-commerce",
    icon: <SiHtml5 size={24} className="text-orange-500" />
  },
  {
    title: "Full-Stack E-commerce Architecture",
    tech: ["React.js", "React Router Dom", "SPA Architecture", "Dynamic Routing"],
    description: "The core architecture of a scalable e-commerce platform. Implemented dynamic routing for product details, protected checkout paths, and a centralized layout structure. This setup ensures seamless navigation without page reloads, improving user experience and performance.",
    date: "December 2025",
    githubLink: "https://github.com/vipuser12/React-ECommerce-",
    liveLink: "https://react-ecommerce-alpha-livid.vercel.app/",
    category: "Architecture / React",
    icon: <SiReact size={24} className="text-blue-400" />
  },
];
