import express from 'express';
import * as intelxController from '../controllers/intelxController.js';

const router = express.Router();

router.get('/search', intelxController.search);
router.get('/details/:id', intelxController.details);

export default router;
