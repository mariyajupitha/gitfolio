"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gauge, Cog, Battery } from "lucide-react"

const cars = [
  {
    name: "VR-24E",
    year: "2024",
    type: "Electric Formula",
    specs: {
      power: "250 HP",
      torque: "320 Nm",
      weight: "220 kg",
    },
    image: "/modern-electric-formula-racing-car-dark.jpg",
  },
  {
    name: "VR-23C",
    year: "2023",
    type: "Combustion Formula",
    specs: {
      power: "280 HP",
      torque: "260 Nm",
      weight: "245 kg",
    },
    image: "/formula-racing-car-combustion-engine-dark.jpg",
  },
  {
    name: "VR-22H",
    year: "2022",
    type: "Hybrid Prototype",
    specs: {
      power: "300 HP",
      torque: "380 Nm",
      weight: "265 kg",
    },
    image: "/hybrid-formula-racing-car-prototype-dark.jpg",
  },
]

export function Cars() {
  return (
    <section id="cars" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">Our Machines</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Cutting-edge engineering meets raw performance"}
          </p>
        </div>

        <div className="space-y-12">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold">
                    {car.year}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">{car.name}</h3>
                      <p className="text-lg text-muted-foreground">{car.type}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Gauge className="w-5 h-5" />
                        </div>
                        <div className="text-2xl font-bold">{car.specs.power}</div>
                        <div className="text-xs text-muted-foreground uppercase">Power</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Cog className="w-5 h-5" />
                        </div>
                        <div className="text-2xl font-bold">{car.specs.torque}</div>
                        <div className="text-xs text-muted-foreground uppercase">Torque</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Battery className="w-5 h-5" />
                        </div>
                        <div className="text-2xl font-bold">{car.specs.weight}</div>
                        <div className="text-xs text-muted-foreground uppercase">Weight</div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Technical Specs
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
