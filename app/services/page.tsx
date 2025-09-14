import { Code, Smartphone, Palette, Search, Server, Zap, Shield, BarChart } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/Section"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    price: "Starting at $2,500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
    price: "Starting at $5,000"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,500"
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Comprehensive SEO strategies to improve your search engine rankings and visibility.",
    features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"],
    price: "Starting at $800/month"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable backend solutions with APIs, databases, and cloud infrastructure.",
    features: ["Node.js & Python", "Database Design", "API Development", "Cloud Deployment"],
    price: "Starting at $3,000"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience with performance audits.",
    features: ["Speed Analysis", "Code Optimization", "Image Optimization", "CDN Setup"],
    price: "Starting at $1,000"
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description: "Comprehensive security audits and implementation of best security practices.",
    features: ["Security Audits", "SSL Implementation", "Data Protection", "Compliance"],
    price: "Starting at $2,000"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Set up comprehensive analytics to track your website's performance and user behavior.",
    features: ["Google Analytics", "Custom Dashboards", "Conversion Tracking", "Monthly Reports"],
    price: "Starting at $500/month"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements."
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed project plan, timeline, and technical architecture for your solution."
  },
  {
    step: "03",
    title: "Design",
    description: "Our design team creates wireframes, mockups, and prototypes for your approval."
  },
  {
    step: "04",
    title: "Development",
    description: "We build your solution using modern technologies and best practices."
  },
  {
    step: "05",
    title: "Testing",
    description: "Comprehensive testing ensures your solution works perfectly across all devices and browsers."
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your solution and provide ongoing support and maintenance."
  }
]

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From concept to deployment, we offer comprehensive digital solutions tailored to your business needs and budget.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">What's included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="mb-3">
                      {service.price}
                    </Badge>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-secondary/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-2" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}