import AnswerModel from '../../model/answer'
import QuizModel from '../../model/quiz'

const questions: QuizModel[] = [
  new QuizModel(101, 'Qual nome do super-heroi mais famoso?', [
    AnswerModel.correctAnswer('Juvenal'),
    AnswerModel.wrongAnswer('Thor'),
    AnswerModel.wrongAnswer('Capitão América'),
    AnswerModel.wrongAnswer('Morto'),
  ]),
  new QuizModel(102, 'Qual nome da minha filha?', [
    AnswerModel.correctAnswer('Sophie'),
    AnswerModel.wrongAnswer('Maria'),
    AnswerModel.wrongAnswer('Renata'),
    AnswerModel.wrongAnswer('Marta'),
  ]),
]

export default questions
