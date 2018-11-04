const router = require("express").Router(),
  winston = require("./../../config/logger");

const logger = winston.logger;
router.post("/", (req, res, next) => {
  // mock to verify that user integration test work
  logger.info('create user successfully! return user');
  return res.status(200).json({ user: req.body });
});

module.exports = router;
