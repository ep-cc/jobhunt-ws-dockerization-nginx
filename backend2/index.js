const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

const serverResponse = [
  'Server 2',
  'Transparency',
  'Courage',
  'Quality',
  'Fun',
];

app.use(express.static(path.join(__dirname, 'frontend_build', 'dist')));

app.get('/api/codecool', (req, res) => {
  res.json(serverResponse);
});

//fallback for frontend routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend_build', 'dist','index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
