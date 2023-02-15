require('@babel/register');

const express = require('express');
const config = require('./config/serverConfig');

const mainRouter = require('./routes/render/main.routes');
const homeRouter = require('./routes/render/home.routes');
const regoRouter = require('./routes/render/registration.route');
const logoRouter = require('./routes/render/login.routes');
const oneCardRouter = require('./routes/api/onecard.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRouter);
app.use('/home', homeRouter);
app.use('/registration', regoRouter);
app.use('/login', logoRouter);
app.use('/api/card', oneCardRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});