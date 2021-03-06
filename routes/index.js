const express = require('express');
const users = require('../apiServices/user/routes');
const group = require('../apiServices/group/routes');
const test = require('../apiServices/test/routes');
const auth = require('../apiServices/auth/routes');
const changeRequest = require('../apiServices/changeRequest/routes');

const router = express.Router();

router.use('/users', users);
router.use('/group', group);
router.use('/test', test);
router.use('/auth', auth);
router.use('/changerequest', changeRequest);

module.exports = router;

