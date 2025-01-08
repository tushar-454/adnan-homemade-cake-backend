import { Router } from 'express';
import { clearToken } from '../controllers/auth/clear_token';
import { createToken } from '../controllers/auth/create_token';
import { createUser } from '../controllers/auth/create_user';
import { createUserValidation } from '../validation/auth/create_user_validation';

const router = Router();

router.post('/register', createUserValidation, createUser);
router.post('/token', createToken);
router.post('/logout', clearToken);

export { router as authRoutes };
