import { NextFunction, Request, Response } from 'express';
import { createOrderService } from '../../services/order/create_order';
import { CreateOrderInput } from '../../validation/order/create_order';

const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { address, district, division, sub_district, line_items, coupon_code } = req.body as CreateOrderInput;
    const order = await createOrderService({});
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

export { createOrder };
