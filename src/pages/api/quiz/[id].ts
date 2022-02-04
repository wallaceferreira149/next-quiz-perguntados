import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    id: +req.query.id,
    name: `Wallace`,
  })
}
