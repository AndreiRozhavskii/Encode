import ZeroTrustScore from '../models/ZeroTrustScore.js';
import {db} from '../config/db.js';

export const createScore = async (req, res) => {
  try {
    const [id] = await db('zerotrustscore').insert(req.body);

    res.status(201).json({ message: 'Score created', id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating score', error });
  }
};

export const getAllScores = async (req, res) => {
  try {
    const scores = await ZeroTrustScore.getAll();
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scores', error });
  }
};


export const getScoreById = async (req, res) => {
  const { id } = req.params;
  try {
    const score = await ZeroTrustScore.getById(id);
    if (score) {
      res.status(200).json(score);
    } else {
      res.status(404).json({ message: 'Score not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching score', error });
  }
};

export const updateScore = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ZeroTrustScore.update(id, req.body);
    if (result) {
      res.status(200).json({ message: 'Score updated' });
    } else {
      res.status(404).json({ message: 'Score not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating score', error });
  }
};

export const deleteScore = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ZeroTrustScore.delete(id);
    if (result) {
      res.status(200).json({ message: 'Score deleted' });
    } else {
      res.status(404).json({ message: 'Score not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting score', error });
  }
};
