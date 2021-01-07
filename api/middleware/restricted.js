const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/secret');

module.exports = (req, res, next) => {
  const token = req.headers.Authorization;
  if(!token) {
    res.status(401).json({ message: 'Token is required' });
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if(err) {
        res.status(401).json({ message: 'Token is invalid' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};