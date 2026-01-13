import "./globals.css"
import Head from 'next/head'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: "Applecounter",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
