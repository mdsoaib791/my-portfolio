import ProjectCard from "./project-card";

export default function Projects() {

  const projects = [
    { title: "Project 1", description: "This is project 1 description.", imageUrl: "/images/join-str.png" },
    { title: "Project 2", description: "This is project 2 description.", imageUrl: "/images/join-str.png" },
    { title: "Project 3", description: "This is project 3 description.", imageUrl: "/images/join-str.png" },
    // Add more projects here
  ];
  return (
    <div className='pb-20'>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center max-w-4xl">
            <p className="text-accent text-sm mb-2">FEATURED CASE STUDIES</p>
            <h2 className="text-4xl font-bold text-background mb-5">My Projects</h2>
            <p className="text-background">Explore a collection of my projects that showcase my skills in web development, problem-solving, and creating user-friendly applications. Each project is built with modern technologies and designed to deliver a seamless user experience.</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Projects</h1>
          <div className="grid grid-cols-1  gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
