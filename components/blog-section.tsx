import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Os 10 Filmes Mais Aguardados de 2024",
    excerpt:
      "Descubra quais são os lançamentos cinematográficos que prometem marcar o ano de 2024 e por que você não pode perdê-los.",
    author: "Maria Silva",
    date: "15 Mar 2024",
    category: "Lançamentos",
    image: "/cinema-2024-movies-collage.jpg",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "A Evolução dos Efeitos Especiais no Cinema",
    excerpt:
      "Uma jornada através da história dos efeitos visuais, desde os primórdios até as tecnologias mais avançadas de hoje.",
    author: "João Santos",
    date: "12 Mar 2024",
    category: "Tecnologia",
    image: "/movie-special-effects-behind-scenes.jpg",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Análise: Por que 'Dune' Conquistou o Público",
    excerpt:
      "Uma análise profunda sobre os elementos que fizeram de Dune um dos maiores sucessos da ficção científica moderna.",
    author: "Ana Costa",
    date: "10 Mar 2024",
    category: "Análise",
    image: "/dune-movie-analysis-desert-scene.jpg",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Entrevista Exclusiva com Diretor Brasileiro",
    excerpt: "Conversamos com um dos diretores mais promissores do cinema nacional sobre seus próximos projetos.",
    author: "Carlos Lima",
    date: "8 Mar 2024",
    category: "Entrevista",
    image: "/film-director-interview-behind-camera.jpg",
    readTime: "10 min",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            BLOG CINE ESCOLA
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Últimas do Cinema</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Fique por dentro das novidades, análises e bastidores do mundo cinematográfico. Conteúdo exclusivo para
            verdadeiros amantes do cinema.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">DESTAQUE</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{blogPosts[0].category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-balance">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground text-pretty">{blogPosts[0].excerpt}</p>

                  <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="movie-card overflow-hidden cursor-pointer">
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-black/60 text-white border-none">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg text-balance">{post.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{post.excerpt}</p>

                  <button className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                    Ler Mais
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  )
}
