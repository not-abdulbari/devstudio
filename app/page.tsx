"use client"

import Link from "next/link"
import { ArrowRight, Code, Smartphone, Palette, Search, Star, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/Section"
import { toast } from "sonner"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and more."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces and experiences that convert visitors into customers."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more organic traffic to your website."
  }
]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with payment integration",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind"]
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS businesses",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "Charts"]
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tags: ["React Native", "Security", "API"]
  },
  {
    title: "Restaurant Website",
    description: "Beautiful restaurant website with online ordering",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tags: ["WordPress", "Custom", "Responsive"]
  }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Code className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building Digital
              <span className="text-primary"> Experiences</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              We create exceptional websites, mobile apps, and digital solutions that help businesses grow and succeed in the modern world.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url(data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='32'%20height='32'%20fill='none'%20stroke='hsl(var(--border))'%3e%3cpath%20d='m0%200.5%2032%2032m0-32-32%2032'%20stroke-opacity='0.1'/%3e%3c/svg%3e)] opacity-30" />
      </Section>

      {/* About Preview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're a team of passionate developers, designers, and digital strategists who believe in the power of great design and clean code.
            </p>
            <p className="mt-4 text-muted-foreground">
              With over 10 years of combined experience, we've helped startups and enterprises build digital products that users love and businesses depend on.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">50+ Happy Clients</span>
              </div>
            </div>
            <Button asChild className="mt-6">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <p className="text-sm font-medium">Clean Code</p>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <Palette className="h-8 w-8 text-primary mb-2" />
                  <p className="text-sm font-medium">Modern Design</p>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <p className="text-sm font-medium">Mobile First</p>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <Search className="h-8 w-8 text-primary mb-2" />
                  <p className="text-sm font-medium">SEO Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-secondary/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Portfolio Preview */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact/CTA Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your next project? Get in touch with us and let's discuss how we can help bring your ideas to life.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">hello@devstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2 sm:col-start-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[100px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
