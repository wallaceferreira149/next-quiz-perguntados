import { NextApiRequest, NextApiResponse } from 'next'
import { shuffle } from '../../../utils/array'
import questions from '../questionsDB'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids = questions.map((question) => question.id)
  res.status(200).json(shuffle(ids))
}
