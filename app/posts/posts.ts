import { Post } from "../types/post";

export const posts: Post[] = [
  {
    title: "Understanding JavaScript Closures",
    slug: "js-closures",
    description: "A simple explanation of closures in JavaScript.",
    content: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding lexical environment. Closures allow functions to access variables from an outer scope even after the outer function has closed. This is powerful for creating private variables, function factories, and maintaining state in asynchronous code.`,
    date: "2025-04-10",
  },
  {
    title: "CSS Grid vs Flexbox",
    slug: "css-grid-vs-flexbox",
    description: "Which one should you use and when?",
    content: `Flexbox is one-dimensional — best for layouts in a single direction (row OR column). Grid is two-dimensional — great for complex layouts that need rows AND columns. Use Flexbox for simple UI components (navbars, cards), and Grid when designing entire page layouts or sections with both horizontal and vertical alignment.`,
    date: "2025-04-15",
  },
  {
    title: "10 VS Code Extensions for Web Developers",
    slug: "vscode-extensions-webdev",
    description: "Boost your productivity with these essential extensions.",
    content: `From Prettier for formatting, to ESLint for catching bugs early, the right VS Code extensions can transform your workflow. Live Server allows for real-time previewing, while GitLens supercharges your version control experience. Don’t forget Tailwind CSS IntelliSense if you're using Tailwind!`,
    date: "2025-04-12",
  },
  {
    title: "A Beginner’s Guide to React Hooks",
    slug: "react-hooks-guide",
    description: "An intro to useState, useEffect, and beyond.",
    content: `Hooks let you use state and other React features without writing a class. Start with useState to manage simple values, useEffect to handle side effects like fetching data or updating the DOM, and explore useRef, useReducer, and custom hooks for more advanced use cases.`,
    date: "2025-03-28",
  },
  {
    title: "TypeScript: Why You Should Care",
    slug: "typescript-why",
    description: "A quick pitch for TypeScript in your next project.",
    content: `TypeScript helps catch bugs before they happen by adding type safety to JavaScript. It improves developer experience with better autocompletion, documentation, and refactoring tools. If you're working on a growing codebase or in a team, TypeScript is a no-brainer for scalability and maintainability.`,
    date: "2025-04-01",
  },
  {
    title: "Deploying Your Next.js App to Vercel",
    slug: "nextjs-vercel-deploy",
    description: "Go from local dev to production in minutes.",
    content: `Vercel is the official platform for deploying Next.js apps. Simply connect your GitHub repo, and Vercel takes care of the rest — builds, previews, and live deployments. It also supports serverless functions, custom domains, and edge caching. Perfect for personal projects and production apps alike.`,
    date: "2025-04-14",
  },
];
