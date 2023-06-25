"use client"

import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'


export function Navbar() {

    // Utilizo o Pathname para Saber qual é a página ativa
    const pathname = usePathname()

    // Variável booleana para mostrar ou não os links da navbar
    const [showLinks, setShowLinks] = useState(false)

    // função que lida com o evento onClick do Botão do Menu
    function handleClickHamburgerMenu() {
        // Mostrar ou Ocultar os Links
        setShowLinks(!showLinks);
    }

    // Essa Função é Executada assim que o componente Navbar é carregado no navegador
    useEffect(() => {
        // Adiciona um Evento para Mostrar os Links se a Tela é Maior que 820px
        const handleResize = () => {
            setShowLinks(window.innerWidth > 820)
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <nav className={styles.Navbar}>
            { /* A Classe Responsive só é Criada se a Tela é Menor que 820px */ }
            <div className={styles.Responsive}>
                <div className={styles.LogoContainer}>
                    <Image className={styles.Logo} src="/Logo.svg" width={40} height={40} alt="Logo do Site" />
                    <p className={styles.TextLogo}>ACSSBS</p>
                </div>
                <button className={styles.HamburgerButton} onClick={handleClickHamburgerMenu}>
                    <span className={styles.HamburgerIcon}>menu</span>
                </button>
            </div>
            {
                showLinks && (
                    <div className={styles.LinkContainer}>
                        <Link className={pathname === '/' ? styles.LinkAtivo : styles.Link} href="/">Página Inicial</Link>
                        <Link className={pathname === '/news' ? styles.LinkAtivo : styles.Link} href="/news">Notícias</Link>
                        <Link className={pathname === '/gallery' ? styles.LinkAtivo : styles.Link} href="/gallery">Galeria de Fotos</Link>
                        <Link className={pathname === '/about' ? styles.LinkAtivo : styles.Link} href="/about">Sobre</Link>
                        <Link className={pathname === '/team' ? styles.LinkAtivo : styles.Link} href="/team">Equipe</Link>
                        <Link className={pathname === '/contact' ? styles.LinkAtivo : styles.Link} href="/contact">Contato</Link>
                    </div>
                )
            }
        </nav>
    )
}