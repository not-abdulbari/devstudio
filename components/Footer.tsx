import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const social = [
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "#",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DevStudio</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Services</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; 2025 DevStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}