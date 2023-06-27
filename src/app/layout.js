import './globals.css'

import { Navbar } from '@/components/Navbar'
import { VLibras } from '@/components/VLibras'
import { MainContent } from '@/components/MainContent'
import { Footer } from '@/components/Footer'

import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

const nunito = Nunito({ subsets: ['latin'] })

const materialSymbols = localFont({
    variable: '--material-icons', // Variable name (to reference after in CSS/styles)
    style: 'normal',
    src: '../../public/fonts/Material_Icons.woff2', // This is a reference to woff2 file from NPM package "material-symbols"
    display: 'block',
    weight: '100 700'
})

export const metadata = {
    title: 'ACSSBS',
    description: 'Associação Comunitária de Surdos de São Bento do Sul.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={`${nunito.className} ${materialSymbols.variable}`}>
                <Navbar />
                <VLibras />
                <MainContent>{children}</MainContent>
                <Footer />
            </body>
        </html>
    )
}
