import QuizModel from '../model/quiz'
import styles from '../styles/Quiz.module.scss'
import Button from './Button'
import Question from './Question'

type QuizProps = {
  question: QuizModel
  isLast: boolean
  questionAnswered: (question: QuizModel) => void
  goNextStep: () => void
}

export function Quiz(props: QuizProps) {
  function answerGiven(indice: number) {
    if (!props.question.answered) {
      props.questionAnswered(props.question.answerWith(indice))
    }
  }

  return (
    <div className={styles.container}>
      {props.question ? (
        <Question
          value={props.question}
          timeToResponse={6}
          onResponse={answerGiven}
          timeOut={props.goNextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.goNextStep}
        text={props.isLast ? 'Finalizar' : 'Próxima'}
      />
    </div>
  )
}
