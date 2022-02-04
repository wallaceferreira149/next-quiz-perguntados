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
  new QuizModel(103, 'Com quantos anos Jesus morreu?', [
    AnswerModel.correctAnswer('33'),
    AnswerModel.wrongAnswer('65'),
    AnswerModel.wrongAnswer('45'),
    AnswerModel.wrongAnswer('30'),
  ]),
  new QuizModel(104, 'Qual triâgulo tem todos os lados iguais?', [
    AnswerModel.correctAnswer('isósceles'),
    AnswerModel.wrongAnswer('retângulo'),
    AnswerModel.wrongAnswer('trapésio'),
    AnswerModel.wrongAnswer('escaleno'),
  ]),
]

export default questions
