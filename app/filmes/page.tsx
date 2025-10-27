"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Play, Heart, Search, Filter, Lock } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/contexts/AuthContext"
import { usePopup } from "@/contexts/PopupContext"

const movies = [
  {
    id: 1,
    title: "Dune: Parte Dois",
    genre: "Ficção Científica",
    year: 2024,
    rating: 8.8,
    duration: "166 min",
    image: "/dune-inspired-poster.png",
    description:
      "Paul Atreides une-se a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  },
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    rating: 8.4,
    duration: "180 min",
    image: "/images/posters/oppenheimer-poster.png",
    description:
      "A história de J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
  },
  {
    id: 3,
    title: "Homem-Aranha: Através do Aranhaverso",
    genre: "Animação",
    year: 2023,
    rating: 8.7,
    duration: "140 min",
    image: "/spiderman-movie-poster.jpg",
    description: "Miles Morales embarca em uma aventura épica através do multiverso com outros Homens-Aranha.",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"],
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    genre: "Ação",
    year: 2022,
    rating: 8.3,
    duration: "130 min",
    image: "/top-gun-movie-poster.jpg",
    description:
      "Depois de mais de 30 anos de serviço, Pete 'Maverick' Mitchell continua sendo um dos melhores pilotos da Marinha.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
  },
  {
    id: 5,
    title: "Pantera Negra: Wakanda Para Sempre",
    genre: "Ação",
    year: 2022,
    rating: 6.7,
    duration: "161 min",
    image: "/black-panther-poster.jpg",
    description:
      "A rainha Ramonda, Shuri, M'Baku, Okoye e as Dora Milaje lutam para proteger sua nação das potências mundiais.",
    director: "Ryan Coogler",
    cast: ["Letitia Wright", "Angela Bassett", "Tenoch Huerta"],
  },
  {
    id: 6,
    title: "Tudo em Todo Lugar ao Mesmo Tempo",
    genre: "Ficção Científica",
    year: 2022,
    rating: 7.8,
    duration: "139 min",
    image: "/everything-everywhere-movie-poster.jpg",
    description:
      "Uma dona de lavanderia chinesa-americana é varrida por uma aventura louca onde ela sozinha pode salvar o mundo.",
    director: "Daniels",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
  },
]

const genres = ["Todos", "Ação", "Drama", "Ficção Científica", "Animação", "Comédia", "Terror", "Romance"]

export default function FilmesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("Todos")
  const [favorites, setFavorites] = useState<number[]>([])
  const { user } = useAuth()
  const { showFavoritePopup } = usePopup()

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "Todos" || movie.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const toggleFavorite = (movieId: number) => {
    // Se não estiver logado, mostrar popup de cadastro
    if (!user) {
      showFavoritePopup()
      return
    }

    setFavorites((prev) => (prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]))
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Catálogo de <span className="text-primary">Filmes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os melhores filmes de todas as categorias, com análises detalhadas e informações completas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar filmes ou diretores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por gênero" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Assistir
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleFavorite(movie.id)}
                      className={favorites.includes(movie.id) ? "text-red-500 border-red-500" : ""}
                    >
                      {!user ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <Heart className={`h-4 w-4 ${favorites.includes(movie.id) ? "fill-current" : ""}`} />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{movie.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{movie.genre}</Badge>
                      <span className="text-sm text-muted-foreground">{movie.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{movie.rating}</span>
                  </div>
                </div>
                <CardDescription className="line-clamp-3">{movie.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Diretor:</strong> {movie.director}
                  </div>
                  <div>
                    <strong>Duração:</strong> {movie.duration}
                  </div>
                  <div>
                    <strong>Elenco:</strong> {movie.cast.join(", ")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhum filme encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  )
}
