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

export const projectData = [
  {
    id: "1",
    title: "JobBoard",
    shortDesc: "Job board web application",
    tech: ["react", "tailwindcss", "redux"],
    links: {
      github: "https://github.com/apekul/job-Board",
      demo: "https://dashing-dasik-3b0a19.netlify.app/",
    },
    img: jobboard,
  },
  {
    id: "2",
    title: "Billater",
    shortDesc: "Mobile expense-splitting app",
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
    shortDesc: "Task management application",
    tech: ["react", "tailwindcss", "react-beautiful-dnd", "chartjs"],
    links: {
      github: "https://github.com/apekul/task_management",
      demo: "https://stunning-mermaid-6e4b29.netlify.app",
    },
    img: taskmanagement,
  },
  {
    id: "3",
    title: "Weather App",
    shortDesc: "Current and forecast weather application",
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
    id: "5",
    title: "E-commerce",
    shortDesc: "A minimalist app imitating an online store",
    tech: ["react", "scss"],
    links: {
      github: "https://github.com/apekul/e-commerce",
      demo: "https://simple-fake-commerce.netlify.app/",
    },
    img: ecommerce,
  },
  {
    id: "6",
    title: "Drinkology",
    shortDesc: "Drink/Cocktail database website",
    tech: ["react", "tailwindcss", "react-router"],
    links: {
      github: "https://github.com/apekul/drinkology",
      demo: "https://drinkology.netlify.app",
    },
    img: drinkology,
  },
  {
    id: "7",
    title: "RecipeBook",
    shortDesc: "Recipe Book application built with Angular.",
    tech: ["angular", "tailwindcss", "ngrx", "rxjs"],
    links: {
      github: "https://github.com/apekul/recipebook",
      demo: "https://recipebookdemo.netlify.app/",
    },
    img: recipebook,
  },
  {
    id: "8",
    title: "Multi-step Form",
    shortDesc: "Multi-step form built with React",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://github.com/apekul/multi-step-form-main",
      demo: "https://apekul.github.io/multi-step-form-main/",
    },
    img: multiStepForm,
  },
  {
    id: "9",
    title: "REST Countries API",
    shortDesc: "Application that displays country data from REST API.",
    tech: ["react", "tailwindcss", "reacr-router", "lodash"],
    links: {
      github: "https://github.com/apekul/rest-countries-api",
      demo: "https://apekul.github.io/rest-countries-api/",
    },
    img: restCountriesApi,
  },
  {
    id: "10",
    title: "Interactive comments section",
    shortDesc: "Interactive comments section with CRUD operations.",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://apekul.github.io/interactive-comments-section/",
      demo: "https://apekul.github.io/rest-countries-api/",
    },
    img: interactiveCommentsSection,
  },
  {
    id: "11",
    title: "Bookmark landing page",
    shortDesc: "Landing page that closely resembles the provided design.",
    tech: ["react", "tailwindcss"],
    links: {
      github: "https://github.com/apekul/Bookmark-landing-page",
      demo: "https://apekul.github.io/Bookmark-landing-page/",
    },
    img: bookmarkLandingPage,
  },
];
