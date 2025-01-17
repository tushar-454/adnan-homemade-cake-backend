import { Router } from 'express';
import { createOrder } from '../controllers/order/create_order';
import { createOrderValidation } from '../validation/order/create_order';
import { getOrder } from '../controllers/order/get_order';

const router = Router();

router.post('/', createOrderValidation, createOrder);
router.get('/', getOrder);

export { router as orderRoutes };
