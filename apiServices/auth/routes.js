var express = require('express');
var router = express.Router();
var controller  = require('./controller');
const authValidation = require('../../middlewares/authValidation');
const mailer = require('../../middlewares/mailer');

router.post('/signin', controller.sign_in);
router.post('/signup', [authValidation.checkDuplicatedEmail, controller.sign_up], mailer.sendConfirmation);
router.post('/confirmation/:id', controller.confirm);
//router.post('/isLogged', [authValidation.verifyToken], controller.sign_in);


module.exports = router;