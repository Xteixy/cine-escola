"use client"

import { createContext, useContext, ReactNode } from 'react'
import { usePopupSubscription } from '@/hooks/use-popup-subscription'
import { PopupSubscription } from '@/components/popup-subscription'

interface PopupContextType {
  showVotePopup: () => void
  showFavoritePopup: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const { isOpen, trigger, showPopup, showFavoritePopup, hidePopup } = usePopupSubscription()

  return (
    <PopupContext.Provider value={{ showVotePopup: showPopup, showFavoritePopup }}>
      {children}
      <PopupSubscription 
        isOpen={isOpen} 
        onClose={hidePopup} 
        trigger={trigger} 
      />
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}



