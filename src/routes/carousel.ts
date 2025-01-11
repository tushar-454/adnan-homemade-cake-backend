import { Router } from 'express';
import { createCarousel } from '../controllers/carousel/create_carousel';
import { createCarouselValidation } from '../validation/carousel/create_carousel';

const router = Router();

router.post('/', createCarouselValidation, createCarousel);

export { router as carouselRoutes };
