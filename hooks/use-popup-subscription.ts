"use client"

import { useState, useEffect, useCallback } from "react"
import { useAuth } from "@/contexts/AuthContext"

type PopupTrigger = 'timer' | 'vote' | 'favorite'

export function usePopupSubscription() {
  const [isOpen, setIsOpen] = useState(false)
  const [trigger, setTrigger] = useState<PopupTrigger>('timer')
  const [hasShownTimerPopup, setHasShownTimerPopup] = useState(false)
  const { user } = useAuth()

  // Timer de 1 minuto
  useEffect(() => {
    if (user || hasShownTimerPopup) return

    const timer = setTimeout(() => {
      setTrigger('timer')
      setIsOpen(true)
      setHasShownTimerPopup(true)
    }, 1 * 60 * 1000) // 1 minuto

    return () => clearTimeout(timer)
  }, [user, hasShownTimerPopup])

  // Verificar se já mostrou o popup no localStorage
  useEffect(() => {
    const hasShown = localStorage.getItem('cine-escola-popup-shown')
    if (hasShown === 'true') {
      setHasShownTimerPopup(true)
    }
  }, [])

  const showPopup = useCallback((newTrigger: PopupTrigger) => {
    if (user) return // Não mostrar se já estiver logado
    
    setTrigger(newTrigger)
    setIsOpen(true)
  }, [user])

  const hidePopup = useCallback(() => {
    setIsOpen(false)
    
    // Salvar no localStorage que já mostrou o popup
    if (trigger === 'timer') {
      localStorage.setItem('cine-escola-popup-shown', 'true')
    }
  }, [trigger])

  const showVotePopup = useCallback(() => {
    showPopup('vote')
  }, [showPopup])

  const showFavoritePopup = useCallback(() => {
    showPopup('favorite')
  }, [showPopup])

  return {
    isOpen,
    trigger,
    showPopup: showVotePopup, // Para votação
    showFavoritePopup,
    hidePopup
  }
}
