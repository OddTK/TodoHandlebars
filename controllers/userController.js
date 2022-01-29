const {
    User
} = require('../models');

module.exports = {
    // Creating users
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username, !email, !password) {
            return res.status(400).json({ error: 'You must provide username, email, and password'});
        }
        try {
            const user = await User.create({
                username,
                email,
                password
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    // Getting users
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({ plain: true }));
            // Specify which handlebars file you want to render - 2nd param is an object that we are getting from db
            res.render('allUsers', {
                users,
                favoriteFood: 'Udon', });
        } catch (e) {
            res.json(e);
        }
    },
};
