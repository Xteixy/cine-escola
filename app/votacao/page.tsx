"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, Trophy, Vote, Star, Calendar } from "lucide-react"
import Image from "next/image"

const currentAuction = {
  id: 1,
  title: "Escolha o Filme do Próximo Final de Semana",
  description: "Vote no filme que você mais quer ver na sessão especial deste sábado às 20h!",
  endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 dias a partir de agora
  totalVotes: 1247,
  movies: [
    {
      id: 1,
      title: "Avatar: O Caminho da Água",
      genre: "Ficção Científica",
      year: 2022,
      votes: 456,
      percentage: 36.6,
      image: "/generic-sci-fi-poster.jpg",
      description: "Jake Sully vive com sua nova família formada no planeta de Pandora.",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      genre: "Ação",
      year: 2022,
      votes: 389,
      percentage: 31.2,
      image: "/top-gun-movie-poster.jpg",
      description: "Pete 'Maverick' Mitchell enfrenta seu passado enquanto treina uma nova geração de pilotos.",
    },
    {
      id: 3,
      title: "Pantera Negra: Wakanda Para Sempre",
      genre: "Ação",
      year: 2022,
      votes: 278,
      percentage: 22.3,
      image: "/black-panther-poster.jpg",
      description: "O reino de Wakanda luta para proteger sua nação após a morte do Rei T'Challa.",
    },
    {
      id: 4,
      title: "Tudo em Todo Lugar ao Mesmo Tempo",
      genre: "Ficção Científica",
      year: 2022,
      votes: 124,
      percentage: 9.9,
      image: "/everything-everywhere-movie-poster.jpg",
      description: "Uma aventura multiversal sobre uma dona de lavanderia que deve salvar o mundo.",
    },
  ],
}

const pastAuctions = [
  {
    id: 2,
    title: "Sessão de Terror - Halloween Especial",
    winner: "O Exorcista",
    date: "2024-10-31",
    totalVotes: 892,
    status: "Finalizado",
  },
  {
    id: 3,
    title: "Clássicos do Cinema",
    winner: "Casablanca",
    date: "2024-10-24",
    totalVotes: 756,
    status: "Finalizado",
  },
  {
    id: 4,
    title: "Filmes de Ação",
    winner: "Mad Max: Estrada da Fúria",
    date: "2024-10-17",
    totalVotes: 1034,
    status: "Finalizado",
  },
]

const topVoters = [
  { name: "Ana Silva", votes: 23, avatar: "/placeholder-user.jpg" },
  { name: "Carlos Santos", votes: 19, avatar: "/placeholder-user.jpg" },
  { name: "Maria Oliveira", votes: 17, avatar: "/placeholder-user.jpg" },
  { name: "João Costa", votes: 15, avatar: "/placeholder-user.jpg" },
  { name: "Lucia Ferreira", votes: 12, avatar: "/placeholder-user.jpg" },
]

export default function VotacaoPage() {
  const [userVote, setUserVote] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = currentAuction.endTime.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setTimeLeft("Votação encerrada")
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleVote = (movieId: number) => {
    if (userVote === null) {
      setUserVote(movieId)
      // Aqui você faria a chamada para a API para registrar o voto
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sistema de <span className="text-primary">Votação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participe da escolha dos filmes que serão exibidos nos finais de semana. Sua opinião importa!
          </p>
        </div>

        {/* Current Auction */}
        <div className="mb-12">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{currentAuction.title}</CardTitle>
                  <CardDescription className="text-base">{currentAuction.description}</CardDescription>
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  <Clock className="h-4 w-4 mr-2" />
                  {timeLeft}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {currentAuction.totalVotes} votos
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Sessão: Sábado, 20h
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Voting Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {currentAuction.movies.map((movie, index) => (
            <Card
              key={movie.id}
              className={`group cursor-pointer transition-all duration-300 ${
                userVote === movie.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => handleVote(movie.id)}
            >
              <CardHeader>
                <div className="flex gap-4">
                  <div className="relative w-20 h-28 flex-shrink-0">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover rounded-md"
                    />
                    {index === 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-primary">
                        <Trophy className="h-3 w-3 mr-1" />
                        1º
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{movie.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{movie.genre}</Badge>
                      <span className="text-sm text-muted-foreground">{movie.year}</span>
                    </div>
                    <CardDescription className="line-clamp-2">{movie.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {movie.votes} votos ({movie.percentage}%)
                    </span>
                    {userVote === movie.id && (
                      <Badge variant="outline" className="text-primary border-primary">
                        <Vote className="h-3 w-3 mr-1" />
                        Seu voto
                      </Badge>
                    )}
                  </div>
                  <Progress value={movie.percentage} className="h-2" />
                  {userVote === null && (
                    <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                      <Vote className="h-4 w-4 mr-2" />
                      Votar neste filme
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Past Auctions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Votações Anteriores</h2>
            <div className="space-y-4">
              {pastAuctions.map((auction) => (
                <Card key={auction.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{auction.title}</CardTitle>
                        <CardDescription>
                          Vencedor: <strong>{auction.winner}</strong>
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{auction.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(auction.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {auction.totalVotes} votos
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Voters */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Top Votantes do Mês</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Ranking de Participação
                </CardTitle>
                <CardDescription>Os usuários mais ativos nas votações deste mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topVoters.map((voter, index) => (
                    <div key={voter.name} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={voter.avatar || "/placeholder.svg"} alt={voter.name} />
                        <AvatarFallback>
                          {voter.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{voter.name}</p>
                        <p className="text-sm text-muted-foreground">{voter.votes} votos</p>
                      </div>
                      {index === 0 && (
                        <Badge className="bg-primary">
                          <Star className="h-3 w-3 mr-1" />
                          MVP
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
