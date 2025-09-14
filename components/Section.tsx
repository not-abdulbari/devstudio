import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section 
      className={cn("py-12 sm:py-16 lg:py-20", className)} 
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}