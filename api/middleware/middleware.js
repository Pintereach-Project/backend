const Auth = require('../auth/auth-model');

const isValidReg = (req, res, next) => {
  const user = req.body;
  if(!user || !user.email || !user.username || !user.password) {
    res.status(401).json({ message: 'Username, Email, and Password are required for registration' });
  } else {
    next();
  }
};

const isValid = (req, res, next) => {
  const user = req.body;
  if(!user || !user.username || !user.password) {
    res.status(401).json({ message: 'Username and Password are required for login' });
  } else {
    next();
  }
};

const isAvailable = async (req, res, next) => {
  const foundUser = await Auth.findBy({ username: req.body.username });
  const foundEmail = await Auth.findBy({ email: req.body.email });
  if(foundUser.length) {
    res.status(400).json({ message: 'Username taken' });
  } else if(foundEmail.length) {
    res.status(400).json({ message: 'Email taken' });
  } else {
    next();
  }
};

const isExistent = async (req, res, next) => {
  const foundUser = await Auth.findBy({ username: req.body.username });
  if(!foundUser.length) {
    res.status(400).json({ message: 'User doesn\'t exist' });
  } else {
    next();
  }
};

module.exports = {
  isValidReg,
  isValid,
  isAvailable,
  isExistent
};