fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
.then(response => response.json())
.then(data => {
  const table = document.querySelector('#paintings');
  data.forEach(painting => {
    const row = table.insertRow();
    row.insertCell().textContent = painting.name;
    row.insertCell().textContent = painting.year;
    row.insertCell().textContent = painting.artist;
  });
})
.catch(error => console.error(error));

const express = require('express');
const app = express();

// serve the public directory as a static directory
app.use(express.static('public'));

// GET route to display the form
app.get('/ex1', (req, res) => {
  res.sendFile(__dirname + '/views/ex1.html');
});

// POST route to process the form and send the confirmation message
app.post('/ex1', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // send the confirmation message
  const confirmationMsg = `${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`;
  res.send(confirmationMsg);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
