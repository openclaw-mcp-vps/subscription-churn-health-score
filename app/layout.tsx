import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Health Score for SaaS Subscription Churn Risk',
  description: 'Analyze user behavior patterns to predict subscription churn risk with actionable interventions. Built for SaaS founders with 100+ subscribers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ccaf119-0760-42be-b394-03c21dbd316b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
