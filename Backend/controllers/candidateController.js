const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res, next) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    const resumeUrl = req.file ? req.file.path : null;
    const candidate = await Candidate.create({ name, email, phone, jobTitle, resumeUrl })
    console.log(req.file);
    console.log(req.body);
    res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    next(error);
  }
}

exports.getCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    next(error);
  }
}

exports.updateStatus = async (req, res, next) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(candidate);
  } catch (error) {
    next(error);
  }
}

exports.deleteCandidate = async (req, res, next) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    next(error);
  }
}

exports.getMetrics = async (req, res, next) => {
  try {
    const total = await Candidate.countDocuments();
    const byStatus = await Candidate.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    res.json({ total, byStatus });
  } catch (error) {
    next(error);
  }
}