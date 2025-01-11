import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';
import { deleteCategory } from '../controllers/category/delete_category';
import { getCategory } from '../controllers/category/get_category';
import { updateCategory } from '../controllers/category/update_category';
import { createCategoryValidation } from '../validation/category/create_category';

const router = Router();

router.post('/', createCategoryValidation, createCategory);
router.get('/', getCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

export { router as categoryRoutes };
