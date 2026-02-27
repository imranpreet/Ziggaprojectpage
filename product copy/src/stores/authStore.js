// Minimal auth hook for demo; replace with real auth integration.
import React from 'react'

export function useAuth() {
  // Simple toggleable mock; in real app, read from context or global store
  const [loggedIn] = React.useState(true)
  const [user] = React.useState({ name: 'Collector' })
  return { loggedIn, user }
}

export default useAuth
