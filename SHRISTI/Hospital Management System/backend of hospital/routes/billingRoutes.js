import express from 'express';
import Billing from '../models/Billing.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bills = await Billing.find({});
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBill = new Billing(req.body);
    const saved = await newBill.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBill = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bill removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
