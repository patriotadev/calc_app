const router = require('express').Router();
const { RegisterHandler, LoginHandler, LogoutHandler } = require('../controller/auth');


router.post('/register', RegisterHandler);

router.post('/login', LoginHandler);

router.post('/logout', LogoutHandler);

module.exports = router;