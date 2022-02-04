import QuizModel from '../model/quiz'
import styles from '../styles/Question.module.scss'

type QuestionProps = {
  value: QuizModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <h1>Questao</h1>
    </div>
  )
}
