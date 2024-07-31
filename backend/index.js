const express = require('express');
const app = express();
const port = 3000;

const serverResponse = [
  'Server 1',
  'Transparency',
  'Courage',
  'Quality',
  'Fun',
];

app.get('/api/codecool', (req, res) => {
  res.json(serverResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
