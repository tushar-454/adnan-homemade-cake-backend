import { Router } from 'express';
import { createReview } from '../controllers/review/create_review';
import { getReview } from '../controllers/review/get_review';
import verifyToken from '../middlewares/verify_token';
import verifyUser from '../middlewares/verify_user';
import { createReviewValidation } from '../validation/review/create_review';

const router = Router();

router.post('/', verifyToken, verifyUser, createReviewValidation, createReview);
router.get('/', getReview);

export { router as reviewRoutes };
