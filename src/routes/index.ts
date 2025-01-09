import { Router } from 'express';
import { authRoutes } from './auth';
import { categoryRoutes } from './category';

const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/category', categoryRoutes);

export default router;
