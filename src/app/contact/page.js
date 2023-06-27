import Link from 'next/link'
import Image from 'next/image'

import styles from '@/app/contact/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.Contact}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Contato:</h1>
                <p className={styles.Text}>Agradecemos o seu interesse em entrar em contato conosco! A Associação Comunitária de Surdos de São Bento do Sul (ACSSBS) está disponível para receber suas dúvidas, sugestões, solicitações e qualquer outro tipo de comunicação.</p>
                <p className={styles.Text}>Você pode entrar em contato conosco de diversas formas:</p>
                <ul>
                    <li className={styles.ListItem}>
                        <p className={styles.TextItem}>
                            <span className={styles.ContactIcon}>email</span> E-mail:
                        </p>
                        <p className={styles.TextItem}>acssbs.site@gmail.com</p>
                    </li>
                    <li className={styles.ListItem}>
                        <p className={styles.TextItem}>
                            <span className={styles.ContactIcon}>smartphone</span> Telefone:
                        </p>
                        <p className={styles.TextItem}>+55 (47) 9 9694-4755</p>
                    </li>
                    <li className={styles.ListItem}>
                        <p className={styles.TextItem}>
                            <Image className={styles.MediaIcon} src="/icons/instagram.svg" width={12} height={12} alt="Logo do Instagram" />
                            Instagram:
                        </p>
                        <Link className={styles.LinkItem} href="https://www.instagram.com/acssbs/" target="_blank">
                            <p className={styles.TextItem} style={{ marginBottom: 8 }}>@acssbs</p>
                        </Link>
                    </li>
                </ul>
                <p className={styles.Text}>Estamos sempre abertos para ouvir você e trabalhar juntos em prol da comunidade surda. Fique à vontade para nos contatar e teremos o prazer em ajudar.</p>
                <p className={styles.Text}>Agradecemos pela sua colaboração e aguardamos o seu contato!</p>
            </div>
        </div>
    )
}