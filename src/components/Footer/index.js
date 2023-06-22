import styles from "./Footer.module.css"

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
                        <p className={styles.ContactText}>+55 (47) 9 9999-9999</p>
                    </div>
                    <div className={styles.TextContainer}>
                        <span className={styles.ContactIcon}>location_on</span>
                        <p className={styles.ContactText}>Rua das Flores, Nº 000, Baixo: Centro</p>
                    </div>
                </div>
                <div className={styles.MediaContainer}>
                    <div className={styles.Contato}>
                        <p className={styles.ContactTitle}>Redes Sociais:</p>
                        <div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/facebook.svg" width={12} height={12} alt="Logo do Facebook" />
                            <p className={styles.ContactText}>Facebook</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/instagram.svg" width={12} height={12} alt="Logo do Instagram" />
                            <p className={styles.ContactText}>Instagram</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/youtube.svg" width={12} height={12} alt="Logo do YouTube" />
                            <p className={styles.ContactText}>YouTube</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <Image className={styles.MediaIcon} src="/icons/twitter.svg" width={12} height={12} alt="Logo do Twitter" />
                            <p className={styles.ContactText}>Twitter</p>
                        </div>
                    </div>
                    <div className={styles.Contato}>
                        <p className={styles.ContactTitle}>Links Úteis:</p>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Página Inicial</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Notícias</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Galeria de Fotos</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Sobre</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Equipe</p>
                        </div>
                        <div className={styles.TextContainer}>
                            <p className={styles.ContactText}>Contato</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}