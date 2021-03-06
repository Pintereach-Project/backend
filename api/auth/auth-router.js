const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { jwtSecret } = require('../../config/secret');

const Auth = require('./auth-model');
const { isValidReg, isValid, isAvailable, isExistent } = require('../middleware/middleware');

router.post('/register', isValidReg, isAvailable, async (req, res) => {
  try {
    const user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
    const newUser = await Auth.addUser(user);
    res.status(201).json(newUser);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', isValid, isExistent, async (req, res) => {
  try {
    const user = req.body;
    const [foundUser] = await Auth.findBy({ username: user.username });
    if(foundUser && bcrypt.compareSync(user.password, foundUser.password)) {
      const token = makeToken(foundUser);
      res.status(200).json({ message: `Welcome back ${foundUser.username}`, token, userId: foundUser.id });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '180s'
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
