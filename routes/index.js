const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController')
const { getAllTodos } = require('../controllers/todoController')
router.get('/', renderHomePage);
router.get('/todos', getAllTodos);
router.use('/api', apiRoutes);
router.get('/login', loginView);
router.get('/signup', signupView);

module.exports = router;
