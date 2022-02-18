const express = require(`express`);
const indexController = require(`../controllers/indexController.js`);

const app = express();

app.get('/', indexController.getIndex);
app.get('/sign-up', indexController.getSignUp);
app.get('/builds', indexController.getBuilds);
app.get('/logout', indexController.getLogOut);
app.get('/characters', indexController.getCharacters);
app.get('/character', indexController.getCharacter);

app.post('/sign-up', indexController.postSignUp);
app.post('/login', indexController.postLogin);

module.exports = app;