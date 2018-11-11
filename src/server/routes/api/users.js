const router = require('express').Router();
const winston = require('./../../config/logger');

const User = require('./../../models/User');

const { logger } = winston;

router.post('/', (req, res) => {
  // mock to verify that user integration test work
  logger.info('create user successfully! return user');
  if (req.body.user === null) {
    return res.status(500).json({ error: 'User can not be empty' });
  }
  const user = new User();
  user.name = req.body.user.name;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  return user
    .save()
    .then(() => res.status(201).json({
      user: {
        name: user.name,
        email: user.email
      }
    }))
    .catch(() => res.status(500).json({ error: 'Cannot save user to database' }));
});

module.exports = router;
