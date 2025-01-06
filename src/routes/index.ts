import { Router } from 'express';

const router = Router();

router.get('/d', (_req, res) => {
  res.status(200).json({ message: 'Ok' });
});

export default router;
