const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('dist'));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log('Server listening on port', port);
});