"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Star, Eye, Heart, Calendar } from "lucide-react"
import Image from "next/image"

const trendingMovies = [
  {
    id: 1,
    title: "Dune: Parte Dois",
    trend: "up",
    change: "+15%",
    rating: 8.8,
    views: "2.3M",
    likes: "456K",
    image: "/dune-inspired-poster.png",
    genre: "Ficção Científica",
    releaseDate: "2024-03-01",
  },
  {
    id: 2,
    title: "Oppenheimer",
    trend: "up",
    change: "+12%",
    rating: 8.4,
    views: "1.8M",
    likes: "389K",
    image: "/images/posters/oppenheimer-poster.png",
    genre: "Drama",
    releaseDate: "2023-07-21",
  },
  {
    id: 3,
    title: "Homem-Aranha: Através do Aranhaverso",
    trend: "up",
    change: "+8%",
    rating: 8.7,
    views: "1.5M",
    likes: "312K",
    image: "/spiderman-movie-poster.jpg",
    genre: "Animação",
    releaseDate: "2023-06-02",
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    trend: "down",
    change: "-3%",
    rating: 8.3,
    views: "1.2M",
    likes: "278K",
    image: "/top-gun-movie-poster.jpg",
    genre: "Ação",
    releaseDate: "2022-05-27",
  },
  {
    id: 5,
    title: "Tudo em Todo Lugar ao Mesmo Tempo",
    trend: "up",
    change: "+5%",
    rating: 7.8,
    views: "980K",
    likes: "234K",
    image: "/everything-everywhere-movie-poster.jpg",
    genre: "Ficção Científica",
    releaseDate: "2022-03-25",
  },
]

const genreTrends = [
  { genre: "Ficção Científica", growth: "+23%", movies: 156, color: "bg-blue-500" },
  { genre: "Ação", growth: "+18%", movies: 234, color: "bg-red-500" },
  { genre: "Drama", growth: "+15%", movies: 189, color: "bg-green-500" },
  { genre: "Animação", growth: "+12%", movies: 87, color: "bg-purple-500" },
  { genre: "Comédia", growth: "+8%", movies: 145, color: "bg-yellow-500" },
  { genre: "Terror", growth: "+5%", movies: 98, color: "bg-orange-500" },
]

const weeklyStats = [
  { day: "Segunda", views: 45000, votes: 1200 },
  { day: "Terça", views: 52000, votes: 1450 },
  { day: "Quarta", views: 48000, votes: 1300 },
  { day: "Quinta", views: 61000, votes: 1680 },
  { day: "Sexta", views: 78000, votes: 2100 },
  { day: "Sábado", views: 95000, votes: 2800 },
  { day: "Domingo", views: 87000, votes: 2400 },
]

const upcomingReleases = [
  {
    title: "Guardiões da Galáxia Vol. 3",
    releaseDate: "2024-05-05",
    hype: 92,
    image: "/generic-sci-fi-poster.jpg",
  },
  {
    title: "Indiana Jones 5",
    releaseDate: "2024-06-30",
    hype: 88,
    image: "/generic-movie-poster.png",
  },
  {
    title: "Missão Impossível 8",
    releaseDate: "2024-07-14",
    hype: 85,
    image: "/top-gun-movie-poster.jpg",
  },
]

export default function TendenciasPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Tendências</span> do Cinema
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe os filmes mais populares, gêneros em alta e as tendências do mundo cinematográfico.
          </p>
        </div>

        <Tabs defaultValue="trending" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trending">Em Alta</TabsTrigger>
            <TabsTrigger value="genres">Gêneros</TabsTrigger>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="upcoming">Próximos</TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Trending Movie */}
              <div className="lg:col-span-2">
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <Badge className="bg-primary">Filme da Semana</Badge>
                    </div>
                    <CardTitle className="text-2xl">Filme Mais Popular</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-6">
                      <div className="relative w-32 h-48 flex-shrink-0">
                        <Image
                          src={trendingMovies[0].image || "/placeholder.svg"}
                          alt={trendingMovies[0].title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{trendingMovies[0].title}</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{trendingMovies[0].rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span>{trendingMovies[0].views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-muted-foreground" />
                            <span>{trendingMovies[0].likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 font-semibold">{trendingMovies[0].change}</span>
                          <span className="text-muted-foreground">esta semana</span>
                        </div>
                        <Badge variant="secondary">{trendingMovies[0].genre}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Estatísticas Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total de Visualizações</span>
                      <span className="font-bold">12.3M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Votos Esta Semana</span>
                      <span className="font-bold">15.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Filmes Avaliados</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Usuários Ativos</span>
                      <span className="font-bold">8.9K</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Trending List */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Top 5 Filmes em Alta</h2>
              <div className="space-y-4">
                {trendingMovies.map((movie, index) => (
                  <Card key={movie.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                          {index + 1}
                        </div>
                        <div className="relative w-16 h-24 flex-shrink-0">
                          <Image
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="secondary">{movie.genre}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{movie.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{movie.views}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {movie.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`font-semibold ${movie.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                            {movie.change}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="genres" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Gêneros em Alta</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {genreTrends.map((genre, index) => (
                  <Card key={genre.genre} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{genre.genre}</CardTitle>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 font-semibold">{genre.growth}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className={`h-2 rounded-full ${genre.color}`} />
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Filmes disponíveis</span>
                          <span className="font-semibold">{genre.movies}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Posição no ranking</span>
                          <span className="font-semibold">#{index + 1}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Semanal</CardTitle>
                  <CardDescription>Visualizações e votos por dia da semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyStats.map((stat) => (
                      <div key={stat.day} className="flex items-center justify-between">
                        <span className="font-medium">{stat.day}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-muted-foreground" />
                            <span>{stat.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-muted-foreground" />
                            <span>{stat.votes.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas Globais</CardTitle>
                  <CardDescription>Estatísticas gerais da plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">2.4M</div>
                      <div className="text-sm text-muted-foreground">Usuários Registrados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">15.7K</div>
                      <div className="text-sm text-muted-foreground">Filmes no Catálogo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">892K</div>
                      <div className="text-sm text-muted-foreground">Votos Este Mês</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Próximos Lançamentos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingReleases.map((movie) => (
                  <Card key={movie.title} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                        <Badge className="absolute top-2 right-2 bg-primary">Em Breve</Badge>
                      </div>
                      <CardTitle className="text-lg">{movie.title}</CardTitle>
                      <CardDescription>
                        Lançamento: {new Date(movie.releaseDate).toLocaleDateString("pt-BR")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Nível de Expectativa</span>
                          <span className="font-semibold">{movie.hype}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${movie.hype}%` }}
                          />
                        </div>
                        <Button className="w-full bg-transparent" variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Lembrar-me
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
