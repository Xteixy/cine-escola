"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
                🎬 CINE ESCOLA - CINEMA, EDUCAÇÃO, PIPOCA
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="gradient-text">Descubra, Vote e</span>
              <br />
              <span className="text-primary">Escolha os Filmes</span>
              <br />
              <span className="gradient-text">do Fim de Semana</span>
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Participe da nossa comunidade cinematográfica e vote nos filmes que serão exibidos. Sua opinião importa na
            programação do fim de semana!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Começar a Votar
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 bg-transparent text-lg px-8 py-4 h-auto"
              >
                Explorar Filmes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { value: "500+", label: "Filmes Disponíveis" },
              { value: "1.2K+", label: "Usuários Ativos" },
              { value: "48", label: "Votações Realizadas" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
