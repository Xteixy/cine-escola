"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { X, Star, Users, Vote, Gift, CheckCircle, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"

interface PopupSubscriptionProps {
  isOpen: boolean
  onClose: () => void
  trigger: 'timer' | 'vote' | 'favorite'
}

export function PopupSubscription({ isOpen, onClose, trigger }: PopupSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validar senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!")
      setIsSubmitting(false)
      return
    }
    
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!")
      setIsSubmitting(false)
      return
    }
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSuccess(true)
    setIsSubmitting(false)
    
    // Fechar popup após 2 segundos
    setTimeout(() => {
      onClose()
      setIsSuccess(false)
    }, 2000)
  }

  const getTitle = () => {
    switch (trigger) {
      case 'timer':
        return "🎬 Que tal se juntar à nossa comunidade?"
      case 'vote':
        return "🗳️ Cadastre-se para votar!"
      case 'favorite':
        return "❤️ Salve seus filmes favoritos!"
      default:
        return "Bem-vindo ao Cine Escola!"
    }
  }

  const getDescription = () => {
    switch (trigger) {
      case 'timer':
        return "Você está navegando há um tempo! Que tal se cadastrar e ter acesso a funcionalidades exclusivas?"
      case 'vote':
        return "Para votar nos filmes, você precisa estar cadastrado. É rápido e gratuito!"
      case 'favorite':
        return "Cadastre-se para salvar seus filmes favoritos e ter uma experiência personalizada!"
      default:
        return "Junte-se à nossa comunidade de cinéfilos!"
    }
  }

  if (user) {
    return null // Não mostrar popup se já estiver logado
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <DialogTitle className="text-lg font-bold">
                {getTitle()}
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            {getDescription()}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Inscrição realizada!</h3>
            <p className="text-sm text-muted-foreground">
              Obrigado por se juntar à nossa comunidade!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Benefícios */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                <Vote className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Vote nos filmes</p>
                  <p className="text-xs text-muted-foreground">Influencie a programação</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Comunidade exclusiva</p>
                  <p className="text-xs text-muted-foreground">Conecte-se com outros cinéfilos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                <Gift className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Conteúdo exclusivo</p>
                  <p className="text-xs text-muted-foreground">Artigos e análises especiais</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="submit" 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Cadastrando..." : "Cadastrar Gratuitamente"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={onClose}
                >
                  Talvez depois
                </Button>
              </div>
            </form>

            {/* Links alternativos */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">
                Já tem uma conta?
              </p>
              <Link 
                href="/login" 
                className="text-sm text-primary hover:underline font-medium"
                onClick={onClose}
              >
                Faça login aqui
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
