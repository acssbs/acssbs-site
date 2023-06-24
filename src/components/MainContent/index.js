import styles from './MainContent.module.css'

export function MainContent({ children }) {
    return (
        <main className={styles.MainContent}>
            {children}
        </main>
    )
}