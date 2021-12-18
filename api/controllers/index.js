const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./events.js');
const appConfigController = require('./appConfig.js');
const authController = require('./auth.js');
const userController = require('./user.js');
const userNameController = require('./userName.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/events', postsController);
router.use('/application-configuration', appConfigController);
router.use('/user', userController);
router.use('/userName', userNameController);

module.exports = router;