import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Projector, Calendar, Music, GraduationCap, PartyPopper, Check, Phone, Mail, MapPin } from "lucide-react"

export default function ProjectoIOKAlIA() {
  const services = [
    {
      icon: PartyPopper,
      title: "Festas e Eventos",
      description: "Projetores de alta qualidade para tornar sua festa inesquecível",
    },
    {
      icon: GraduationCap,
      title: "Defesas Escolares",
      description: "Equipamento profissional para apresentações acadêmicas",
    },
    {
      icon: Music,
      title: "Karaokê",
      description: "Sistema completo de projeção para noites de karaokê",
    },
    {
      icon: Calendar,
      title: "Eventos Corporativos",
      description: "Soluções de projeção para reuniões e conferências",
    },
  ]

  const features = [
    "Projetores Full HD de alta luminosidade",
    "Tela de projeção inclusa",
    "Suporte técnico durante o evento",
    "Instalação e configuração gratuita",
    "Equipamento testado e garantido",
    "Flexibilidade de horários",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
              <Projector className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              PROJECTO <span className="text-primary">IOKAlIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Aluguel de Projetores para Todos os Seus Eventos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Preço Especial</p>
                <p className="text-5xl font-bold text-primary">10.000 Kz</p>
                <p className="text-sm text-muted-foreground mt-2">por evento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções de projeção para diversos tipos de eventos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Está Incluído</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nosso serviço completo garante que seu evento seja um sucesso, com equipamento de qualidade e suporte
                  profissional.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Pacote Completo</CardTitle>
                  <CardDescription>Tudo que você precisa para seu evento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-6 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Investimento</p>
                    <p className="text-5xl font-bold text-primary">10.000 Kz</p>
                    <p className="text-sm text-muted-foreground mt-2">por evento</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      Projetor Full HD
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      Tela de Projeção
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      Cabos e Adaptadores
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      Instalação Gratuita
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      Suporte Técnico
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Reservar Agora
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground">Faça sua reserva ou tire suas dúvidas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+244 XXX XXX XXX</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">contato@iokalia.ao</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Luanda, Angola</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="h-4 w-4 mr-2" />
                Fazer Reserva
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
