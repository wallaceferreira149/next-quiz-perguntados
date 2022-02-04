import { NextApiRequest, NextApiResponse } from 'next'

import questions from '../questionsDB'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idParam = +req.query.id

  const filterQuestion = questions.filter((q) => q.id === idParam)

  if (filterQuestion.length === 1) {
    const question = filterQuestion[0].shuffleAnswers()
    res.status(200).json(question.toObject())
  } else {
    res.status(204).send({ error: 'Questão não encontrada' })
  }
}
