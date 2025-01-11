import { Router } from 'express';
import { createCarousel } from '../controllers/carousel/create_carousel';
import { deleteCarousel } from '../controllers/carousel/delete_carousel';
import { getCarousel } from '../controllers/carousel/get_carousel';
import { createCarouselValidation } from '../validation/carousel/create_carousel';

const router = Router();

router.post('/', createCarouselValidation, createCarousel);
router.get('/', getCarousel);
router.delete('/:carouselId', deleteCarousel);

export { router as carouselRoutes };
