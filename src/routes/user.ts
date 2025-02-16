import { Router } from 'express';
import { getUsers } from '../controllers/user/get_users';
import { verifyAdmin } from '../middlewares/verify_admin';
import verifyToken from '../middlewares/verify_token';

const router = Router();

router.get('/', verifyToken, verifyAdmin, getUsers);

export { router as usersRoutes };
