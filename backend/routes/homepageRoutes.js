import express from 'express';
import Homepage from '../models/Homepage.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Homepage.findOne();
  res.json(data);
});

export default router;
