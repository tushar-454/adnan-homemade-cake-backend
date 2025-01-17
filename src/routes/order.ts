import { Router } from 'express';
import { createOrder } from '../controllers/order/create_order';
import { createOrderValidation } from '../validation/order/create_order';

const router = Router();

router.post('/', createOrderValidation, createOrder);

export { router as orderRoutes };
