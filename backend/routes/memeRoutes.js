import express from 'express';
import { getMemes, setMeme, deleteMeme} from '../controllers/memeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getMemes).post(protect, setMeme);

router.route('/:id').delete(protect, deleteMeme);

export default router;

