'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Oxymaur was having fun here on a Wednesday night, and are you automatically deployed on RENDER NOW????');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
