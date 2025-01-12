import { Router } from 'express';
import { createCoupon } from '../controllers/coupon/create_coupon';
import { getCoupon } from '../controllers/coupon/get_coupon';
import { updateCoupon } from '../controllers/coupon/update_coupon';
import { createCouponValidation } from '../validation/coupon/create_coupon';
import { updateCouponValidation } from '../validation/coupon/update_coupon';

const router = Router();

router.post('/', createCouponValidation, createCoupon);
router.get('/', getCoupon);
router.put('/:couponId', updateCouponValidation, updateCoupon);

export { router as couponRoutes };
