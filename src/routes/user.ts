import { Router } from 'express';
import { createUser } from '../controllers/user/create_user';
import { createUserValidation } from '../validation/user/create_user_validation';

const router = Router();

router.post('/', createUserValidation, createUser);

export { router as usersRoutes };
