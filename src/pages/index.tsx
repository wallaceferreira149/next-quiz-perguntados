import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Quiz } from '../components/Quiz'
import QuizModel from '../model/quiz'

import styles from '../styles/Home.module.scss'

const BASE_URL = 'https://next-quiz-perguntados.vercel.app/api'
// const BASE_URL = 'http://localhost:3000/api'

const Home: NextPage = () => {
  const router = useRouter()
  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [question, setQuestion] = useState<QuizModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  async function fetchQuestionsId() {
    try {
      const resp = await fetch(`${BASE_URL}/quiz`)
      const ids = await resp.json()
      setQuestionsId(ids)
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchQuestion(id: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questions/${id}`)
      const questionJSON = await resp.json()
      const newQuestion = QuizModel.fromObject(questionJSON)
      setQuestion(newQuestion)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchQuestionsId()
  }, [])

  useEffect(() => {
    questionsId.length > 0 && fetchQuestion(questionsId[0])
  }, [questionsId])

  function questionAnswered(question: QuizModel) {
    setQuestion(question)
    const isCorrectAnswer = question.correct
    setCorrectAnswers(correctAnswers + (isCorrectAnswer ? 1 : 0))
  }

  function nextQuestionId() {
    if (question) {
      const nextId = questionsId.indexOf(question.id) + 1
      return questionsId[nextId]
    }
  }

  function goNextStep() {
    const nextId = nextQuestionId()
    nextId ? goNextQuestion(nextId) : finale()
  }

  function goNextQuestion(nextId: number) {
    fetchQuestion(nextId)
  }

  function finale() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsId.length,
        correctAnswers: correctAnswers,
      },
    })
  }

  return question ? (
    <Quiz
      question={question}
      isLast={nextQuestionId() === undefined}
      questionAnswered={questionAnswered}
      goNextStep={goNextStep}
    />
  ) : (
    <h1 className={styles.loading}>Loading...</h1>
  )
}

export default Home
