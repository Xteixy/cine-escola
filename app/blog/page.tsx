"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Eye, Heart, MessageCircle, Search, BookOpen } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "A Evolução dos Efeitos Especiais no Cinema",
    excerpt:
      "Desde os primórdios do cinema até os dias atuais, os efeitos especiais revolucionaram a forma como contamos histórias na tela grande.",
    content: "Uma análise profunda sobre como a tecnologia transformou a indústria cinematográfica...",
    image: "/movie-special-effects-behind-scenes.jpg",
    author: {
      name: "Carlos Mendes",
      avatar: "/placeholder-user.jpg",
      role: "Editor Chefe",
    },
    category: "Tecnologia",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    views: 2340,
    likes: 156,
    comments: 23,
    featured: true,
  },
  {
    id: 2,
    title: "Análise: Por que 'Dune' Conquistou o Público",
    excerpt:
      "Uma análise detalhada dos elementos que fizeram de Dune um dos maiores sucessos da ficção científica moderna.",
    content: "Denis Villeneuve conseguiu adaptar o impossível...",
    image: "/dune-movie-analysis-desert-scene.jpg",
    author: {
      name: "Ana Silva",
      avatar: "/placeholder-user.jpg",
      role: "Crítica de Cinema",
    },
    category: "Análise",
    publishedAt: "2024-01-12",
    readTime: "12 min",
    views: 1890,
    likes: 234,
    comments: 45,
    featured: false,
  },
  {
    id: 3,
    title: "Entrevista Exclusiva com Diretor Brasileiro",
    excerpt: "Conversamos com um dos diretores mais promissores do cinema nacional sobre seus próximos projetos.",
    content: "Em uma conversa exclusiva, o diretor revela seus planos...",
    image: "/film-director-interview-behind-camera.jpg",
    author: {
      name: "Roberto Santos",
      avatar: "/placeholder-user.jpg",
      role: "Jornalista",
    },
    category: "Entrevista",
    publishedAt: "2024-01-10",
    readTime: "15 min",
    views: 1456,
    likes: 189,
    comments: 67,
    featured: false,
  },
  {
    id: 4,
    title: "Os Melhores Filmes de 2024 Até Agora",
    excerpt: "Uma seleção cuidadosa dos filmes que marcaram o primeiro semestre de 2024 e que você não pode perder.",
    content: "2024 tem sido um ano excepcional para o cinema...",
    image: "/cinema-2024-movies-collage.jpg",
    author: {
      name: "Maria Oliveira",
      avatar: "/placeholder-user.jpg",
      role: "Crítica de Cinema",
    },
    category: "Lista",
    publishedAt: "2024-01-08",
    readTime: "10 min",
    views: 3210,
    likes: 298,
    comments: 89,
    featured: false,
  },
  {
    id: 5,
    title: "Como o Cinema Independente Está Mudando",
    excerpt: "O cinema independente passa por uma revolução com novas plataformas e formas de distribuição.",
    content: "As mudanças no mercado cinematográfico...",
    image: "/generic-movie-poster.png",
    author: {
      name: "João Costa",
      avatar: "/placeholder-user.jpg",
      role: "Analista de Mercado",
    },
    category: "Indústria",
    publishedAt: "2024-01-05",
    readTime: "7 min",
    views: 987,
    likes: 123,
    comments: 34,
    featured: false,
  },
  {
    id: 6,
    title: "Bastidores: Como São Feitas as Cenas de Ação",
    excerpt:
      "Um olhar por trás das câmeras para entender como são criadas as sequências de ação mais espetaculares do cinema.",
    content: "As cenas de ação são uma das partes mais complexas...",
    image: "/top-gun-movie-poster.jpg",
    author: {
      name: "Pedro Lima",
      avatar: "/placeholder-user.jpg",
      role: "Especialista em Produção",
    },
    category: "Bastidores",
    publishedAt: "2024-01-03",
    readTime: "11 min",
    views: 1678,
    likes: 201,
    comments: 56,
    featured: false,
  },
]

const categories = ["Todos", "Análise", "Entrevista", "Tecnologia", "Lista", "Indústria", "Bastidores"]

const featuredPost = blogPosts.find((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const filteredPosts = regularPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Blog</span> Cine Escola
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artigos, análises, entrevistas e tudo sobre o mundo do cinema. Conteúdo exclusivo para cinéfilos.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar artigos, autores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "Todos" && !searchTerm && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Artigo em Destaque</h2>
            </div>
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary">{featuredPost.category}</Badge>
                    <Badge variant="outline">Destaque</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-4 line-clamp-3">{featuredPost.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={featuredPost.author.avatar || "/placeholder.svg"}
                          alt={featuredPost.author.name}
                        />
                        <AvatarFallback>
                          {featuredPost.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{featuredPost.author.name}</p>
                        <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredPost.views.toLocaleString()}
                    </div>
                  </div>
                  <Button className="w-full md:w-auto">Ler Artigo Completo</Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === "Todos" ? "Todos os Artigos" : `Artigos de ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </div>
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1 transition-colors ${
                          likedPosts.includes(post.id) ? "text-red-500" : "hover:text-red-500"
                        }`}
                      >
                        <Heart className={`h-3 w-3 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </button>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Ler mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhum artigo encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Não Perca Nenhum Artigo</CardTitle>
              <CardDescription className="text-base">
                Receba nossos melhores artigos sobre cinema diretamente no seu email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Seu melhor email" className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">Inscrever-se</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
