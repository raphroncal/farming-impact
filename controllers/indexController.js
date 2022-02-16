const dotenv = require(`dotenv`);

dotenv.config();

const indexController = {
    /**
     * getIndex
     * 
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getIndex: function(req, res) {
        res.render('login', {});
    },

    /**
     * getLogOut
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getLogOut: function(req,res) {
        req.session.destroy();
        res.render('login', {});
    },
}

module.exports = indexController;