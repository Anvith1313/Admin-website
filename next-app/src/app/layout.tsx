import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRMB Admin Portal',
  description: 'Naveen Reddy Marriage Bureau — Admin Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
