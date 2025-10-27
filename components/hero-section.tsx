"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/movie-posters-wall-collection.jpg" alt="Movie Collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
              🎬 CINE ESCOLA - CINEMA, EDUCAÇÃO, PIPOCA
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="gradient-text">Descubra, Vote e</span>
              <br />
              <span className="text-primary">Escolha os Filmes</span>
              <br />
              <span className="gradient-text">do Fim de Semana</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Participe da nossa comunidade cinematográfica e vote nos filmes que serão exibidos. Sua opinião importa na
            programação do fim de semana!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Começar a Votar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 bg-transparent text-lg px-8 py-4 h-auto"
            >
              Explorar Filmes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Filmes Disponíveis</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1.2K+</div>
              <div className="text-muted-foreground">Usuários Ativos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">48</div>
              <div className="text-muted-foreground">Votações Realizadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
