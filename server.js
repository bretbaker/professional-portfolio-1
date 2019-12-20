const express = require('express');
const path = require('path');

const app = express();

// init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname + '/public')));

// serve front end
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
