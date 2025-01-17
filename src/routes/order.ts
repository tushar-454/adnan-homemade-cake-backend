import { Router } from 'express';
import { createOrder } from '../controllers/order/create_order';
import { deleteOrder } from '../controllers/order/delete_order';
import { getOrder } from '../controllers/order/get_order';
import { createOrderValidation } from '../validation/order/create_order';

const router = Router();

router.post('/', createOrderValidation, createOrder);
router.get('/', getOrder);
router.delete('/:orderId', deleteOrder);

export { router as orderRoutes };
