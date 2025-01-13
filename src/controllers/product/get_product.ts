import { NextFunction, Request, Response } from 'express';
import { getProductService } from '../../services/product/get_product';

const getProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await getProductService();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

export { getProduct };
