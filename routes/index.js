const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController')

router.get('/', renderHomePage);
router.use('/api', apiRoutes);
router.get('/login', loginView);
router.get('/signup', signupView);

module.exports = router;
