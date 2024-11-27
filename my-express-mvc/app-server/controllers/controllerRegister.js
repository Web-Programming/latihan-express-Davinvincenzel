const Housing = require('../models/register');

const Insert = async (req, res) => {
  try {
    const register = new Housing(req.body);
    await register.save();
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Error creating housing', error: error.message });
  }
};

module.exports = { Insert };