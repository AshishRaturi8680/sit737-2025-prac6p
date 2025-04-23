const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Management System! ');
});

app.listen(port, () => {
  console.log(`Hotel app is running on port ${port}`);
});
