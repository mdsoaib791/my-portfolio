import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for multiple client projects, mentoring junior developers and implementing best practices for code quality and performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications using modern technologies, collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Startup Hub",
      period: "2019 - 2020",
      description:
        "Built responsive web applications and landing pages, optimized performance and implemented SEO best practices.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the roles that shaped my expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground/80">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
