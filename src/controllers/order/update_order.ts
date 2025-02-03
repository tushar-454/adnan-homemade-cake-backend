import { NextFunction, Request, Response } from 'express';
import { findOrderByProperty } from '../../services/order/find_order_by_property';
import { UpdateOrderInput } from '../../validation/order/update_order';

const updateOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { orderId } = req.params;
    const { status, is_deleted } = req.body as UpdateOrderInput;
    const order = await findOrderByProperty('_id', orderId);
    if (!order) {
      res.status(400).json({
        success: false,
        error: 'Resource not found',
      });
      return;
    }
    order.status = status ?? order.status;
    order.is_deleted = is_deleted ?? order.is_deleted;
    await order.save();

    res.status(200).json({
      success: true,
      message: 'Resource updated',
    });
  } catch (error) {
    next(error);
  }
};

export { updateOrder };
