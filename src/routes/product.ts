import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';
import { deleteProduct } from '../controllers/product/delete_product';
import { getProduct } from '../controllers/product/get_product';
import { updateProduct } from '../controllers/product/update_product';
import { createProductValidation } from '../validation/product/create_product';
import { updateProductValidation } from '../validation/product/update_product';

const router = Router();

router.post('/', createProductValidation, createProduct);
router.get('/', getProduct);
router.put('/:productId', updateProductValidation, updateProduct);
router.delete('/:productId', deleteProduct);

export { router as productRoutes };
