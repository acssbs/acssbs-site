import styles from '@/app/about/about.module.css'

export default function About() {
    return (
        <div className={styles.About}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Sobre a Associação Comunitária de Surdos de São Bento do Sul.</h1>
                <p className={styles.Text}>A Associação Comunitária de Surdos de São Bento do Sul (ACSSBS) foi fundada em 24/04/2022 na cidade de São Bento do Sul. Nossa associação tem como objetivo principal promover a inclusão e o bem-estar dos surdos em nossa comunidade. Através de ações e projetos, buscamos garantir o acesso à educação, cultura, lazer, saúde e outros direitos fundamentais para os surdos.</p>
                <p className={styles.Text}>A ACSSBS é formada por um grupo de pessoas comprometidas com a causa dos surdos e estamos sempre em busca de parcerias e voluntários para ampliar nosso impacto e realizar ainda mais pela comunidade surda.</p>
                <p className={styles.Text}>Seja você também parte desse movimento inclusivo e venha conhecer mais sobre a ACSSBS e nossas atividades. Junte-se a nós nessa jornada em prol da inclusão e da valorização dos surdos em São Bento do Sul.</p>
            </div>
        </div>
    )
}