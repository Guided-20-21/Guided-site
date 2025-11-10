require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Add security headers
app.use(helmet());

// Tell Express where to find CSS/images
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'GUIDED',
    slogan: 'The Path Is Yours.'
  });
});

// Run the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});