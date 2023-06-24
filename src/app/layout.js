import { Navbar } from '@/components/Navbar'
import { MainContent } from '@/components/MainContent'
import { Footer } from '@/components/Footer'

import './globals.css'
import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

const nunito = Nunito({ subsets: ['latin'] })

const materialSymbols = localFont({
    variable: '--material-icons', // Variable name (to reference after in CSS/styles)
    style: 'normal',
    src: '../../public/fonts/Material_Icons.woff2', // This is a reference to woff2 file from NPM package "material-symbols"
    display: 'block',
    weight: '100 700',
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
                <MainContent>{children}</MainContent>
                <Footer />
            </body>
        </html>
    )
}
