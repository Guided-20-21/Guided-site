const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve files from /public (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use EJS templates from /views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'GUIDED' });
});

// Start server
app.listen(PORT, () => {
  console.log(`GUIDED site running on port ${PORT}`);
});