import { Router } from 'express';
import { authRoutes } from './auth';
import { carouselRoutes } from './carousel';
import { categoryRoutes } from './category';
import { couponRoutes } from './coupon';
import { galleryRoutes } from './gallery';
import { productRoutes } from './product';

const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/category', categoryRoutes);
router.use('/api/v1/carousel', carouselRoutes);
router.use('/api/v1/coupon', couponRoutes);
router.use('/api/v1/gallery', galleryRoutes);
router.use('/api/v1/product', productRoutes);

export default router;
