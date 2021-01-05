const express = require('express');
const http = require('http');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// testing again
// Log all requests
app.use((req, res, next) => {
  console.log("Request query parameters:");
  console.log(req.query);

  console.log("Request body:");
  console.log(req.body);
  next();
});

const server = app.listen(PORT, () => {
  console.log(`Server listening at port ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.send({'status': 'ok'});
});

app.post('/test', (req, res) => {
  res.send({'status': 'test'});
});

