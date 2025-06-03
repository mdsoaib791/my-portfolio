import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/images/demo-project.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/demo-project.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.",
      image: "/images/demo-project.jpg",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and TypeScript, featuring dark mode and smooth animations.",
      image: "/images/demo-project.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={project.image || "demo-project.jpg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">

                    <Button variant="ghost" size="icon">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>

                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
