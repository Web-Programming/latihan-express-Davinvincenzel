const Housing = require('../models/housing');

const Index = async (req, res) => {
  try {
    const housing = await Housing.find();
    if (!housing.length) {
      return res.status(200).json({ code: 200, message: 'collection is empty' });
    }
    res.status(200).json(housing);
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Error retrieving housing', error: error.message });
  }
};

//untuk menghandle request show detail
const show = (req, res, next) => {
  const id = parseInt(req.params.id);
  Housing
      .findOne({id:(parseInt(req.params.id))})
      .then((hs) =>{
          const responseMessage = 
              hs
          ;
          res.status(200).json(responseMessage);
      })
      .catch((e) => {
          const responseMessage = {
              code: 404,
              success: false,
              message: "ID " + req.params.id + " Not Found",
          };
          res.status(404).json(responseMessage);
      });
};

const Insert = async (req, res) => {
  try {
    const register = new register(req.body);
    await register.save();
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Error creating housing', error: error.message });
  }
}

module.exports = {Index, show};