import React, { createContext, useContext, useState, ReactNode } from 'react'
import { AlertColor } from '@mui/material'
import Notification from '../components/common/Notification'

interface NotificationContextType {
  showNotification: (message: string, severity?: AlertColor) => void
  showSuccess: (message: string) => void
  showError: (message: string) => void
  showWarning: (message: string) => void
  showInfo: (message: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

interface NotificationProviderProps {
  children: ReactNode
}

interface NotificationState {
  open: boolean
  message: string
  severity: AlertColor
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState>({
    open: false,
    message: '',
    severity: 'info',
  })

  const showNotification = (message: string, severity: AlertColor = 'info') => {
    setNotification({
      open: true,
      message,
      severity,
    })
  }

  const showSuccess = (message: string) => showNotification(message, 'success')
  const showError = (message: string) => showNotification(message, 'error')
  const showWarning = (message: string) => showNotification(message, 'warning')
  const showInfo = (message: string) => showNotification(message, 'info')

  const handleClose = () => {
    setNotification(prev => ({ ...prev, open: false }))
  }

  const value: NotificationContextType = {
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleClose}
      />
    </NotificationContext.Provider>
  )
}

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
