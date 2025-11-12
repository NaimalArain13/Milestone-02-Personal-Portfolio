import ProjectCard from "../components/projectCard";

export default function Project() {

  const allProjects = [

    {

      img: "/room-matcher.png",

      title: "Room Matcher AI",

      description: "An AI powered room matcher multi-agent System.",

      route: "https://room-matcher-ai-rosy.vercel.app/",

    },

    {

      img: "/nasa.png",

      title: "Nasa AI",

      description: "A SaaS platform build with OpenAI & Replicate APIs",

      route: "//github.com/NaimalArain13/NaSa_SaaS_ai",

    },

    {

      img: "/impactoM.PNG",

      title: "ImpactoMoney",

      description: "A Decentralized Funding project build for Palestinians",

      route: "https://impacto-money.vercel.app/",

    },

    {

      img: "/snx.PNG",

      title: "SnX by Nash",

      description: "Developed this website in the e-commerce marketplace hackathon using Sanity, Nextjs, Tailwind, Shadcn.",

      route: "https://naimal-marketplace-hackathon03-q2-finale.vercel.app/",

    },

    {

      img: "/exclusive.png",

      title: "Exclusive",

      description: "Developed this website for the practice of an e-commerce marketplace hackathon.",

      route: "https://naimal-ui-ux-hackathon-preps-full-e-commerce-website.vercel.app/",

    },

    {

      img: "/bandage.PNG",

      title: "Bandage",

      description: "Built this project in UI/UX hackathon using Next.js, Tailwind, and Shadcn.",

      route: "https://naimal-ui-ux-hackathon-q2.vercel.app/",

    },

    {

      img: "/blog.png",

      title: "Dynamic Blog Platform",

      description: "Responsive blog platform for writing and sharing articles.",

      route: "//blog-platform-by-na.vercel.app/",

    },

    {

      img: "/tech.png",

      title: "Tech Store",

      description: "A Techbook store that leverages the react context api for global state management.",

      route: "//naimal-arain-milestone-03-e-commerce-website.vercel.app/",

    },

    {

      img: "/resume.png",

      title: "Interactive Resume Builder",

      description: "A resume builder build with core technology, HTML, CSS, Typescript",

      route: "//hackathon-interative-resume-builder.vercel.app/",

    },

    {

      img: "/e-learn.png",

      title: "E-Learn platform UI",

      description: "An education learning platform UI build with nextjs, tailwind, shadcn and many more.",

      route: "//naimal-educational-learning-platform-assignment02-milestone02.vercel.app/",

    },

    {

      img: "/todo2.png",

      title: "Todo App",

      description: "Task management app to organize and track daily activities.",

      route: "//my-todo-app-green.vercel.app/",

    },

    // Placeholder for additional projects as per user's request

    // 15+ personal projects, 2 professional, 1 startup

    {

      img: "/placeholder.png",

      title: "Personal Project 1",

      description: "Description for personal project 1.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Personal Project 2",

      description: "Description for personal project 2.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Personal Project 3",

      description: "Description for personal project 3.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Personal Project 4",

      description: "Description for personal project 4.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Professional Project 1",

      description: "Description for professional project 1.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Professional Project 2",

      description: "Description for professional project 2.",

      route: "#",

    },

    {

      img: "/placeholder.png",

      title: "Startup Project",

      description: "Description for startup project.",

      route: "#",

    },

  ];

  

  const projectsToShow = allProjects.slice(0, 6); // Display only the first 6 projects



  return (

    <div className="bg-light-grey py-16 text-charcoal">

      <h2 className="text-center text-4xl font-bold mb-12">

        My Projects

      </h2>



      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {projectsToShow.map((project, index) => (

          <ProjectCard key={index} prop={project} />

        ))}

      </div>

    </div>

  );

}