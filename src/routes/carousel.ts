import { Router } from 'express';
import { createCarousel } from '../controllers/carousel/create_carousel';
import { deleteCarousel } from '../controllers/carousel/delete_carousel';
import { getCarousel } from '../controllers/carousel/get_carousel';
import { updateCarousel } from '../controllers/carousel/update_carousel';
import { createCarouselValidation } from '../validation/carousel/create_carousel';
import { updateCarouselValidation } from '../validation/carousel/update_carousel';

const router = Router();

router.post('/', createCarouselValidation, createCarousel);
router.get('/', getCarousel);
router.put('/:carouselId', updateCarouselValidation, updateCarousel);
router.delete('/:carouselId', deleteCarousel);

export { router as carouselRoutes };
