"use client"

import { Trophy, Target, Zap, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    value: "15",
    label: "Championships",
    description: "Regional & National Titles",
  },
  {
    icon: Target,
    value: "98%",
    label: "Completion Rate",
    description: "Race Finish Success",
  },
  {
    icon: Zap,
    value: "2.8s",
    label: "0-60 MPH",
    description: "Acceleration Time",
  },
  {
    icon: Award,
    value: "45+",
    label: "Awards",
    description: "Engineering Excellence",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">Race-Proven Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Decades of innovation, engineering, and championship victories"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative group">
              {/* Circular Motion Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-primary/20 animate-spin-slow" />
                <div
                  className="absolute w-40 h-40 rounded-full border border-primary/10 animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                />
              </div>

              {/* Content */}
              <div className="relative bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
