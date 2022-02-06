import AnswerModel from '../model/answer'

import styles from '../styles/Answer.module.scss'

type AnswerProps = {
  value: AnswerModel
  indice: number
  letter: string
  backColor: string
  onResponse: (indice: number) => void
}

export function Answer(props: AnswerProps) {
  const answer = props.value
  return (
    <div
      className={styles.answer}
      onClick={() => props.onResponse(props.indice)}
    >
      <div className={styles.content}>
        {!answer.showed ? (
          <div className={styles.front}>
            <div
              className={styles.letter}
              style={{ background: props.backColor }}
            >
              {props.letter}
            </div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        ) : (
          <div className={styles.back}>
            {answer.correct ? (
              <div className={styles.correct}>
                <div>A resposta certa é...</div>
                <div className={styles.text}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.wrong}>
                <div>A resposta informada está errada...</div>
                <div className={styles.text}>{answer.value}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
