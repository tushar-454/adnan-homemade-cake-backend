import { Router } from 'express';
import { createCoupon } from '../controllers/coupon/create_coupon';
import { createCouponValidation } from '../validation/coupon/create_coupon';

const router = Router();

router.post('/', createCouponValidation, createCoupon);

export { router as couponRoutes };
