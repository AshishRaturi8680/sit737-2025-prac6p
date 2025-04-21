const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hotel Management Microservice is running!');
});

app.listen(PORT, () => {
  console.log(`Service is listening on port ${PORT}`);
});
