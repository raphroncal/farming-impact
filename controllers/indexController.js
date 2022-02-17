const db = require('../models/db.js');
const User = require('../models/UserModel.js')

const indexController = {
    /**
     * getIndex
     * 
     * renders the login page
     * @param {*} req 
     * @param {*} res 
     */
    getIndex: function(req, res) {
        res.render('login', {});
    },

    /**
     * getSignUp
     * 
     * renders the sign up page
     * @param {*} req 
     * @param {*} res 
     */
    getSignUp: function(req, res) {
        res.render('signup', {});
    },

    getCharacters: function(req, res) {
        res.render('characters', {});
    },

    /**
     * getLogOut
     * 
     * destroys the session and returns back to the login page
     * @param {*} req 
     * @param {*} res 
     */
    getLogOut: function(req,res) {
        req.session.destroy();
        res.render('login', {});
    },

    /**
     * postLogin
     * 
     * renders the characters page upon successful login
     * @param {*} req 
     * @param {*} res 
     */
    postLogin: function(req, res) {
        const sess = req.session;
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({username: username}, (err, result) => {
            if(!result)
                console.log(err);
            else {
                if(password == result.password)
                    res.send('characters');
                else
                    res.send('login');
            }
        })
    },

    /**
     * postSignUp
     * 
     * registers a user and adds them to the database
     * @param {*} req 
     * @param {*} res 
     */
    postSignUp: function(req, res) {
        let username = req.body.username;
        let password = req.body.password;

        let user = new User ({
            username: username,
            password: password
        });

        user.save();
        res.send(user);
    }
}

module.exports = indexController;