"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Projector, Calendar, Music, GraduationCap, PartyPopper, Check, Phone, Mail, MapPin, 
  Star, Shield, Clock, Award, Sparkles, TrendingUp, Users, Zap, BookOpen, Film
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function ProjectoIOKAlIA() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      icon: PartyPopper,
      title: "Festas e Eventos",
      description: "Projetores de alta qualidade para tornar sua festa inesquecível",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      icon: GraduationCap,
      title: "Defesas Escolares",
      description: "Equipamento profissional para apresentações acadêmicas",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Music,
      title: "Karaokê",
      description: "Sistema completo de projeção para noites de karaokê",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Calendar,
      title: "Eventos Corporativos",
      description: "Soluções de projeção para reuniões e conferências",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
  ]

  const features = [
    { icon: Zap, title: "Projetores Full HD de alta luminosidade", desc: "Imagem cristalina em qualquer ambiente" },
    { icon: Film, title: "Tela de projeção inclusa", desc: "Tela de qualidade profissional" },
    { icon: Shield, title: "Suporte técnico durante o evento", desc: "Equipe disponível 24/7" },
    { icon: Clock, title: "Instalação e configuração gratuita", desc: "Chegamos e montamos tudo" },
    { icon: Check, title: "Equipamento testado e garantido", desc: "Qualidade certificada" },
    { icon: Calendar, title: "Flexibilidade de horários", desc: "Adaptamos aos seus horários" },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Organizadora de Eventos",
      content: "Serviço excepcional! O projetor transformou nossa festa. Recomendo muito!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Professor",
      content: "Perfeito para defesas acadêmicas. Equipamento de alta qualidade e suporte incrível.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      content: "Melhor investimento para nosso evento corporativo. Profissionais e pontuais!",
      rating: 5
    }
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Eventos Realizados", color: "text-blue-600" },
    { icon: Star, value: "4.9/5", label: "Avaliação Média", color: "text-yellow-600" },
    { icon: Award, value: "100%", label: "Satisfação Garantida", color: "text-green-600" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Recomendação", color: "text-purple-600" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section - ENHANCED */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div 
            className="relative max-w-7xl mx-auto text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center p-3 bg-primary/20 backdrop-blur-sm rounded-full mb-6"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Projector className="h-12 w-12 text-primary" />
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-balance">
              PROJECTO <span className="gradient-text bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">IOKAlIA</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium">
              Aluguel de Projetores para Todos os Seus Eventos
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Transforme seu evento com projeção profissional de alta qualidade
            </p>

            {/* Pricing Card - Prominent */}
            <motion.div 
              className="inline-block p-8 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border-2 border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Preço Especial
              </Badge>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold text-primary">10.000</span>
                <span className="text-2xl md:text-3xl text-muted-foreground">Kz</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">por evento completo</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Reservar Agora
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver Portfólio
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center h-full border-border hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section - ENHANCED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="mr-2 h-4 w-4" />
                NOSSOS SERVIÇOS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Para Todos os Tipos de Eventos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções completas de projeção personalizadas para suas necessidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`h-full border-border hover:border-primary/50 transition-all cursor-pointer group ${selectedService === service.title ? 'border-primary shadow-lg' : ''}`}
                      onClick={() => setSelectedService(selectedService === service.title ? null : service.title)}
                    >
                      <CardHeader>
                        <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - ENHANCED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
                  POR QUE ESCOLHER
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Tudo Incluído no Pacote</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nosso serviço completo garante que seu evento seja um sucesso, com equipamento de qualidade e suporte profissional.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <CardTitle className="text-3xl mb-2">Pacote Completo</CardTitle>
                    <CardDescription className="text-base">Tudo que você precisa para seu evento</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="text-center py-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-2">Investimento</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-6xl font-bold text-primary">10.000</span>
                        <span className="text-2xl text-muted-foreground">Kz</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">por evento</p>
                    </div>
                    <ul className="space-y-4">
                      {["Projetor Full HD", "Tela de Projeção", "Cabos e Adaptadores", "Instalação Gratuita", "Suporte Técnico", "Garantia Total"].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-base">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Reservar Agora
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Star className="mr-2 h-4 w-4" />
                DEPOIMENTOS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cem anos de experiência traduzidos em satisfação
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-base mb-4 italic text-muted-foreground">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - ENHANCED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Phone className="mr-2 h-4 w-4" />
                CONTATO
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Entre em Contato Agora</h2>
              <p className="text-xl text-muted-foreground">Faça sua reserva ou tire suas dúvidas</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, title: "Telefone", info: "+244 XXX XXX XXX", color: "text-green-600" },
                { icon: Mail, title: "Email", info: "contato@iokalia.ao", color: "text-blue-600" },
                { icon: MapPin, title: "Localização", info: "Luanda, Angola", color: "text-red-600" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full text-center border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className={`h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
                          <contact.icon className={`h-8 w-8 ${contact.color}`} />
                        </div>
                        <CardTitle className="text-lg">{contact.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-medium">{contact.info}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Fazer Reserva Agora
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}