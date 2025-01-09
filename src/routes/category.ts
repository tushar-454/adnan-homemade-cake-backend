import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';
import { getCategory } from '../controllers/category/get_category';
import { createCategoryValidation } from '../validation/category/create_category_validation';

const router = Router();

router.post('/', createCategoryValidation, createCategory);
router.get('/', getCategory);

export { router as categoryRoutes };
