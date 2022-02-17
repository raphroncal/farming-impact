const express = require(`express`);
const indexController = require(`../controllers/indexController.js`);

const app = express();

app.get('/', indexController.getIndex);
app.get('/sign-up', indexController.getSignUp);
app.get('/characters', indexController.getCharacters);
app.get('/logout', indexController.getLogOut);

app.get('/characters/:character', indexController.getCharacter);

app.post('/sign-up', indexController.postSignUp);
app.post('/login', indexController.postLogin);

module.exports = app;