import QuizModel from '../model/quiz'
import styles from '../styles/Question.module.scss'
import { Statement } from './Statement'

type QuestionProps = {
  value: QuizModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Statement text={question.title} />
      <h1>Questao</h1>
    </div>
  )
}
