import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.LogoContainer}>
                <Image className={styles.Logo} src="/Logo.svg" width={40} height={40} alt="Logo do Site" />
                <p className={styles.TextLogo}>ACSSBS</p>
            </div>
            <div className={styles.HamburgerContainer}>
                <span className={styles.HamburgerIcon}>menu</span>
            </div>
            <div className={styles.LinkContainer}>
                <Link className={styles.LinkAtivo} href="/">Página Inicial</Link>
                <Link className={styles.Link} href="/news">Notícias</Link>
                <Link className={styles.Link} href="/gallery">Galeria de Fotos</Link>
                <Link className={styles.Link} href="/about">Sobre</Link>
                <Link className={styles.Link} href="/team">Equipe</Link>
                <Link className={styles.Link} href="/contact">Contato</Link>
            </div>
        </nav>
    )
}