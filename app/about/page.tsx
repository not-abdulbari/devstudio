import { Users, Target, Award, Heart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/Section"

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies."
  },
  {
    name: "Mike Chen",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Creative designer specializing in user-centered design and modern web interfaces."
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Experienced project manager ensuring timely delivery and client satisfaction."
  }
]

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to understand their needs and deliver solutions that exceed expectations."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code and design element is crafted with attention to detail and purpose."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about technology and committed to helping businesses succeed online."
  }
]

const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Years Experience", value: "10+" },
  { label: "Team Members", value: "12" }
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About DevStudio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're a team of passionate developers and designers dedicated to creating exceptional digital experiences that help businesses thrive in the modern world.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Story Section */}
      <Section className="bg-secondary/10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              DevStudio was founded in 2014 with a simple mission: to help businesses succeed online through exceptional web development and design.
            </p>
            <p className="mt-4 text-muted-foreground">
              What started as a small team of two developers has grown into a full-service digital agency with expertise spanning web development, mobile applications, UI/UX design, and digital strategy.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we're proud to have helped over 50 businesses transform their digital presence and achieve their online goals.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Team working"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and shape how we work with our clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-secondary/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind DevStudio's success.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Badge variant="secondary">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {member.bio}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            To empower businesses of all sizes with cutting-edge web technologies and exceptional design, helping them connect with their audience and achieve sustainable growth in the digital landscape.
          </p>
        </div>
      </Section>
    </>
  )
}