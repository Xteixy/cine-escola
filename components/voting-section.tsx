"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Vote, Clock, Users, Trophy, Lock } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { usePopup } from "@/contexts/PopupContext"

const votingMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Ficção Científica",
    releaseDate: "2024-03-01",
    votes: 1247,
    percentage: 35,
    image: "/dune-inspired-poster.png",
  },
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Drama",
    releaseDate: "2024-03-01",
    votes: 1089,
    percentage: 31,
    image: "/images/posters/oppenheimer-poster.png",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    genre: "Ação",
    releaseDate: "2024-03-01",
    votes: 892,
    percentage: 25,
    image: "/spiderman-movie-poster.jpg",
  },
  {
    id: 4,
    title: "The Batman",
    genre: "Ação",
    releaseDate: "2024-03-01",
    votes: 324,
    percentage: 9,
    image: "/dark-knight-poster.png",
  },
]

export function VotingSection() {
  const [userVotes, setUserVotes] = useState<number[]>([])
  const [isVoting, setIsVoting] = useState<number | null>(null)
  const { user } = useAuth()
  const { showVotePopup } = usePopup()

  const handleVote = (movieId: number) => {
    // Se não estiver logado, mostrar popup de cadastro
    if (!user) {
      showVotePopup()
      return
    }

    if (userVotes.includes(movieId)) return

    setIsVoting(movieId)
    setTimeout(() => {
      setUserVotes([...userVotes, movieId])
      setIsVoting(null)
    }, 1000)
  }

  const totalVotes = votingMovies.reduce((sum, movie) => sum + movie.votes, 0)

  return (
    <section id="votacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            VOTAÇÃO ATIVA
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Leilão de Estreias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Vote nos filmes que você mais quer ver estrear neste fim de semana. Os mais votados serão exibidos em nossa
            plataforma!
          </p>
        </div>

        {/* Voting Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{totalVotes.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total de Votos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">2d 14h</div>
              <div className="text-sm text-muted-foreground">Tempo Restante</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">Filmes Concorrendo</div>
            </CardContent>
          </Card>
        </div>

        {/* Voting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {votingMovies.map((movie, index) => (
            <Card key={movie.id} className="movie-card overflow-hidden">
              <div className="relative">
                <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-black/60 text-white border-none">
                    #{index + 1}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-balance">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground">{movie.genre}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Votos</span>
                      <span className="font-medium">{movie.votes.toLocaleString()}</span>
                    </div>
                    <Progress value={movie.percentage} className="h-2" />
                    <div className="text-right text-sm text-muted-foreground">{movie.percentage}%</div>
                  </div>

                  <Button
                    className={`w-full ${
                      userVotes.includes(movie.id)
                        ? "bg-green-600 hover:bg-green-700"
                        : !user
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    } ${isVoting === movie.id ? "vote-animation" : ""}`}
                    onClick={() => handleVote(movie.id)}
                    disabled={userVotes.includes(movie.id) || isVoting === movie.id}
                  >
                    {!user ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Cadastre-se para votar
                      </>
                    ) : (
                      <>
                        <Vote className="mr-2 h-4 w-4" />
                        {userVotes.includes(movie.id) ? "Votado!" : isVoting === movie.id ? "Votando..." : "Votar"}
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Não tem conta ainda? Cadastre-se para participar das votações!</p>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
            Criar Conta Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
