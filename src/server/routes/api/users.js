const router = require("express").Router(),
  winston = require("./../../config/logger"),
  mongoose = require("mongoose"),
  user = require('./../../models/User');

const User = mongoose.model('User');

const logger = winston.logger;
router.post("/", (req, res, next) => {
  // mock to verify that user integration test work
  logger.info("create user successfully! return user");
  if (req.body.user === null) {
    return res.status(500).json({ error: "User can not be empty" });
  }
  let user = new User();
  user.name = req.body.user.name;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user
    .save()
    .then(() => {
      return res.status(201).json({
        user: {
          name: user.name,
          email: user.email
        }
      });
    })
    .catch(() => {
      return res.status(500).json({ error: "Cannot save user to database" });
    });
});

module.exports = router;
