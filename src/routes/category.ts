import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';
import { createCategoryValidation } from '../validation/category/create_category_validation';

const router = Router();

router.post('/', createCategoryValidation, createCategory);

export { router as categoryRoutes };
