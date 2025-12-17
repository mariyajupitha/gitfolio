"use client"

import { Card } from "@/components/ui/card"
import { Wrench, Users, Trophy, Rocket } from "lucide-react"

const values = [
  {
    icon: Wrench,
    title: "Engineering Excellence",
    description: "Pushing the boundaries of automotive engineering and innovation",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Cross-disciplinary teamwork driving success on and off the track",
  },
  {
    icon: Trophy,
    title: "Competitive Spirit",
    description: "Relentless pursuit of victory in every competition we enter",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "Pioneering new technologies and methodologies in motorsport",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                About Velocity Racing
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Velocity Racing has become one of the most successful college motorsport teams in the
                  nation. Our team comprises over 50 dedicated engineering students from various disciplines.
                </p>
                <p>
                  {
                    "We design, build, and race formula-style vehicles that compete at the highest levels of collegiate motorsport. Every component is engineered in-house, from the carbon fiber monocoque to the custom ECU programming."
                  }
                </p>
                <p>
                  {
                    "Our mission extends beyond racing—we're cultivating the next generation of automotive engineers, providing hands-on experience that bridges classroom theory and real-world application."
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-card border border-border rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-muted-foreground">Years Active</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$500K+</div>
            <div className="text-sm text-muted-foreground">Annual Budget</div>
          </div>
        </div>
      </div>
    </section>
  )
}
