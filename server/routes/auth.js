const router = require('express').Router();
const { RegisterHandler, LoginHandler } = require('../controller/auth');


router.post('/register', RegisterHandler);

router.post('/login', LoginHandler);

module.exports = router;