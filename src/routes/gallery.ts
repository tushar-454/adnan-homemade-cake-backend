import { Router } from 'express';
import { createGallery } from '../controllers/gallery/create_gallery';
import { createGalleryValidation } from '../validation/gallery/create_gallery';

const router = Router();

router.post('/', createGalleryValidation, createGallery);

export { router as galleryRoutes };
