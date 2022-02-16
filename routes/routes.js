const express = require(`express`);
const indexController = require(`../controllers/indexController.js`);

const app = express();

app.post(`/login`, indexController.postLogin);
app.get(`/logout`, indexController.getLogOut);

module.exports = app;