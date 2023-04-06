//ex1
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/views/ex1.html');
});

app.post('/form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = `${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`;

  res.send(message);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

//ex2
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/api/countries', (req, res) => {
  const { name, countries } = req.body;
  const message = `Your name is ${name} and you visited ${countries.length} countries. Keep traveling!`;
  res.send({ message });
});

//ex3
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

let articles = [];

app.post('/articles', (req, res) => {
  const article = {
    id: articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1,
    title: req.body.title,
    content: req.body.content
  };
  articles.push(article);
  res.send(`Article "${article.title}" (ID: ${article.id}) has been added successfully.`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

