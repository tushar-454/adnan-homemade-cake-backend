import { Router } from 'express';
import { createGallery } from '../controllers/gallery/create_gallery';
import { getGallery } from '../controllers/gallery/get_gallery';
import { createGalleryValidation } from '../validation/gallery/create_gallery';

const router = Router();

router.post('/', createGalleryValidation, createGallery);
router.get('/', getGallery);

export { router as galleryRoutes };
