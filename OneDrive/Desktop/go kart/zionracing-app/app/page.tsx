import { Hero } from "@/components/hero"
import { Achievements } from "@/components/achievements"
import { Cars } from "@/components/cars"
import { Gallery } from "@/components/gallery"
import { Team } from "@/components/team"
import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Achievements />
      <Cars />
      <Gallery />
      <Team />
      <About />
      <Footer />
    </div>
  )
}
