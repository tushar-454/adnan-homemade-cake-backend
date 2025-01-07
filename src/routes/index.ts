import { Router } from 'express';
import { usersRoutes } from './user';

const router = Router();

router.use('/api/v1/users', usersRoutes);

export default router;
