import { Router } from 'express';
import { authRoutes } from './auth';
import { carouselRoutes } from './carousel';
import { categoryRoutes } from './category';

const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/category', categoryRoutes);
router.use('/api/v1/carousel', carouselRoutes);

export default router;
