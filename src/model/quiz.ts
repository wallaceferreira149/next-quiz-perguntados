import { shuffle } from '../utils/array'
import AnswerModel from './answer'

export default class QuizModel {
  #id: number
  #title: string
  #answers: AnswerModel[]
  #correct: boolean

  constructor(
    id: number,
    title: string,
    answers: AnswerModel[],
    correct = false
  ) {
    this.#id = id
    this.#title = title
    this.#answers = answers
    this.#correct = correct
  }
  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get answers() {
    return this.#answers
  }

  get correct() {
    return this.#correct
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.showed) return true
    }
    return false
  }

  shuffleAnswers(): QuizModel {
    const answersShuffle = shuffle(this.#answers)
    return new QuizModel(this.#id, this.#title, answersShuffle, this.#correct)
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      answers: this.#answers.map((answer) => answer.toObject()),
      correct: this.#correct,
    }
  }
}
