import Link from 'next/link'

// import styles from "./not-found.module.css"

import styles from '@/app/not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.NotFound}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Página Não Encontrada.</h1>
                <Link className={styles.Link} href="/">Voltar para a Página Inicial.</Link>
            </div>
        </div>
    )
}