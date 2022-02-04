export default class QuizModel {
  #id: number
  #title: string
  #answers: any[]
  #correct: boolean
  // #answered: boolean

  constructor(id: number, title: string, answers: any[], correct: boolean) {
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
    //FIXME: Implementar o método
    return false
  }
}
