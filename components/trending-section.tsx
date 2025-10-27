import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Eye } from "lucide-react"

const trendingMovies = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    rating: 9.2,
    views: "2.1M",
    trend: "+15%",
    image: "/generic-sci-fi-poster.png",
    genre: "Ficção Científica",
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    rating: 8.9,
    views: "1.8M",
    trend: "+12%",
    image: "/top-gun-movie-poster.jpg",
    genre: "Ação",
  },
  {
    id: 3,
    title: "Black Panther: Wakanda Forever",
    rating: 8.7,
    views: "1.5M",
    trend: "+8%",
    image: "/black-panther-poster.png",
    genre: "Ação",
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    rating: 9.1,
    views: "1.2M",
    trend: "+20%",
    image: "/everything-everywhere-movie-poster.jpg",
    genre: "Drama",
  },
  {
    id: 5,
    title: "The Batman",
    rating: 8.8,
    views: "1.1M",
    trend: "+5%",
    image: "/dark-knight-poster.png",
    genre: "Ação",
  },
  {
    id: 6,
    title: "Dune",
    rating: 8.6,
    views: "980K",
    trend: "+3%",
    image: "/dune-inspired-poster.png",
    genre: "Ficção Científica",
  },
]

export function TrendingSection() {
  return (
    <section id="tendencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            <TrendingUp className="mr-2 h-4 w-4" />
            TENDÊNCIAS
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Filmes em Alta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubra os filmes mais assistidos e comentados da semana. Acompanhe as tendências e não perca nenhum
            sucesso!
          </p>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {trendingMovies.map((movie, index) => (
            <Card key={movie.id} className="movie-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Ranking Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className={`
                      ${
                        index === 0
                          ? "bg-yellow-500/90 text-black"
                          : index === 1
                            ? "bg-gray-400/90 text-black"
                            : index === 2
                              ? "bg-amber-600/90 text-white"
                              : "bg-black/60 text-white"
                      } 
                      border-none font-bold
                    `}
                  >
                    #{index + 1}
                  </Badge>
                </div>

                {/* Trend Indicator */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-green-500/90 text-white border-none">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    {movie.trend}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Movie Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-sm mb-1 text-balance">{movie.title}</h3>
                  <p className="text-xs text-gray-300 mb-2">{movie.genre}</p>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{movie.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{movie.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
            Ver Todas as Tendências
          </button>
        </div>
      </div>
    </section>
  )
}
