"use client"

import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "Team Captain",
    department: "Mechanical Engineering",
    image: "/professional-female-engineer.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Engineer",
    department: "Aerospace Engineering",
    image: "/professional-male-engineer.png",
  },
  {
    name: "Emily Watson",
    role: "Powertrain Lead",
    department: "Electrical Engineering",
    image: "/professional-female-electrical-engineer.jpg",
  },
  {
    name: "David Kim",
    role: "Aerodynamics Lead",
    department: "Mechanical Engineering",
    image: "/professional-male-aerodynamics-engineer.jpg",
  },
  {
    name: "Priya Patel",
    role: "Electronics Lead",
    department: "Computer Engineering",
    image: "/professional-female-computer-engineer.jpg",
  },
  {
    name: "James Foster",
    role: "Chassis Lead",
    department: "Materials Science",
    image: "/professional-male-materials-engineer.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Meet the engineers pushing the boundaries of performance"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.department}</p>

                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
