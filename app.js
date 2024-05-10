// app.js

const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/users', usersRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El Server está que lo rompe ${PORT}`);
});






























// Logut de la API
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });