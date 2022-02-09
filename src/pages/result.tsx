import { useRouter } from 'next/router'
import Button from '../components/Button'
import { Statistic } from '../components/Statistic'

import styles from '../styles/Result.module.scss'

export default function Result() {
  const router = useRouter()

  const total = Number(router.query.total)
  const correctAnswers = Number(router.query.correctAnswers)
  const percent = Math.round((correctAnswers / total) * 100)

  return (
    <div className={styles.container}>
      <h1>Resultado Final</h1>
      <div className={styles.info}>
        <Statistic value={total} text="Perguntas" />
        <Statistic value={correctAnswers} text="Certas" backColor="#9CD2A4" />
        <Statistic
          value={`${percent}%`}
          text="Percentual"
          backColor="#DE6A33"
          fontColor="#fff"
        />
      </div>
      <Button href="/" text="Tentar novamente" />
    </div>
  )
}
