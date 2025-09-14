import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/Section"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with payment integration, inventory management, and customer analytics.",
    longDescription: "Built a complete e-commerce platform for a growing retail business. Features include product catalog, shopping cart, secure payments via Stripe, order management, and comprehensive analytics dashboard.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL", "Vercel"],
    category: "E-Commerce",
    year: "2024",
    client: "Fashion Forward",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization.",
    longDescription: "Developed a powerful analytics platform that helps SaaS companies track user engagement, revenue metrics, and business performance through interactive charts and real-time updates.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    category: "SaaS",
    year: "2024",
    client: "DataFlow Inc",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    longDescription: "Created a secure mobile banking solution with features like account management, fund transfers, bill payments, and investment tracking, all protected by advanced security measures.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "Security", "API", "AWS"],
    category: "Mobile",
    year: "2023",
    client: "SecureBank",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Restaurant Management System",
    description: "Complete restaurant website with online ordering, reservation system, and staff management.",
    longDescription: "Built a comprehensive solution for a restaurant chain including customer-facing website, online ordering system, table reservations, and back-office management tools.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["WordPress", "Custom PHP", "MySQL", "PayPal", "Responsive"],
    category: "Website",
    year: "2023",
    client: "Bella Vista Restaurant",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and telemedicine capabilities.",
    longDescription: "Developed a comprehensive healthcare portal that connects patients with healthcare providers, featuring appointment scheduling, medical records, and video consultation capabilities.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "WebRTC", "HIPAA", "Docker"],
    category: "Healthcare",
    year: "2023",
    client: "MedCare Solutions",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course management, video streaming, and progress tracking.",
    longDescription: "Built a modern LMS platform for online education, featuring course creation tools, video streaming, student progress tracking, and interactive assessments.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "Video.js", "Stripe", "AWS S3"],
    category: "Education",
    year: "2024",
    client: "EduTech Academy",
    demoUrl: "#",
    githubUrl: "#"
  }
]

const categories = ["All", "E-Commerce", "SaaS", "Mobile", "Website", "Healthcare", "Education"]

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our recent projects and see how we've helped businesses across various industries achieve their digital goals.
          </p>
        </div>
      </Section>

      {/* Filter Section */}
      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="-mt-12">
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`aspect-video overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className={`flex flex-col justify-center p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl">{project.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {project.longDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <div className="mb-2">
                        <span className="text-sm font-medium">Client: </span>
                        <span className="text-sm text-muted-foreground">{project.client}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium">Technologies: </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild>
                        <Link href={project.demoUrl} className="inline-flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl} className="inline-flex items-center">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-secondary/10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's work together to bring your vision to life and create something amazing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}