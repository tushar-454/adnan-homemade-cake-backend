import { Router } from 'express';
import { createGallery } from '../controllers/gallery/create_gallery';
import { getGallery } from '../controllers/gallery/get_gallery';
import { updateGallery } from '../controllers/gallery/update_gallery';
import { createGalleryValidation } from '../validation/gallery/create_gallery';
import { updateGalleryValidation } from '../validation/gallery/update_gallery';

const router = Router();

router.post('/', createGalleryValidation, createGallery);
router.get('/', getGallery);
router.put('/:galleryId', updateGalleryValidation, updateGallery);

export { router as galleryRoutes };
