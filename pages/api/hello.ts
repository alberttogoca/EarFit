// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Request, Response } from 'express';

export default function handler(req: Request, res: Response): void {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' });
  }
}
