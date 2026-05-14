'use client'

import { useEffect, useRef } from 'react'

export default function AdminPortal() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function syncHeight() {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight}px`
      }
    }
    syncHeight()
    window.addEventListener('resize', syncHeight)
    return () => window.removeEventListener('resize', syncHeight)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src="/admin.html"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
      title="Admin Portal"
      allow="clipboard-write"
    />
  )
}
