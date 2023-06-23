import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { vt323 } from './fonts'

export const metadata = {
  title: 'Lorebuilder',
  description: 'Gerenciador de campanhas de TTRPG.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${vt323.className} bg-slate-200`}>
        <div className='container'>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
