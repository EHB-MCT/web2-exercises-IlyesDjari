const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));



app.get('/', (req, res) => {
      console.log('Local root called!');
  res.redirect('/info.html');
});

app.get('/randomtext', (req, res) => {
  res.send('Goodmorning, this is Ilyes');
});

app.get('/getData', (req, res) => {

  let data = {
    name: 'Ilyes',
    age: 19
  }

  res.send(data);
});

app.get('/api/boardgames', (req, res) => {
  let myJSON = fs.readFileSync('local/boardgames.json');
  let boardgames = JSON.parse(myJSON);
 res.send(boardgames);
});

app.get('/api/boardgame', (req, res) => {

});

app.listen(port, () => {
  console.log(`My first rest API app listening at http://localhost:${port}`);
});