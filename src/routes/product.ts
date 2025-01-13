import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';
import { createProductValidation } from '../validation/product/create_product';

const router = Router();

router.post('/', createProductValidation, createProduct);

export { router as productRoutes };
