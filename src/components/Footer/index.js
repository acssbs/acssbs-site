// import styles from "./Footer.module.css"

import styles from '@/components/Footer/Footer.module.css'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Contato}>
                    <p className={styles.ContactTitle}>Contato e Endereço:</p>
                    <div className={styles.TextContainer}>
                        <span className={styles.ContactIcon}>email</span>
                        <p className={styles.ContactText}>acssbs.site@gmail.com</p>
                    </div>
                    <div className={styles.TextContainer}>
                        <span className={styles.ContactIcon}>smartphone</span>
                        <p className={styles.ContactText}>+55 (47) 9 9694-4755</p>
                    </div>
                    <div className={styles.TextContainer}>
                        <span className={styles.ContactIcon}>location_on</span>
                        <p className={styles.ContactText}>São Bento do Sul - Santa Catarina</p>
                    </div>
                </div>
                <div className={styles.MediaContainer}>
                    <div className={styles.Contato}>
                        <p className={styles.ContactTitle}>Redes Sociais:</p>
                        {/*<div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/facebook.svg" width={12} height={12} alt="Logo do Facebook" />
                            <p className={styles.ContactText}>Facebook</p>
                        </div>*/}
                        <Link className={styles.TextContainer} href="https://www.instagram.com/acssbs/" target="_blank">
                            <Image className={styles.MediaIcon} src="/icons/instagram.svg" width={18} height={18} alt="Logo do Instagram" />
                            <p className={styles.ContactText}>Instagram</p>
                        </Link>
                        {/*<div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/youtube.svg" width={12} height={12} alt="Logo do YouTube" />
                            <p className={styles.ContactText}>YouTube</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/twitter.svg" width={12} height={12} alt="Logo do Twitter" />
                            <p className={styles.ContactText}>Twitter</p>
                        </div>*/}
                    </div>
                    <div className={styles.Contato}>
                        <p className={styles.ContactTitle}>Links Úteis:</p>
                        <Link className={styles.TextContainer} href="/">
                            <p className={styles.ContactText}>Página Inicial</p>
                        </Link>
                        {/*<div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Notícias</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Galeria de Fotos</p>
                        </div>*/}
                        <Link className={styles.TextContainer} href="/about">
                            <p className={styles.ContactText}>Sobre</p>
                        </Link>
                        {/*<div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Equipe</p>
                        </div>*/}
                        <Link className={styles.TextContainer} href="/contact">
                            <p className={styles.ContactText}>Contato</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}