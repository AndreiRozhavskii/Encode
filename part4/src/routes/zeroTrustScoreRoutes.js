import express from 'express';
import {
  createScore,
  getAllScores,
  getScoreById,
  updateScore,
  deleteScore,
} from '../controllers/zeroTrustScoreController.js';

const router = express.Router();


router.post('/zerotrustscore', createScore);
router.get('/zerotrustscore', getAllScores);
router.get('/zerotrustscore/:id', getScoreById);
router.put('/zerotrustscore/:id', updateScore);
router.delete('/zerotrustscore/:id', deleteScore);

export default router;
