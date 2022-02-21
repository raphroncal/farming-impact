const express = require(`express`);
const indexController = require(`../controllers/indexController.js`);
const characterController = require(`../controllers/characterController`);

const app = express();

app.get('/', indexController.getIndex);
app.get('/sign-up', indexController.getSignUp);
app.get('/builds', indexController.getBuilds);
app.get('/logout', indexController.getLogOut);
app.get('/characters', indexController.getCharacters);
app.get('/character', indexController.getCharacter);

app.get('/characters/aether', characterController.getAether);
app.get('/characters/albedo', characterController.getAlbedo);
app.get('/characters/chongyun', characterController.getChongyun);
app.get('/characters/hu_tao', characterController.getHuTao);
app.get('/characters/klee', characterController.getKlee);
app.get('/characters/lisa', characterController.getLisa);
app.get('/characters/venti', characterController.getVenti);
app.get('/characters/xiangling', characterController.getXiangling);
app.get('/characters/xiao', characterController.getXiao);
app.get('/characters/xingqiu', characterController.getXingqiu);
app.get('/characters/zhongli', characterController.getZhongli);
// app.get('/characters/:name', indexController.getCharacter);


app.post('/sign-up', indexController.postSignUp);
app.post('/login', indexController.postLogin);

module.exports = app;