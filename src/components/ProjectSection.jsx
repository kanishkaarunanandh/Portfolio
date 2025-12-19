import { ArrowRight, ExternalLink, Github } from "lucide-react"
const projects = [
    {
        id: 1,
        Titel: "Weather Reporting Application",
        Description: "A weather reporting application that provides real-time weather information based on user location or city input. The application fetches live data from an online weather API and displays temperature, weather conditions, and related details in a clean and responsive UI.",
        image: "/images/weatherapp.png",
        tags: ["React Js" ,"Tailwind CSS" ,"HTML" ,"CSS", "Online APIs"],
        demoUrl: "https://reportapp-nd4g.vercel.app",
        gitHubUrl: "#"
    },
    {
        id: 2,
        Titel: "Silk Saree E-commerce Website",
        Description: "An e-commerce website being developed for a silk saree business. The application includes product listings, categories, and a user-friendly interface built from Figma designs. Currently working on backend APIs, frontend integration, and improving overall functionality based on client feedback.",
        image: "/images/silksaree.png",
        tags: ["Springboot" ,"Vue Js" , "PostgreSQL" ,"Vuetify"],
        demoUrl: "#",
        gitHubUrl: "#"
    },
    {
        id: 3,
        Titel: "To-Do List Application",
        Description: "A simple and interactive to-do list application designed to help users add, manage, and track daily tasks efficiently. The application allows users to create tasks with due dates, mark tasks as completed, and manage task lists in an organized way.The project focuses on component-based development, state management, and writing reusable frontend code.",
        image: "/images/image.png",
        tags: ["React Js" ,"Tailwind CSS" ,"HTML" ,"CSS","Javascript"],
        demoUrl: "https://todo-task-liard-iota.vercel.app/",
        gitHubUrl: "https://github.com/kanishkaarunanandh/TodoTask.git"
    },
    {
    id: 4,
    Titel: "Udemy Clone Website",
    Description: "A responsive Udemy website clone built using HTML and CSS. The project focuses on recreating the Udemy homepage layout, navigation, and course display sections. It emphasizes pixel-perfect design, responsive layouts, and basic frontend structuring without any backend functionality.",
    image: "/images/udemy.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://udemy-gilt-one.vercel.app/",
    gitHubUrl: "#"
},
{
    id: 5,
    Titel: "Greenden E-commerce Website",
    Description: "An e-commerce website to display plants for sale, developed using HTML, CSS, and Tailwind CSS. The project highlights modern UI design, product grid layouts, hover effects, and responsive styling. It is a static frontend project without dynamic functionality or backend integration.",
    image: "/images/greenden.png",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    demoUrl: "https://greenden-tailwindcss-zeta.vercel.app",
    gitHubUrl: "https://github.com/kanishkaarunanandh/Greenden-Tailwindcss.git"
},
{
    id: 5,
    Titel: "Figma E-Commerce Design",
    Description: "Created a complete UI design for a silk saree e-commerce website using Figma. Designed key screens including home page, product listing, product details, and checkout flow. Focused on clean layout, consistent spacing, color harmony, and usability. This design was created as a template before starting development.",
    image:"/images/figma2.png",
    tags: ["Figma" , "UI Design"],
    demoUrl: "https://www.figma.com/proto/vudr1in8IpX21RJQPl3PXR/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
    gitHubUrl: "#"
},



]
function ProjectSection()
{
    return(
        <section id="projects" className="py-24 px-4 relative">
          <div className="conatiner mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of the projects I have worked on, 
              focusing on real-world use cases, clean UI, and practical functionality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {projects.map((project,key) =>(
                    <div key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                      <div className="h-48 overflow-hidden">
                         <img src={project.image} alt={project.Titel} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                      </div>

                      <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag,i)=>(
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">{tag}</span>
                            ))}
                          </div>
                    
                      <h3 className="text-xl font-semibold mb-1">{project.Titel}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.Description}</p>
                      <div className="flex justify-between items-center">
                           <div className="flex space-x-3">
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80  hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                            </a>
                            <a href={project.gitHubUrl} target="_blank" className="text-foreground/80  hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                            </a>
                           </div>
                      </div>
                    </div>
                      </div>
                 ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://github.com/kanishkaarunanandh" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </section>
    )
}

export default ProjectSection