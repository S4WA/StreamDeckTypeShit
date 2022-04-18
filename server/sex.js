const express = require('express');

const audio = require('win-audio').speaker;
const app = express();


app.use(express.static('public'));

app.listen(3939, () => {
  console.log('listening on 3939');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/toggle', (req, res) => {
  audio.toggle();
  res.sendStatus(201);
});