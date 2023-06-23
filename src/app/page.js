import styles from './page.module.css'

import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.Introduction}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Associação Comunitária de Surdos de São Bento do Sul</h1>
                <p className={styles.Text}>Bem-vindo(a) à nossa Comunidade Surda!</p>
                <p className={styles.Text}>Nós somos uma plataforma online dedicada a conectar, fortalecer e empoderar a comunidade surda ao redor do mundo. Aqui, você encontrará um espaço acolhedor e inclusivo, onde todos são valorizados e respeitados.</p>
                <p className={styles.Text}>Nosso objetivo é promover a igualdade de oportunidades, conscientizar sobre a cultura e a língua de sinais, e criar um ambiente onde as vozes surdas possam ser ouvidas. Acreditamos que a comunicação é um direito fundamental, e é por isso que apoiamos e celebramos a Língua de Sinais como uma forma de expressão única e bela.</p>
                <p className={styles.Text}>Nossa comunidade é diversa e acolhedora, aberta a pessoas surdas, intérpretes, estudantes e todos aqueles que desejam aprender mais sobre a cultura surda. Juntos, podemos quebrar barreiras, desafiar estereótipos e construir um mundo mais inclusivo, onde a comunidade surda seja reconhecida e respeitada em todas as esferas da sociedade.</p>
                <p className={styles.Text}>Seja parte dessa comunidade vibrante e inspiradora! Explore nosso site, participe das discussões, compartilhe suas histórias e faça conexões significativas. Estamos aqui para apoiá-lo(a) em sua jornada e para promover um futuro mais inclusivo e igualitário para todos.</p>
                <p className={styles.Text}>Junte-se a nós na Comunidade Surda e vamos construir um mundo onde todos possam se comunicar e prosperar juntos!</p>
                <p className={styles.Text}>Equipe da Comunidade Surda</p>
            </div>
            <Image className={styles.Banner} src="/Banner.svg" width={630} height={480} alt="Banner do Site" priority={true} />
        </div>
    )
}
