import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sympazy - Smart Organizer for WhatsApp',
  description: 'Sympazy is a powerful WhatsApp organization tool that helps businesses and individuals manage their WhatsApp communications more effectively.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 