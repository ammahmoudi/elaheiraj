import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Elahe Hosseini Iraj",
  description: 'Portfolio of Elahe Iraj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ `${inter.className} bg-gray-200	 dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ThemeSwitcher /> */}
          <main>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
