"use client"

import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

type Props = {
  left: React.ReactNode
  right: React.ReactNode
}

export default function DocsSplitLayout({ left, right }: Props) {
  const [SplitPane, setSplitPane] = useState<React.ComponentType<Record<string, unknown>> | null>(null)

  useEffect(() => {
    // Dynamically import a modern split component at runtime. We prefer
    // 'react-split' (wrapper around split.js) which supports modern React.
    let mounted = true

    async function loadSplit() {
      try {
        const mod = await import('react-split')
        if (!mounted) return
        // react-split exports a default React component
        setSplitPane(() => (mod.default || mod) as React.ComponentType<Record<string, unknown>>)
      } catch {
        if (mounted) setSplitPane(null)
      }
    }

    loadSplit()

    return () => {
      mounted = false
    }
  }, [])

  if (!SplitPane) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 24 }}>
        <Box sx={{ p: 2, height: '100%', overflow: 'auto', bgcolor: 'background.paper' }}>{left}</Box>
        <Box sx={{ p: 2, height: '100%', overflow: 'auto' }}>{right}</Box>
      </div>
    )
  }

  const SP = SplitPane
  // react-split API: <Split sizes={[25,75]} minSize={100}>{left}{right}</Split>
  return (
    <div style={{ height: '100%', minHeight: '60vh' }}>
      <SP sizes={[32, 68]} minSize={180} style={{ display: 'flex', height: '100%' }}>
        <Box sx={{ p: 2, height: '100%', overflow: 'auto', bgcolor: 'background.paper' }}>{left}</Box>
        <Box sx={{ p: 2, height: '100%', overflow: 'auto' }}>{right}</Box>
      </SP>
    </div>
  )
}
