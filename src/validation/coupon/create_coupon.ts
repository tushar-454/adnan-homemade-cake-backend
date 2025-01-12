import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const createCouponValidationSchema = z.object({
  code: z.string({ message: 'Coupon code is Required' }),
  type: z.enum(['flat', 'percentage'], { message: 'Coupon type is Required [flat / percentage]' }),
  discount: z.number({ message: 'Coupon discount is Required as number' }).positive({ message: 'Coupon discount must be greater than 0' }),
  quantity: z.number({ message: 'Coupon quantity is Required as number' }).positive({ message: 'Coupon quantity must be greater than 0' }).optional(),
  startAt: z.number({ message: 'StartAt is Required as millisecond' }).gt(Date.now(), { message: 'Coupon startAt Date must greater then today millisecond' }).optional(),
  expireAt: z.number({ message: 'ExpireAt is Required as millisecond' }).gt(Date.now(), { message: 'Coupon expireAt Date must greater then today millisecond' }).optional(),
});

const createCouponValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = createCouponValidationSchema.parse(req.body);
    next();
  } catch (error) {
    const result = createCouponValidationSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export type CreateCouponInput = z.infer<typeof createCouponValidationSchema>;
export { createCouponValidation };
