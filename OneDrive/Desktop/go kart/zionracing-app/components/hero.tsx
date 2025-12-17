"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/formula-racing-car-in-motion-dark-background.jpg" alt="Racing car" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-balance">
              VELOCITY
              <span className="block text-primary">RACING</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {"Engineering excellence at 200+ mph"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base">
              View Our Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-border bg-transparent hover:bg-secondary"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Championships</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-primary">250+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Horsepower</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-primary">0-60</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">In 2.8s</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
