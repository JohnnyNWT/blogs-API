const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

// não remova ou mova esse endpoin
app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;
