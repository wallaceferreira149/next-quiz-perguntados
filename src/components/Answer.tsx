import AnswerModel from '../model/answer'

import styles from '../styles/Answer.module.scss'

type AnswerProps = {
  value: AnswerModel
  indice: number
  letter: string
  backColor: string
}

export function Answer(props: AnswerProps) {
  const answer = props.value
  return (
    <div className={styles.answer}>
      <div className={styles.content}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ background: props.backColor }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  )
}
