export { };
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const homeRouter = require('./routes/homeRouter.tsx');
const profileRouter = require('./routes/feedRouter.tsx');
const { verifyUser, createUser } = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

//cookie parser
const cookieParser = require('cookie-parser');

//json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../src/styles/index.css')))

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'))
})

//routes
app.use('/api/profile', profileRouter)
app.use('/api/home', homeRouter)

app.post('/login', verifyUser, (req, res) => { return res.status(200).json() })
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