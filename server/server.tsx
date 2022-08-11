const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const apiRouter = require('./routes/apiRouter.tsx');
// const homeRouter = require('./routes/homeRouter.tsx');
// const profileRouter = require('./routes/profileRouter.tsx');
const { verifyUser, createUser, getUserInfo } = require('./controllers/authController.tsx');
// const cookieController = require('./controllers/cookieController.tsx');
// const sessionController = require('./controllers/sessionController.tsx');

//cookie parser
// const cookieParser = require('cookie-parser');

//json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../src/styles/index.css')))

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../build/index.html'))
// })

//routes
// app.use('/profile', profileRouter)
// app.use('/home', homeRouter)
app.use('/api', apiRouter)


// app.post('http://localhost:3000/signup', (req, res) => { 
//   console.log('made it to apiRouter signup');
//   return res.status(200).json() });

app.post('/login', getUserInfo, verifyUser, (req, res) => { return res.status(200).json(res.locals.loginResult)})
app.post('/signup', createUser, (req, res) => { return res.status(200).json() })



// Local Error Handler
app.use((req, res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 400,
    message: { err: 'There is an error' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => `Listening on port: ${PORT}`);

module.exports = app;