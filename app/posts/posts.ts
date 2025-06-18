import { Post } from "../types/post";
export const posts: Post[] = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    slug: "js-closures",
    description:
      "A simple explanation of closures in JavaScript and why they matter in real-world coding scenarios.",
    content: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding lexical environment. Closures allow functions to access variables from an outer scope even after the outer function has closed. This is powerful for creating private variables, function factories, and maintaining state in asynchronous code.`,
    date: "2025-04-10",
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox",
    slug: "css-grid-vs-flexbox",
    description:
      "Understand the strengths of CSS Grid and Flexbox to choose the right tool for responsive layouts.",
    content: `Flexbox is one-dimensional — best for layouts in a single direction (row OR column). Grid is two-dimensional — great for complex layouts that need rows AND columns. Use Flexbox for simple UI components (navbars, cards), and Grid when designing entire page layouts or sections with both horizontal and vertical alignment.`,
    date: "2025-04-15",
  },
  {
    id: 3,
    title: "10 VS Code Extensions for Web Developers",
    slug: "vscode-extensions-webdev",
    description:
      "Boost your productivity and streamline development with these must-have VS Code extensions.",
    content: `From Prettier for formatting, to ESLint for catching bugs early, the right VS Code extensions can transform your workflow. Live Server allows for real-time previewing, while GitLens supercharges your version control experience. Don’t forget Tailwind CSS IntelliSense if you're using Tailwind!`,
    date: "2025-04-12",
  },
  {
    id: 4,
    title: "A Beginner’s Guide to React Hooks",
    slug: "react-hooks-guide",
    description:
      "Start using useState, useEffect, and other React hooks to write cleaner and more powerful components.",
    content: `Hooks let you use state and other React features without writing a class. Start with useState to manage simple values, useEffect to handle side effects like fetching data or updating the DOM, and explore useRef, useReducer, and custom hooks for more advanced use cases.`,
    date: "2025-03-28",
  },
  {
    id: 5,
    title: "TypeScript: Why You Should Care",
    slug: "typescript-why",
    description:
      "TypeScript brings powerful type-checking and tooling support that can improve your JavaScript code quality.",
    content: `TypeScript helps catch bugs before they happen by adding type safety to JavaScript. It improves developer experience with better autocompletion, documentation, and refactoring tools. If you're working on a growing codebase or in a team, TypeScript is a no-brainer for scalability and maintainability.`,
    date: "2025-04-01",
  },
  {
    id: 6,
    title: "Deploying Your Next.js App to Vercel",
    slug: "nextjs-vercel-deploy",
    description:
      "Learn how to deploy your Next.js projects seamlessly to Vercel with zero configuration.",
    content: `Vercel is the official platform for deploying Next.js apps. Simply connect your GitHub repo, and Vercel takes care of the rest — builds, previews, and live deployments. It also supports serverless functions, custom domains, and edge caching. Perfect for personal projects and production apps alike.`,
    date: "2025-04-14",
  },
  {
    id: 7,
    title: "JavaScript Event Loop Explained",
    slug: "js-event-loop",
    description:
      "Understand how JavaScript handles asynchronous code with the event loop and task queues.",
    content: `The event loop is the secret behind JavaScript's non-blocking concurrency model. It allows asynchronous tasks (like fetch calls and timers) to be executed without freezing the main thread. Understanding the call stack, Web APIs, task queue, and microtask queue will help you write more efficient async code.`,
    date: "2025-04-17",
  },
  {
    id: 8,
    title: "Getting Started with Tailwind CSS",
    slug: "tailwind-getting-started",
    description:
      "Learn how to build modern, responsive UIs faster with utility-first Tailwind CSS.",
    content: `Tailwind CSS is a utility-first CSS framework that lets you style your components directly in your HTML or JSX. It promotes consistency and eliminates the need to name CSS classes. You can customize your design system, enable dark mode, and use plugins to extend functionality easily.`,
    date: "2025-04-18",
  },
  {
    id: 9,
    title: "How to Use Git Effectively",
    slug: "git-effective-workflow",
    description:
      "Master the basics of Git branching, committing, and collaborating in modern development workflows.",
    content: `Git is a powerful version control system, but it can be overwhelming. Learn to use branches for feature development, write meaningful commit messages, and resolve merge conflicts. Tools like GitHub and GitKraken can enhance your workflow and make collaboration much smoother.`,
    date: "2025-04-20",
  },
  {
    id: 10,
    title: "Understanding REST APIs",
    slug: "rest-api-basics",
    description:
      "Discover how REST APIs work and how to interact with them in your front-end applications.",
    content: `REST (Representational State Transfer) APIs allow front-end apps to communicate with servers using HTTP methods like GET, POST, PUT, and DELETE. Learn how to consume REST APIs using fetch or axios, structure URLs correctly, and handle responses and errors effectively.`,
    date: "2025-04-21",
  },
  {
    id: 11,
    title: "Setting Up a Modern Dev Environment",
    slug: "modern-dev-setup",
    description:
      "From code editors to terminal tools, create a productive setup for web development.",
    content: `A well-configured dev environment improves productivity and comfort. Start with VS Code and its key extensions, add terminal tools like Oh My Zsh or Starship, and use Git, Node.js, and package managers like pnpm or Yarn. Consider containerized environments with Docker for larger projects.`,
    date: "2025-04-22",
  },
  {
    id: 12,
    title: "Improving Web Performance",
    slug: "web-performance-tips",
    description:
      "Speed matters — learn tips to optimize your site for better load times and user experience.",
    content: `Web performance affects SEO, engagement, and conversion. Optimize images, use lazy loading, minify CSS/JS, and leverage caching. Consider Core Web Vitals, Lighthouse reports, and CDN strategies to improve page load speed and responsiveness on all devices.`,
    date: "2025-04-23",
  },
];
