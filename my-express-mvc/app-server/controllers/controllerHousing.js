const Housing = require('../models/housing');

const Index = async (req, res) => {
  try {
    const housing = await Housing.find();
    if (!housing.length) {
      return res.status(200).json({ code: 200, message: 'collection is empty' });
    }
    res.status(200).json({ code: 200, message: 'success', data: housing });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Error retrieving housing', error: error.message });
  }
};

module.exports = { Index };