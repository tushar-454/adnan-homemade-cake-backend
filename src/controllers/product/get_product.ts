import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../../models/Product';
import { getProductService } from '../../services/product/get_product';

const getProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { is_featured, is_deleted, sell_count, is_upcoming } = req.query as Partial<IProduct>;
    const products = await getProductService({ is_featured, is_deleted, sell_count, is_upcoming });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

export { getProduct };
