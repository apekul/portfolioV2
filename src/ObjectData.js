import ecommerce from "./Assets/Images/ecommerce.png";
import drinkology from "./Assets/Images/drinkology.png";
import taskmanagement from "./Assets/Images/taskmanagement.png";
import jobboard from "./Assets/Images/jobboard.png";
import weatherapp from "./Assets/Images/weatherapp.png";
import billater from "./Assets/Images/billater.png";
import recipebook from "./Assets/Images/recipebook.png";
import multiStepForm from "./Assets/Images/multiStepForm.png";
import restCountriesApi from "./Assets/Images/restCountriesApi.png";
import interactiveCommentsSection from "./Assets/Images/interactiveCommentsSection.png";
import bookmarkLandingPage from "./Assets/Images/bookmarkLandingPage.png";
import jobboardangular from "./Assets/Images/jobboardangular.png";

export const projectData = [
  {
    id: "1",
    title: "Job Board Angular",
    shortDesc:
      "Full-stack job board inspired by JustJoinIT. Angular 21 (Signals, standalone) + TailwindCSS frontend with an Express + TypeScript API and a PostgreSQL database on Neon. Features URL-synced search, filters and favorites.",
    tech: [
      "angular",
      "typescript",
      "tailwindcss",
      "express",
      "nodejs",
      "postgresql",
    ],
    links: {
      github: "https://github.com/apekul/job-board-angular",
      demo: "https://job-board-angular.vercel.app/jobs",
    },
    img: jobboardangular,
  },
  {
    id: "2",
    title: "JobBoard",
    shortDesc:
      "Job board web application built with React and Redux that lets users search, filter and paginate through job listings.",
    tech: ["react", "tailwindcss", "redux"],
    links: {
      github: "https://github.com/apekul/job-Board",
      demo: "https://dashing-dasik-3b0a19.netlify.app/",
    },
    img: jobboard,
  },
  {
    id: "3",
    title: "Billater",
    shortDesc:
      "React Native app similar to Splitwise for tracking shared expenses and splitting bills with friends, roommates or colleagues.",
    tech: ["react native", "momentjs", "context api", "expo"],
    links: {
      github: "https://github.com/apekul/billater",
      demo: "",
    },
    img: billater,
  },
  {
    id: "4",
    title: "Task Management",
    shortDesc:
      "Kanban-style task management app with drag-and-drop boards, progress tracking and charts to visualize workload.",
    tech: ["react", "tailwindcss", "react-beautiful-dnd", "chartjs"],
    links: {
      github: "https://github.com/apekul/task_management",
      demo: "https://stunning-mermaid-6e4b29.netlify.app",
    },
    img: taskmanagement,
  },
  {
    id: "5",
    title: "Weather App",
    shortDesc:
      "Current conditions and forecast weather app powered by the OpenWeather API, with interactive maps and temperature charts.",
    tech: [
      "react",
      "tailwindcss",
      "momentjs",
      "chartjs",
      "openweather api",
      "react Simple Maps",
    ],
    links: {
      github: "https://github.com/apekul/weatherapp",
      demo: "https://silly-gnome-94a7ea.netlify.app/",
    },
    img: weatherapp,
  },
  {
    id: "6",
    title: "E-commerce",
    shortDesc:
      "A minimalist app imitating an online store with product catalog, filtering and cart management.",
    tech: ["react", "scss"],
    links: {
      github: "https://github.com/apekul/e-commerce",
      demo: "https://simple-fake-commerce.netlify.app/",
    },
    img: ecommerce,
  },
  {
    id: "7",
    title: "Drinkology",
    shortDesc:
      "Drink and cocktail database website with a friendly one-page design for browsing and discovering new recipes.",
    tech: ["react", "tailwindcss", "react-router"],
    links: {
      github: "https://github.com/apekul/drinkology",
      demo: "https://drinkology.netlify.app",
    },
    img: drinkology,
  },
  {
    id: "8",
    title: "RecipeBook",
    shortDesc:
      "Recipe book application built with Angular that lets users view, add, edit and delete their favorite recipes in one place.",
    tech: ["angular", "tailwindcss", "ngrx", "rxjs"],
    links: {
      github: "https://github.com/apekul/recipebook",
      demo: "https://recipebookdemo.netlify.app/",
    },
    img: recipebook,
  },
  {
    id: "9",
    title: "Multi-step Form",
    shortDesc:
      "Multi-step form built with React that guides users through a flow with validation and a final summary screen.",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://github.com/apekul/multi-step-form-main",
      demo: "https://apekul.github.io/multi-step-form-main/",
    },
    img: multiStepForm,
  },
  {
    id: "10",
    title: "REST Countries API",
    shortDesc:
      "React app displaying country data from the REST Countries API, with search, region filtering and detailed country pages.",
    tech: ["react", "tailwindcss", "react-router", "lodash"],
    links: {
      github: "https://github.com/apekul/rest-countries-api",
      demo: "https://apekul.github.io/rest-countries-api/",
    },
    img: restCountriesApi,
  },
  {
    id: "11",
    title: "Interactive comments section",
    shortDesc:
      "Interactive comments section with full CRUD operations - add, edit, delete and vote on comments and replies.",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://github.com/apekul/interactive-comments-section",
      demo: "https://apekul.github.io/interactive-comments-section/",
    },
    img: interactiveCommentsSection,
  },
  {
    id: "12",
    title: "Bookmark landing page",
    shortDesc:
      "Landing page that closely mirrors the provided design, with tabbed feature sections and a fully responsive layout.",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://github.com/apekul/Bookmark-landing-page",
      demo: "https://apekul.github.io/Bookmark-landing-page/",
    },
    img: bookmarkLandingPage,
  },
];
