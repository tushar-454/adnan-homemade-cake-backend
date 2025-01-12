import { Coupon, ICoupon } from '../../models/Coupon';
import { CreateCouponInput } from '../../validation/coupon/create_coupon';

const createCouponService = async (coupon: CreateCouponInput): Promise<ICoupon | undefined> => {
  const { code, type, discount, quantity, startAt, expireAt } = coupon;
  try {
    const new_coupon = await Coupon.create({ code, type, discount, quantity, startAt, expireAt });
    await new_coupon.save();
    return new_coupon;
  } catch (error) {
    console.error('Error creating coupon:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { createCouponService };
