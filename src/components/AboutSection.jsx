import {Code , User ,Briefcase} from "lucide-react"
function AboutSection()
{
    return(
        <section id="about" className="py-24 relative ">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                       Passionate Web Developer & UI Designer
                    </h3>
                    <p className="text-muted-foreground">
                       I am a Computer Science graduate with a strong interest in web development and modern application design. 
                       I have experience developing frontend components from design specifications, optimizing existing code, 
                       and improving application performance.
                    </p>
                   <p className="text-muted-foreground">
                        I enjoy working with React, Vue.js, and Spring Boot to build scalable and maintainable applications. 
                        I focus on writing clean, reusable code and creating user interfaces that are simple, responsive, and effective.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact"  className="cosmic-button">Get In Touch</a>
                      <a
                     href="/CV/CV.png"
                     download="Resume.png"
                     className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                     >
                     Download CV
                     </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                       <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Code className="w-6 h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Frontend Development</h4>
                            <p className="text-muted-foreground">
                               Creating responsive and interactive user interfaces using React.js, Vue.js, HTML, CSS, and modern UI libraries like Vuetify and Tailwind CSS.
                            </p>
                        </div>
                       </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <User className="w-6 h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Backend Development</h4>
                            <p className="text-muted-foreground">
                               Building RESTful APIs using Spring Boot and Java, with proper data handling and integration with databases like PostgreSQL.
                            </p>
                        </div>
                       </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Briefcase className="w-6 h-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">API Integration & Optimization</h4>
                            <p className="text-muted-foreground">
                               Integrating third-party APIs, optimizing frontend performance, and ensuring smooth data flow between frontend and backend systems.
                            </p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
         </div>
        </section>
    )
}

export default AboutSection