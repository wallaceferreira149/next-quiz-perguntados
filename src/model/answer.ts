export default class AnswerModel {
  #value: string
  #correct: boolean
  #showed: boolean

  constructor(value: string, correct: boolean, showed: false) {
    this.#value = value
    this.#correct = correct
    this.#showed = showed
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
}
