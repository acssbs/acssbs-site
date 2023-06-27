import styles from '@/components/MainContent/MainContent.module.css'

export function MainContent({ children }) {
    return (
        <main className={styles.MainContent}>
            {children}
        </main>
    )
}