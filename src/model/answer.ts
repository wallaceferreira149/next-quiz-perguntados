export default class AnswerModel {
  #value: string
  #correct: boolean
  #showed: boolean

  constructor(value: string, correct: boolean, showed: false) {
    this.#value = value
    this.#correct = correct
    this.#showed = showed
  }

  static correctAnswer(text: string): AnswerModel {
    return new AnswerModel(text, true, false)
  }
  static wrongAnswer(text: string): AnswerModel {
    return new AnswerModel(text, false, false)
  }

  get value() {
    return this.#value
  }

  get correct() {
    return this.#correct
  }

  get showed() {
    return this.#showed
  }

  toObject() {
    return {
      value: this.#value,
      correct: this.#correct,
      showed: this.#showed,
    }
  }
}
