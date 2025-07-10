const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer')
const { protect } = require('../middleware/auth')
const {
  addCandidate,
  getCandidates,
  updateStatus,
  deleteCandidate,
  getMetrics
} = require('../controllers/candidateController');

router.post('/', protect, multer.single('resume'), addCandidate);
router.get('/', protect, getCandidates);
router.put('/:id/status', protect, updateStatus);
router.delete('/:id', protect, deleteCandidate);
router.get('/metrics', protect, getMetrics);

module.exports = router