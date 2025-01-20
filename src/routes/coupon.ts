import { Router } from 'express';
import { createCoupon } from '../controllers/coupon/create_coupon';
import { deleteCoupon } from '../controllers/coupon/delete_coupon';
import { getCoupon } from '../controllers/coupon/get_coupon';
import { getCouponByCode } from '../controllers/coupon/get_coupon_by_code';
import { updateCoupon } from '../controllers/coupon/update_coupon';
import { createCouponValidation } from '../validation/coupon/create_coupon';
import { updateCouponValidation } from '../validation/coupon/update_coupon';

const router = Router();

router.post('/', createCouponValidation, createCoupon);
router.get('/', getCoupon);
router.get('/:code', getCouponByCode);
router.put('/:couponId', updateCouponValidation, updateCoupon);
router.delete('/:couponId', deleteCoupon);

export { router as couponRoutes };
