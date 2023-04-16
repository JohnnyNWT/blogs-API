const express = require('express');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
// não remova ou mova esse endpoin

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;
