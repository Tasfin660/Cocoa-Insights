import express from 'express';
import { getPremiums } from '../controllers/premiumController.js';

const router = express.Router();

router.get('/', getPremiums);

export default router;
