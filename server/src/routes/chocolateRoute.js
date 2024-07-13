import express from 'express';
import {
  deleteChocolate,
  getChocolates,
  postChocolate,
} from '../controllers/chocolateController.js';

const router = express.Router();

router.get('/', getChocolates);
router.post('/', postChocolate);
router.delete('/:id', deleteChocolate);

export default router;
