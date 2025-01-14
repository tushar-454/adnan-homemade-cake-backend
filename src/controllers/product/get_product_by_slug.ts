import { NextFunction, Request, Response } from 'express';
import { findProductByProperty } from '../../services/product/find_product_by_property';

const getProductBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const product = await findProductByProperty('slug', slug);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

export { getProductBySlug };
