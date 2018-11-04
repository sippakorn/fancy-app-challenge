const router = require('express').Router();

router.post('/', (req, res, next) => {
  // mock to verify that user integration test work
  return res.status(200).json({"user": req.body});
});

module.exports = router;