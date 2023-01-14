const router = require('express').Router();
const { RegisterHandler, LoginHandler, LogoutHandler, GetUserHandler } = require('../controller/auth');


router.post('/register', RegisterHandler);

router.post('/login', LoginHandler);

router.post('/logout', LogoutHandler);

router.get('/users', GetUserHandler)

module.exports = router;