import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience building web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl mb-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a full-stack developer with a passion for creating exceptional digital experiences. With over 5 years
              of experience, I specialize in React, Next.js, and modern web technologies.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community talks.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I do</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Frontend Development</Badge>
                <Badge variant="secondary">Backend Development</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Mobile Development</Badge>
                <Badge variant="secondary">DevOps</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
