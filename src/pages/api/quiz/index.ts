import { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsDB'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(questions.map((question) => question.id))
}
