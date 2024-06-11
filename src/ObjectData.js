import ecommerce from "./Assets/Images/ecommerce.png";
import drinkology from "./Assets/Images/drinkology.png";
import taskmanagement from "./Assets/Images/taskmanagement.png";
import jobboard from "./Assets/Images/jobboard.png";
import weatherapp from "./Assets/Images/weatherapp.png";
import billater from "./Assets/Images/billater.png";
import recipebook from "./Assets/Images/recipebook.png";

export const projectData = [
  {
    id: "1",
    title: "E-commerce",
    shortDesc: "A minimalist app imitating an online store",
    description:
      "A minimalist app imitating an online store, designed in Figma and built using React and Scss.",
    tech: ["react", "scss"],
    links: {
      github: "https://github.com/apekul/e-commerce",
      demo: "https://simple-fake-commerce.netlify.app/",
    },
    img: ecommerce,
  },
  {
    id: "2",
    title: "Drinkology",
    shortDesc: "Drink/Cocktail database website",
    description:
      "Drink/Cocktail database website with one page user friendly design. Search for drink/cocktail by it's full name, first letter or ingredient and see how to prepare them.",
    tech: ["react", "tailwindcss", "react-router"],
    links: {
      github: "https://github.com/apekul/drinkology",
      demo: "https://drinkology.netlify.app",
    },
    img: drinkology,
  },
  {
    id: "3",
    title: "RecipeBook",
    shortDesc: "Recipe Book application built with Angular.",
    description:
      "Recipe Book application built with Angular. The application allows users to view, add, edit, and delete recipes. It's a great way to keep all your favorite recipes in one place and access them easily.",
    tech: ["angular", "tailwindcss", "ngrx", "rxjs"],
    links: {
      github: "https://github.com/apekul/recipebook",
      demo: "https://recipebookdemo.netlify.app/",
    },
    img: recipebook,
  },
  {
    id: "4",
    title: "Weather App",
    shortDesc: "Current and forecast weather application",
    description: "Current and forecast weather application",
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
    title: "Billater",
    shortDesc: "Mobile expense-splitting app",
    description:
      "This is a mobile application developed using React Native that provides functionality similar to Splitwise, a popular expense-splitting app. The app allows users to track shared expenses and easily split bills among groups of friends, roommates, or colleagues.",
    tech: ["react native", "momentjs", "context api", "expo"],
    links: {
      github: "https://github.com/apekul/billater",
      demo: "",
    },
    img: billater,
  },

  {
    id: "6",
    title: "Task Management",
    shortDesc: "Task management application",
    description:
      "The task management application provides users with the ability to create projects and customize columns for efficient organization. Users can rearrange columns effortlessly using drag-and-drop functionality. Within each project, users can create, delete, and organize tasks within columns, moving them as needed. Tasks can be marked as completed, and users can also create and manage subtasks for detailed project tracking. Additionally, the application offers basic charts that visualize completed tasks, providing users with valuable insights into project progress.",
    tech: ["react", "tailwindcss", "react-beautiful-dnd", "chartjs"],
    links: {
      github: "https://github.com/apekul/task_management",
      demo: "https://stunning-mermaid-6e4b29.netlify.app",
    },
    img: taskmanagement,
  },
  {
    id: "7",
    title: "JobBoard",
    shortDesc: "Job board web application",
    description:
      "This project is a job board web application built using React and Redux for state management. It allows users to search for job listings, filter results based on various criteria, and paginate through the results.",
    tech: ["react", "tailwindcss", "redux"],
    links: {
      github: "https://github.com/apekul/job-Board",
      demo: "https://dashing-dasik-3b0a19.netlify.app/",
    },
    img: jobboard,
  },

];
