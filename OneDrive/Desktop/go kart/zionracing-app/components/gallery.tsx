"use client"

const images = [
  "/formula-racing-team-pit-stop-action.jpg",
  "/racing-car-workshop-engineering.jpg",
  "/formula-car-on-track-racing.jpg",
  "/racing-team-victory-celebration.jpg",
  "/formula-car-chassis-construction.jpg",
  "/racing-team-strategy-meeting.jpg",
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Behind the scenes of championship racing"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
