import QuizModel from '../model/quiz'
import styles from '../styles/Question.module.scss'
import { Answer } from './Answer'
import { Statement } from './Statement'
import Timer from './Timer'

type QuestionProps = {
  value: QuizModel
  onResponse: (indice: number) => void
  timeOut: () => void
  timeToResponse: number
}

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
]

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Timer
        duration={props.timeToResponse || 10}
        timeOut={() => props.timeOut()}
      />
      <Statement text={question.title} />
      {question.answers.map((answer, i) => {
        return (
          <Answer
            key={i}
            value={answer}
            indice={i}
            letter={letters[i].value}
            backColor={letters[i].color}
            onResponse={props.onResponse}
          />
        )
      })}
    </div>
  )
}
